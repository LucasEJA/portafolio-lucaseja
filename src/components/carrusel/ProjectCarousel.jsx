import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PROJECTS_DATA } from '../../constants/projectsData';
import { CardProject } from '../ui/CardProject';
import '../../styles/components/ProjectCarousel.css';

const AUTO_SLIDE_DURATION = 8000;
const MANUAL_PAUSE_DURATION = 10000;
const MANUAL_TRANSITION_DURATION = 350;
const arrowBaseClass = 'project-carousel-arrow';

const getVisibleCount = (width) => {
  if (width < 560) return 1;
  if (width < 980) return 2;
  return 3;
};

const totalProjects = PROJECTS_DATA.length;
const duplicatedProjects = [
  ...PROJECTS_DATA,
  ...PROJECTS_DATA,
  ...PROJECTS_DATA,
  ...PROJECTS_DATA,
  ...PROJECTS_DATA,
];

const PROJECT_IMAGE_SOURCES = [
  ...new Set(PROJECTS_DATA.map((project) => project.imageUrl).filter(Boolean)),
];

export const ProjectCarousel = () => {
  const animationFrameRef = useRef(null);
  const pauseTimerRef = useRef(null);
  const manualTransitionTimerRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const isAutoPausedRef = useRef(false);
  const slideIndexRef = useRef(totalProjects * 2);
  const trackTransitionRef = useRef('none');

  const [viewportWidth, setViewportWidth] = useState(() => (
    typeof window === 'undefined' ? 1200 : window.innerWidth
  ));
  const [slideIndex, setSlideIndex] = useState(totalProjects * 2);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isManualTransitioning, setIsManualTransitioning] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  const visibleCount = getVisibleCount(viewportWidth);
  const slideWidthPercent = 100 / visibleCount;

  const setSlideIndexSafe = (nextIndex, shouldAnimate) => {
    trackTransitionRef.current = shouldAnimate
      ? `transform ${MANUAL_TRANSITION_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
      : 'none';
    slideIndexRef.current = nextIndex;
    setSlideIndex(nextIndex);
  };

  const recenterSlideIndex = (currentIndex) => {
    if (currentIndex < totalProjects * 2) {
      return currentIndex + totalProjects;
    }

    if (currentIndex >= totalProjects * 3) {
      return currentIndex - totalProjects;
    }

    return currentIndex;
  };

  const triggerManualNavigation = (direction) => {
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }

    if (manualTransitionTimerRef.current) {
      clearTimeout(manualTransitionTimerRef.current);
    }

    isAutoPausedRef.current = true;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    lastTimestampRef.current = null;

    setIsAutoPaused(true);
    setIsManualTransitioning(true);

    const delta = direction === 'next' ? 1 : -1;
    const nextIndex = slideIndexRef.current + delta;
    setSlideIndexSafe(nextIndex, true);

    manualTransitionTimerRef.current = setTimeout(() => {
      setIsManualTransitioning(false);
      const currentIndex = slideIndexRef.current;

      if (currentIndex < totalProjects * 2 || currentIndex >= totalProjects * 3) {
        const recenteredIndex = recenterSlideIndex(currentIndex);
        setSlideIndexSafe(recenteredIndex, false);
      }
    }, MANUAL_TRANSITION_DURATION);

    pauseTimerRef.current = setTimeout(() => {
      isAutoPausedRef.current = false;
      setIsAutoPaused(false);
    }, MANUAL_PAUSE_DURATION);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    PROJECT_IMAGE_SOURCES.forEach((source) => {
      const image = new Image();
      image.src = source;
    });
  }, []);

  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    lastTimestampRef.current = null;

    if (isAutoPaused || isAutoPausedRef.current || isHoverPaused) {
      return undefined;
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current == null) {
        lastTimestampRef.current = timestamp;
      }

      const elapsed = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (elapsed > 0) {
        const nextIndex = slideIndexRef.current + (elapsed / AUTO_SLIDE_DURATION);
        slideIndexRef.current = nextIndex;
        setSlideIndex(nextIndex);

        if (nextIndex < totalProjects * 2 || nextIndex >= totalProjects * 3) {
          const recenteredIndex = recenterSlideIndex(nextIndex);
          slideIndexRef.current = recenteredIndex;
          trackTransitionRef.current = 'none';
          setSlideIndex(recenteredIndex);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isAutoPaused, visibleCount, isHoverPaused]);

  useEffect(() => () => {
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }

    if (manualTransitionTimerRef.current) {
      clearTimeout(manualTransitionTimerRef.current);
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  return (
    <div
      className="project-carousel"
      onMouseEnter={() => setIsHoverPaused(true)}
      onMouseLeave={() => setIsHoverPaused(false)}
    >
      <div className="project-carousel-nav">
        <button
          type="button"
          className={`${arrowBaseClass} project-carousel-prev`}
          onClick={() => triggerManualNavigation('prev')}
          aria-label="Proyecto anterior"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          type="button"
          className={`${arrowBaseClass} project-carousel-next`}
          onClick={() => triggerManualNavigation('next')}
          aria-label="Proyecto siguiente"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      <div className="project-carousel-viewport">
        <div
          className="project-carousel-track"
          style={{
            transform: `translate3d(${-slideIndex * slideWidthPercent}%, 0, 0)`,
            transition: trackTransitionRef.current,
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className={`project-carousel-slide ${isManualTransitioning ? 'is-manual' : ''}`}
              style={{ flex: `0 0 ${slideWidthPercent}%` }}
            >
              <CardProject
                imageUrl={project.imageUrl}
                projectName={project.projectName}
                description={project.description}
                linkProy={project.driveLink}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
