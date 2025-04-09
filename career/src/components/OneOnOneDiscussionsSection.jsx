import React from 'react';
import Instructor from '../assets/per1.png';
import Student from '../assets/per2.png';

const OneOnOneDiscussionsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
        <div className="lg:w-1/2 relative">

          <div className="relative bg-gray-100 rounded-lg shadow-md p-2 max-w-lg mx-auto z-0">
       
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
         
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
          
       
          <div className="absolute top-20 -right-4 bg-white rounded-lg shadow-xl p-6 z-10 w-[90%] max-w-md">

            <div className="flex items-center mb-4 relative">
              <div className="absolute -left-10 -top-4 bg-white rounded-full p-2 shadow-md">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"></path>
                  <circle cx="6.5" cy="11.5" r="1.5"></circle>
                  <circle cx="17.5" cy="11.5" r="1.5"></circle>
                </svg>
              </div>
              
     
              <div className="flex items-center gap-1.5 ml-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>
            
 
            <div className="flex justify-between mb-6">
              {/* Instructor */}
              <div className="w-[48%] relative">
                <img 
                  src={Instructor} 
                  alt="Instructor" 
                  className="w-full h-auto rounded-md shadow object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/f0f0f0/666666?text=Instructor";
                  }}
                />
              </div>
              
              {/* Student */}
              <div className="w-[48%] relative">
                <img 
                  src={Student} 
                  alt="Patricia Mendoza" 
                  className="w-full h-auto rounded-md shadow object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/f0f0f0/666666?text=Student";
                  }}
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Patricia Mendoza
                </div>
              </div>
            </div>
            
            {/* Chat Info */}
            <div className="mb-4">
              <h3 className="text-gray-700 font-medium mb-1">Private Discussion</h3>
              <p className="text-gray-500 text-sm">Your video can't be seen by others</p>
            </div>
            
            {/* End Discussion Button */}
            <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-full transition-colors w-48 mx-auto block">
              End Discussion
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 right-12 w-16 h-16 border-8 border-cyan-400 rounded-full border-r-0 rotate-45"></div>
          <div className="absolute top-1/3 right-0 w-0 h-0 border-t-[15px] border-r-[30px] border-b-[15px] border-transparent border-r-amber-400"></div>
          <div className="absolute -bottom-4 left-12 w-20 h-16 bg-blue-400 rounded-tl-[50px] rounded-br-[50px]"></div>
        </div>
        
        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-indigo-800">One-on-One</span>
          </h2>
          <h2 className="text-4xl font-bold mb-6 text-cyan-500">
            Discussions
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Mentor and mentors assistants can talk with
            students privately without leaving the Zoom
            environment.
          </p>
        </div>
      </div>
      

      <div className="flex justify-center mt-16">
        <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 py-3 rounded-full transition-colors">
          See more features
        </button>
      </div>
    </div>
  );
};

export default OneOnOneDiscussionsSection;