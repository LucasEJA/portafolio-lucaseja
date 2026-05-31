import React from 'react';
import { Welcome, AboutMe, Projects, Skills, Certifications } from './sections';
import { Contact } from './forms';
import '../styles/components/Body.css';

export const Body = () => {
  return (
    <main>
      <Welcome />
      <Skills />
      <Projects />
      <AboutMe />
      <Certifications />
      <Contact />
    </main>
  );
};