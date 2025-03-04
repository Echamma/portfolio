import React from 'react'
import Proj from './Proj';
import mhw from '../assests/images/mhw.png'
import lifestylerpg from '../assests/images/lifestyl.png'

function Projects() {
  const projects = [
    {
        "name": "Monster Hunter",
        "image": mhw,
        "desc" : "This was an custom class maker for a dnd campain with monster hunter weapons",
        "git" :  "https://github.com/Echamma/mhw_pokedex.git",
        "tech" : ["React JS","TailwindCss", "Firebase Hosting", "Firestore", "JSON"]
    },
    {
        "name": "Lifestyle RPG",
        "image": lifestylerpg,
        "desc" : "Turn your life into an rpg with this simple todo app with a leveling feature",
        "git" :  "https://github.com/Echamma/lifeStyleRpg_Backend",
        "tech" : ["React JS","Express JS","TailwindCss", "SQLite","Node JS","Firebase Hosting", "Render Hosting"]
    },
  ]
  
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <Proj props={proj} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects;