import React from 'react';

import InstructorImg from "../assets/instructor.png";
import StudentImg from "../assets/student.png";

const AboutSection = () => {
  
  const instructorPublicPath = "/instructor.png";
  const studentPublicPath = "/student.png";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-indigo-800">What is </span>
          <span className="text-teal-500">Navigate Nest?</span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16">
        Navigate Nest is an AI-driven career guidance platform that helps 10th and 12th-grade and Graduate students make informed career choices. It provides personalized recommendations, skill assessments, and real-time industry insights to shape their future.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="rounded-lg overflow-hidden shadow-md relative">
            
            <img 
              src={InstructorImg} 
              alt="Instructor teaching"
              className="w-full h-80 object-cover"
              onError={(e) => {
                console.log("Error loading instructor image, trying public path");
                
                e.target.src = instructorPublicPath;
                e.target.onerror = (e2) => {
                  console.log("Public path also failed, using placeholder");
                  e2.target.src = "https://placehold.co/600x400/e0e0e0/787878?text=Instructor+Image";
                };
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-white">
              <h3 className="text-2xl font-bold mb-6">FOR INSTRUCTORS</h3>
              <button className="border-2 border-white hover:bg-white hover:bg-opacity-20 transition-colors duration-300 rounded-full px-8 py-3">
                Start a class today
              </button>
            </div>
          </div>
          
          
          <div className="rounded-lg overflow-hidden shadow-md relative">
            
            <img 
              src={StudentImg}
              alt="Students studying together"
              className="w-full h-80 object-cover"
              onError={(e) => {
                console.log("Error loading student image, trying public path");
                
                e.target.src = studentPublicPath;
                e.target.onerror = (e2) => {
                  console.log("Public path also failed, using placeholder");
                  e2.target.src = "https://placehold.co/600x400/e0e0e0/787878?text=Students+Image";
                };
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-white">
              <h3 className="text-2xl font-bold mb-6">FOR STUDENTS</h3>
              <button className="bg-teal-500 hover:bg-teal-600 transition-colors duration-300 rounded-full px-8 py-3">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;