import React from 'react'
import { Contact } from './Contact'
import { AboutMe } from './AboutMe'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Welcome } from './Welcome'

export const Body = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
