import React from 'react'

function Projects() {
  projects=[
    {
        "name": "Monster Hunter",
        "image": "#link",
        "desc" : "This was an custom class maker for a dnd campain with monster hunter weapons",
        "git" :  "https://github.com/Echamma/mhw_pokedex.git",
        "tech" : ["React JS","TailwindCss", "Firebase Hosting", "Firestore", "JSON"]
    },
    {
        "name": "Lifestyle RPG",
        "image": "#link",
        "desc" : "Turn your life into an rpg with this simple todo app with a leveling feature",
        "git" :  "https://github.com/Echamma/lifeStyleRpg_Backend",
        "tech" : ["React JS","Express JS","TailwindCss", "SQLite","Node JS","Firebase Hosting", "Render Hosting"]
    },
  ]
  
    return (
    <div>
        <h1>Featured Projects</h1>
        {projects.map((proj,index)=>{
            
        })}
    </div>
  )
}

export default Projects;