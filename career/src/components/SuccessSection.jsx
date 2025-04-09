import React from 'react';

const SuccessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Success</h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Our success in this project lies in empowering students with AI-driven career insights, bridging the gap between aspirations and opportunities
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-500 mb-2">15K+</span>
            <span className="text-gray-700">Students</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-500 mb-2">75%</span>
            <span className="text-gray-700">Total success</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-500 mb-2">35</span>
            <span className="text-gray-700">Main questions</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-500 mb-2">26</span>
            <span className="text-gray-700">Chief experts</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-500 mb-2">16</span>
            <span className="text-gray-700">Years of experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;