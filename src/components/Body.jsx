import React from 'react';
import { Welcome, AboutMe, Projects, Skills } from './sections';
import { Contact } from './forms';
import '../styles/components/Body.css';

export const Body = () => {
  return (
    <main>
      <Welcome />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};