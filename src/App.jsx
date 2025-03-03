import { useState } from 'react'
import './App.css'
import Profile from './component/profile'
import CurrentProjects from './component/CurrentProjects'
import Projects from './component/projects'
import HireMe from './component/hireme'
import Clients from './component/Clients'
import Skills from './component/Skills'


function App() {

  return (
    <div>
      <Profile></Profile>
      <CurrentProjects></CurrentProjects>
      <Projects></Projects>
      <HireMe></HireMe>
      <Clients></Clients>
      <Skills></Skills>
    </div>
  )
}

export default App
