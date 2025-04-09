import React from 'react';

function AdvertiseForm() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Career Guidance Box */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🎯 Unlock Your Dream Career with Personalized Guidance!
          </h2>
          <div className="italic text-gray-700 text-justify">
            <p className="mb-4">
              Choosing the right path after 12th grade is a critical decision that shapes your future. 
              Whether you aim to pursue engineering, medicine, business, or creative arts, the right 
              guidance can make all the difference.
            </p>
            <p className="mb-4">
              At CareerQuest+, we provide a comprehensive career roadmap, helping students explore 
              diverse career options, gain in-demand skills, and make informed decisions based on 
              their strengths and academic performance.
            </p>
            <h3 className="text-xl font-semibold text-blue-600 my-4"> What We Offer:</h3>
            <p className="font-semibold mb-2">Explore Career Paths:</p>
            <p className="mb-4 pl-4">
              Discover various career options across Science, Commerce, Arts, and Vocational streams. 
              Learn about trending fields like Data Science, AI, Cybersecurity, and more.
            </p>
            <p className="font-semibold mb-2">AI-Based Stream Predictor:</p>
            <p className="mb-4 pl-4">
              Confused about which stream or course suits you best? Our AI-powered stream predictor 
              analyzes your academic performance scores and suggests the career streams which to choose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertiseForm;