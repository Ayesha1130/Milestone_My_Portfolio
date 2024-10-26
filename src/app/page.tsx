import React from 'react'
import About from './about/page'
import Hero from './components/Hero/Hero'
import Contact from './contact/page'
import Skills from './skills/page'
import Projects from './projects/page'


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  )
}
