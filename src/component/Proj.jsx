import React from 'react'
import { FaGithub } from 'react-icons/fa6'

function Proj({props}) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-6">
      <img 
        src={props.image} 
        alt={props.name} 
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-3">{props.name}</h1>
        <p className="text-gray-300 mb-4">{props.desc}</p>
        
        <div className="flex items-center justify-between mb-4">
          <a 
            href={props.git} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <FaGithub className="mr-2" /> 
            <span>Source</span>
          </a>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {props.tech.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proj