import React from 'react';

import Student1 from '../assets/per1.png';
import Student2 from '../assets/per2.png';
import Student3 from '../assets/per3.png';

const ClassManagementSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-cyan-500 mb-2">
            Class Management
          </h2>
          <h3 className="text-3xl font-bold text-indigo-800 mb-6">
            Tools for Educators
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
          Efficiently manage classes with powerful tools for educators. Track attendance, organize rosters, and grade assignments seamlessly in real-time.
          </p>
        </div>
        
        
        <div className="lg:w-1/2 relative">
          
          <div className="absolute top-0 right-0 w-6 h-6 bg-blue-200 rounded-full z-0"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-blue-200 rounded-full z-0"></div>
          
          
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 max-w-xl mx-auto">
            
            <div className="flex items-center mb-8">
              <div className="absolute -top-6 -left-6 bg-white rounded-full shadow-md p-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              
              <div className="w-full h-12 bg-blue-400 rounded-lg ml-6 flex items-center pl-10">
                <span className="text-white font-semibold text-xl">GradeBook</span>
              </div>
              
              
              <div className="absolute top-4 right-4 transform rotate-12">
                <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path>
                </svg>
              </div>
            </div>
            
            
            <div className="space-y-6">
              
              <div className="flex items-center">
                <div className="relative">
                  <img src={Student1} alt="Student" className="w-12 h-12 rounded-full object-cover" onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100/555/fff?text=S1";
                  }} />
                  <div className="absolute -right-1 -bottom-1 bg-yellow-400 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full h-4 bg-blue-400 rounded-full ml-4 flex-1"></div>
                <div className="bg-blue-100 rounded-full px-4 py-1 ml-4">
                  <span className="text-blue-800 font-medium">100</span>
                </div>
              </div>
              
             
              <div className="flex items-center">
                <img src={Student2} alt="Student" className="w-12 h-12 rounded-full object-cover" onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100/555/fff?text=S2";
                }} />
                <div className="flex flex-col ml-4 flex-1">
                  <div className="w-full h-4 bg-blue-400 rounded-t-full"></div>
                  <div className="flex justify-end">
                    <div className="bg-blue-100 rounded-full px-3 py-1 ml-4 -mt-1">
                      <span className="text-blue-800 font-medium">9</span>
                    </div>
                    <div className="bg-blue-100 rounded-full px-3 py-1 ml-1 -mt-1">
                      <span className="text-blue-800 font-medium">8</span>
                    </div>
                  </div>
                </div>
              </div>
              
             
              <div className="flex items-center">
                <img src={Student3} alt="Student" className="w-12 h-12 rounded-full object-cover" onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100/555/fff?text=S3";
                }} />
                <div className="w-3/4 h-4 bg-green-400 rounded-full ml-4 flex-1"></div>
                <div className="bg-green-100 rounded-full px-4 py-1 ml-4">
                  <span className="text-green-800 font-medium">85</span>
                </div>
              </div>
              
             
              <div className="flex items-center">
                <img src="/student4.png" alt="Student" className="w-12 h-12 rounded-full object-cover" onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100/555/fff?text=S4";
                }} />
                <div className="w-1/2 h-4 bg-red-400 rounded-full ml-4 flex-1"></div>
                <div className="bg-red-100 rounded-full px-4 py-1 ml-4">
                  <span className="text-red-800 font-medium">75</span>
                </div>
              </div>
            </div>
            
            
            <div className="flex justify-center mt-8">
              <button className="bg-indigo-600 text-white px-8 py-2 rounded-full font-medium shadow-lg hover:bg-indigo-700 transition">
                Export
              </button>
            </div>
            
            
            <div className="absolute -bottom-4 -left-4">
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 30C10 25 20 15 30 20C40 25 50 35 60 30C70 25 80 15 90 20C100 25 110 35 120 30" stroke="#E0EDFF" strokeWidth="4" />
                <path d="M0 20C10 15 20 5 30 10C40 15 50 25 60 20C70 15 80 5 90 10C100 15 110 25 120 20" stroke="#E0EDFF" strokeWidth="4" />
                <path d="M0 10C10 5 20 -5 30 5C40 15 50 20 60 15C70 10 80 0 90 5C100 10 110 15 120 10" stroke="#E0EDFF" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassManagementSection;