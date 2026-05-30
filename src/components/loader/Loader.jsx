import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import '../../styles/components/Loader.css';

const WORD = 'LucasEJA';
const LETTERS = WORD.split('');
const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
const STAGGER = 0.24;
const TICK_MS = 42;
const TOTAL_MS = 240;
const FILL_MS = 3600;
const EXIT_MS = 4600;
const MIN_SHOW_MS = 2600;
const EXIT_EASE = [0.76, 0, 0.24, 1];
const STORAGE_KEY = 'lucaseja_loader_seen';

const randomChar = () => POOL[Math.floor(Math.random() * POOL.length)];

const ScrambleLetter = ({ char, delay, reduceMotion }) => {
  const [display, setDisplay] = useState('\u00a0');
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (char === ' ' || reduceMotion) {
      setDisplay(char === ' ' ? '\u00a0' : char);
      setLocked(true);
      return undefined;
    }

    let elapsed = 0;
    let timerId;

    const tick = () => {
      elapsed += TICK_MS;
      if (elapsed >= TOTAL_MS) {
        setDisplay(char);
        setLocked(true);
        return;
      }

      setDisplay(randomChar());
      timerId = window.setTimeout(tick, TICK_MS);
    };

    const startId = window.setTimeout(() => {
      timerId = window.setTimeout(tick, TICK_MS);
    }, delay * 1000);

    return () => {
      window.clearTimeout(startId);
      window.clearTimeout(timerId);
    };
  }, [char, delay, reduceMotion]);

  if (char === ' ') {
    return <span aria-hidden="true" className="loader-space" />;
  }

  const letterClass = locked ? 'loader-letter is-locked' : 'loader-letter is-scrambling';

  return (
    <motion.span aria-hidden="true" className={letterClass}>
      {display}
    </motion.span>
  );
};

export const Loader = () => {
  const prefersReducedMotion = useReducedMotion();
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const subtitleDelay = useMemo(() => LETTERS.length * STAGGER + 0.2, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (window.sessionStorage.getItem(STORAGE_KEY)) {
      setDone(true);
      return undefined;
    }

    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    if (prefersReducedMotion) {
      setProgress(100);
    }

    const start = Date.now();
    const exitDelay = prefersReducedMotion ? 900 : EXIT_MS;

    const barTick = window.setInterval(() => {
      const value = prefersReducedMotion
        ? 100
        : Math.min(Math.floor(((Date.now() - start) / FILL_MS) * 100), 100);

      setProgress(value);

      if (value >= 100) {
        window.clearInterval(barTick);
      }
    }, 20);

    const exitTimer = window.setTimeout(() => {
      body.style.overflow = previousOverflow;
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
      setDone(true);
    }, Math.max(exitDelay, MIN_SHOW_MS));

    return () => {
      window.clearInterval(barTick);
      window.clearTimeout(exitTimer);
      body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion]);

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-overlay"
          role="status"
          aria-live="polite"
          aria-label="Cargando el portafolio de LucasEJA"
          aria-busy="true"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.92, ease: EXIT_EASE }}
        >
          <div className="loader-grid" aria-hidden="true" />

          <h1 className="loader-title" style={{ fontSize: 'clamp(40px, 9vw, 96px)' }}>
            {LETTERS.map((char, index) => (
              <ScrambleLetter
                key={`${char}-${index}`}
                char={char}
                delay={index * STAGGER}
                reduceMotion={prefersReducedMotion}
              />
            ))}
          </h1>

          <motion.p
            className="loader-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: subtitleDelay, duration: 0.8 }}
          >
            Desarrollador de Software
          </motion.p>

          <div className="loader-footer">
            <div className="loader-footer-row">
              <span className="loader-label">Cargando experiencia</span>
              <span className="loader-progress">{String(progress).padStart(3, '0')}%</span>
            </div>
            <motion.div
              className="loader-bar"
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: 'easeOut', duration: 0.08 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
