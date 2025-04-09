import React from 'react';
import { Phone } from 'lucide-react';
import Img1 from "../assets/per1.png";
import Img2 from "../assets/per2.png";
import Img3 from "../assets/per3.png";
import Img4 from "../assets/per4.png";
import Img5 from "../assets/per5.png";

const FeaturesPage = () => {
  return (
    <div className="bg-white container mx-auto px-4 py-16 max-w-7xl">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-blue-800">Our </span>
          <span className="text-cyan-400">Features</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          This very extraordinary feature, can make Guidance activities more efficient
        </p>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-12">
       
        <div className="lg:w-1/2 relative">
          
          <div className="absolute -top-16 -left-10 w-44 h-44 rounded-tl-full bg-green-400 z-0"></div>
          <div className="absolute top-0 right-28 w-8 h-8 rounded-full bg-cyan-400 z-0"></div>
          <div className="absolute bottom-28 left-32 w-10 h-10 rounded-full bg-red-400 z-0"></div>
          <div className="absolute -bottom-16 right-24 w-36 h-36 rounded-full bg-indigo-500 z-0"></div>

          
          <div className="relative z-10 bg-gray-100 rounded-lg shadow-lg p-2 mx-auto max-w-lg">
            
            <div className="flex items-center gap-1.5 mb-2 pl-1">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            
            <div className="relative pb-16">
             
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-2 relative">
                <img 
                  src={Img1} 
                  alt="Emma Roberts" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">Moderator</span>
                  <span className="text-white text-xs">Emma Roberts</span>
                </div>
              </div>

             
              <div className="relative">
                
                <div className="bg-white rounded-lg overflow-hidden shadow-md w-36 absolute left-0 top-2">
                  <img 
                    src={Img2}  
                    alt="Taylor Curtis" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-white text-xs">Taylor Curtis</span>
                  </div>
                </div>

                
                <div className="bg-white rounded-lg overflow-hidden shadow-md w-36 absolute right-0 top-2">
                  <img 
                    src={Img3}  
                    alt="Adam Levin" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-white text-xs">Adam Levin</span>
                  </div>
                </div>

                
                <div className="bg-white rounded-lg overflow-hidden shadow-md w-36 absolute left-12 top-24">
                  <img 
                    src={Img4}  
                    alt="Richard Holland" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-white text-xs">Richard Holland</span>
                  </div>
                </div>

                
                <div className="bg-white rounded-lg overflow-hidden shadow-md w-36 absolute right-2 top-36">
                  <img 
                    src={Img5} 
                    alt="Patricia Mendoza" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center">
                    <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-white text-xs">Patricia Mendoza</span>
                  </div>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 flex justify-start gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors flex items-center justify-center shadow-md">
                  Present
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors flex items-center justify-center shadow-md">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="lg:w-1/2 space-y-10 pl-12 mt-16 lg:mt-0">
          <div>
            <h3 className="text-3xl font-bold mb-10">
              A <span className="text-cyan-400">user interface</span> designed
              <br />for the classroom
            </h3>
          </div>

        
          <div className="space-y-12">
         
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded">
                <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="white" />
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="white" />
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="white" />
                    <rect x="14" y="14" width="7" height="7" rx="1" fill="white" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-700 font-medium">
                  Mentors don't get lost in the grid view 
                  <br />and have a dedicated Podium space.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14h4v7a1 1 0 001 1h6a1 1 0 001-1v-7h4a1 1 0 00.707-1.707l-8-8a1 1 0 00-1.414 0l-8 8A1 1 0 004 14z" fill="white" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-700 font-medium">
                  TA's and presenters can be moved to 
                  <br />the front of the class.
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded">
                <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z" fill="white" />
                    <path d="M20 17.5c0-2.583-3.578-4.5-8-4.5s-8 1.917-8 4.5V20h16v-2.5z" fill="white" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-700 font-medium">
                  Mentors can easily see all students 
                  <br />and session data at one time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;