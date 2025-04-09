import React from 'react';
import ItalyImage from '../assets/fort.png'; 

function AssessmentSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="md:w-1/2 relative">
          
          <div className="absolute -left-8 top-0 w-24 h-24 bg-blue-500 rounded-full z-0"></div>
          
          
          <div className="absolute top-0 left-16 w-4 h-4 bg-orange-400 rounded-full z-10"></div>
          
          
          <div className="absolute bottom-4 left-4 w-5 h-5 bg-green-400 rounded-full z-10"></div>
          
          
          <div className="absolute right-12 top-1/2 w-4 h-4 bg-pink-400 rounded-full z-10"></div>
          
          
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
            
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Question 1
            </div>
            
            
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              True or false? This play takes place in Italy
            </h3>
            
            
            <div className="relative mb-4">
              <img 
                src={ItalyImage} 
                alt="Venice, Italy" 
                className="w-full h-auto rounded-lg"
              />
              
              
              <div className="absolute -bottom-12 right-0 bg-white rounded-lg shadow-md p-3 flex items-center">
                <div className="bg-green-400 rounded-full p-1 mr-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-green-500 text-sm font-medium">Your answer was</p>
                  <p className="text-green-500 text-sm font-medium">sent successfully</p>
                </div>
              </div>
            </div>
            
            
            <div className="absolute -right-5 top-20 flex flex-col gap-2">
              <div className="bg-white rounded-full shadow-md p-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </div>
              <div className="bg-white rounded-full shadow-md p-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-indigo-800">Assessments,</span>
            <br />
            <span className="text-cyan-400">Quizzes,</span> <span className="text-indigo-800">Tests</span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed mt-6 text-lg">
            Easily launch live assignments, quizzes, and
            tests. Student results are automatically entered in
            the online gradebook, to make the career path easy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AssessmentSection;