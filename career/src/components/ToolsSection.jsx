import React from 'react';
import StudentImage from '../assets/Hero.png'; 

function ToolsSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-cyan-400">Tools</span> <span className="text-indigo-800">For Teachers</span>
            </h2>
            <h2 className="text-4xl font-bold text-indigo-800">
              And Learners
            </h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mt-6 text-lg max-w-md">
          Empower teachers and students with dynamic tools for interactive learning. Assign, complete, and submit tasks in real-time for a seamless classroom experience.
          </p>
        </div>
        
        <div className="md:w-1/2 relative">

          <div className="relative">
    
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-400 rounded-full opacity-90 z-0"></div>

            <img 
              src={StudentImage}
              alt="Student with notebook" 
              className="relative z-10 max-w-md ml-auto"
            />
      
            <div className="absolute top-12 right-24 z-20">
              <div className="bg-white p-2 rounded shadow-md">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v10H4V6zm2 2v6h12V8H6z"></path>
                </svg>
              </div>
            </div>
            
            <div className="absolute top-0 right-12 z-20">
              <div className="bg-green-400 w-4 h-4 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-20 right-0 z-20">
              <div className="bg-white p-2 rounded shadow-md">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"></path>
                </svg>
              </div>
            </div>
            
            <div className="absolute top-24 left-12 z-20">
              <div className="bg-orange-400 w-6 h-6 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-12 left-36 z-20">
              <div className="bg-orange-400 w-4 h-4 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-4 right-36 z-20">
              <div className="bg-purple-400 w-4 h-4 rounded-full"></div>
            </div>
            
            <div className="absolute top-36 right-4 z-20">
              <div className="bg-white p-2 rounded shadow-md">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"></path>
                </svg>
              </div>
            </div>
            

            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1.5 h-1.5 bg-gray-200 rounded-full z-0"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSection;