import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            About Navigator Nest
          </h2>
          <div className="italic text-xl text-gray-700 text-center">
            <p>
              Empowering students with AI-driven career guidance
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg text-justify">
                  Welcome to <span className="font-semibold text-blue-600">Navigator Nest</span>, the future of career guidance powered by AI technology. We believe every student deserves a clear path toward their dream career.
                </p>
                <p className="text-lg text-justify">
                  Our College Stream Predictor uses advanced algorithms to analyze your performance, interests, and aspirations. We provide personalized recommendations to help students unlock their potential and find ideal educational pathways.
                </p>
                <p className="text-lg text-justify">
                  At Navigator Nest, we're not just guiding careers - we're shaping futures. Join us on this journey and discover a world of possibilities.
                </p>
              </div>
            </div>
          </div>
          
          
          <div className="col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Impact</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-blue-600">10K+</p>
                  <p className="text-base text-gray-600">Students</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-purple-600">95%</p>
                  <p className="text-base text-gray-600">Satisfaction</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-orange-600">100+</p>
                  <p className="text-base text-gray-600">Careers</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <p className="text-4xl font-bold text-red-600">50+</p>
                  <p className="text-base text-gray-600">Mentors</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Innovation through AI</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Personalized Guidance</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Continuous Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-blue-500 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Our Technology</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
              <div className="bg-orange-50 p-4 rounded-full inline-block mb-4 self-start">
                <span className="text-orange-500 text-lg font-medium">AI</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Smart Prediction</h4>
              <p className="text-lg text-gray-700 mb-6 text-justify">Our AI algorithms analyze data points to provide personalized career recommendations based on your unique profile.</p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">92% prediction accuracy</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
              <div className="bg-red-50 p-4 rounded-full inline-block mb-4 self-start">
                <span className="text-red-500 text-lg font-medium">ML</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Adaptive Learning</h4>
              <p className="text-lg text-gray-700 mb-6 text-justify">Our platform continuously learns from user interactions, ensuring recommendations stay relevant with changing markets.</p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">85% adaptation rate</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
              <div className="bg-purple-50 p-4 rounded-full inline-block mb-4 self-start">
                <span className="text-purple-500 text-lg font-medium">DATA</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Trend Analysis</h4>
              <p className="text-lg text-gray-700 mb-6 text-justify">We analyze industry trends to help you make future-proof career decisions with confidence.</p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '97%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">97% market coverage</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-[#EEF2FF] p-8 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Find Your Ideal Career?</h3>
          <p className="text-xl text-gray-700 mb-8 text-center">Let our AI-powered platform guide you toward a future aligned with your abilities.</p>
          <button className="bg-blue-600 text-white text-lg py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;