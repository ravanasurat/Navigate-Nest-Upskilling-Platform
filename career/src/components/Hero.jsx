import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../assets/Hero.png";

const Hero = () => {
  return (
    <div className="relative">

      <div className="bg-[#4ECDC4] pb-32">
        <div className="flex flex-col md:flex-row px-4 md:px-8 pt-8 pb-16 items-center max-w-7xl mx-auto">
 
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Upskilling through</span> Online is now<br />
              much easier
            </h1>
            <p className="text-white text-lg mb-8 max-w-md">
              Navigate Nest is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to = "/ContactUs" className="bg-teal-100 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-200 transition font-medium text-lg">Contact Us</Link>
              <button className="flex items-center gap-3 bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg">
                <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                Watch how it works
              </button>
            </div>
          </div>


          <div className="md:w-1/2 relative mt-16 md:mt-0">

            <div className="relative z-10">
              <img 
                src={Image}
                alt="Student thinking" 
                className="max-w-sm md:max-w-lg mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/500x600/4ECDC4/fff?text=Student+Image";
                }}
              />
            </div>


            <div className="absolute top-20 right-16 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-20">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg">250k</div>
                <div className="text-sm text-gray-600">Assisted Student</div>
              </div>
            </div>



            <div className="absolute right-12 top-1/2 bg-white p-4 rounded-lg shadow-lg z-20 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-base">Congratulations</div>
                  <div className="text-sm text-gray-600">Your career path is best</div>
                </div>
              </div>
            </div>


            <div className="absolute bottom-28 left-16 bg-gray-100 p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <img 
                    src="/avatar.png" 
                    alt="Instructor" 
                    className="w-10 h-10 rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/40/66c5c2/fff?text=U";
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-semibold">User Mentoring</div>
                  <div className="text-xs text-gray-600">12/7 at 12.00 PM</div>
                </div>
              </div>
              <button className="bg-rose-500 text-white w-full py-2 rounded-lg hover:bg-rose-600 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
  
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-[50%] -mb-1"></div>
    </div>
  );
};

export default Hero;