import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-indigo-800">All-In-One</span>
          <span className="text-teal-500"> Software.</span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Navigate Nest is one powerful online software suite that combines all the tools 
          needed to run a successful Career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-lg shadow-sm p-8 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-indigo-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center text-indigo-800 mt-6 mb-4">
            AI-Powered Career Insights
            </h3>
            
            <p className="text-gray-600 text-center">
            Utilize artificial intelligence to analyze students' skills, interests, and strengths. Get personalized career recommendations based on real-time industry trends.
            </p>
          </div>
          
    
          <div className="bg-white rounded-lg shadow-sm p-8 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-teal-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center text-indigo-800 mt-6 mb-4">
            Smart Scheduling & Career Planning
            </h3>
            
            <p className="text-gray-600 text-center">
            Plan and organize career counseling sessions, webinars, and workshops effortlessly. Keep track of student progress and career aspirations with detailed analytics.
            </p>
          </div>
          
    
          <div className="bg-white rounded-lg shadow-sm p-8 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-sky-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center text-indigo-800 mt-6 mb-4">
            Personalized Career Tracking
            </h3>
            
            <p className="text-gray-600 text-center">
            Monitor students' career journeys with AI-driven tracking. Automate guidance and follow-ups, ensuring continuous support in their professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;