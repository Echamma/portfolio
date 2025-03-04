import React from 'react'

function Clients() {
  const clients = [
    {
      name: "Green Vibes Lebanese Youth Group",
      description: "Developed a full-stack web solution that enhanced user engagement by 40% and reduced bounce rates by 30%. Implemented responsive features and optimized backend architecture using Node.js, Express.js, and MongoDB.",
      location: "Tripoli, Lebanon",
      projectHighlights: [
        "Improved website content organization",
        "Created responsive contact popup",
        "Implemented scalable component architecture"
      ]
    },
    {
      name: "Marionnettes Merveilles Mireille",
      description: "Engineered an interactive web platform using React.js, Tailwind CSS, and TypeScript that increased user engagement and attracted more clients. Implemented innovative design features like continuous image marquee and particle animations.",
      location: "Laval, Canada", 
      projectHighlights: [
        "Created responsive marketing website",
        "Integrated interactive visual elements",
        "Implemented tsparticles animation effects"
      ]
    }
  ]

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Client Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">{client.name}</h3>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">Location:</strong> {client.location}
            </p>
            <p className="text-gray-300 mb-4">{client.description}</p>
            <div className="bg-gray-700 rounded-md p-4">
              <h4 className="text-lg font-semibold text-white mb-3">Project Highlights</h4>
              <ul className="list-disc list-inside text-gray-300">
                {client.projectHighlights.map((highlight, highlightIndex) => (
                  <li 
                    key={highlightIndex} 
                    className="mb-2 last:mb-0 hover:text-green-300 transition-colors"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients;