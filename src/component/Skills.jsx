import React from 'react';
import { FaReact, FaNode, FaPython, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import DotNet from "../assests/dotnet.png"

function Skills() {
  const icons = [
    { Icon: FaReact, name: 'React' },
    { Icon: FaNode, name: 'Node.js' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaJava, name: 'Java' },
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3, name: 'CSS3' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: RiTailwindCssFill, name: 'Tailwind CSS' },
    { image: DotNet, name: '.NET' }
  ];
  
  return (
    <div className="w-full py-16 bg-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Skills & Technologies</h2>
      
      <div className="relative overflow-hidden">
        <div className="inline-flex animate-marquee whitespace-nowrap">
          {[...icons, ...icons].map((item, index) => (
            <div 
              key={`icon-${index}`} 
              className="flex flex-col items-center justify-center mx-8 min-w-[120px] transform transition-all duration-300 hover:scale-110"
            >
              {item.Icon ? (
                <item.Icon 
                  className="text-6xl mb-3 text-gray-300 hover:text-green-400 transition-colors" 
                />
              ) : (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-16 mb-3 object-contain filter grayscale hover:grayscale-0 transition-all" 
                />
              )}
              <span className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation style for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .inline-flex:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Skills;