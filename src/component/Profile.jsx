import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import logo from '../assests/logo.png'
function ContactLinks() {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-4 flex items-center justify-center">
            <img
              src={logo}
              className=" rounded-lg p-4"
              />
            
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Elias Chamma</h2>
          <p className="text-gray-400 mb-4">Software Engineer</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/eliashchamma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 flex flex-col items-center"
          >
            <FaGithub size={32} />
            <span className="text-xs mt-1">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/elias-chamma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 flex flex-col items-center"
          >
            <FaLinkedin size={32} />
            <span className="text-xs mt-1">LinkedIn</span>
          </a>
          <a 
            href="/Elias_Chamma_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 flex flex-col items-center"
          >
            <FaFileAlt size={32} />
            <span className="text-xs mt-1">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;