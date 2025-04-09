// SubmitForm.jsx
import React from 'react';

function SubmitForm() {
  return (
    <div className="space-y-6 py-8 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Available Streams After 10th</h1>
      
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Left column - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mt-20">
            Who should choose? If interested in Engineering, Medicine, Research, or Science-related careers.
          </h2>
        </div>
        
        {/* Right column - Cards */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {/* PCM Card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <span className="text-blue-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">PCM (Physics, Chemistry, Math) →</h3>
                <p className="text-gray-600">Engineering, Architecture, Data Science.</p>
              </div>
            </div>
            
            {/* PCB Card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-yellow-50 p-3 rounded-full">
                <span className="text-yellow-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">PCB (Physics, Chemistry, Biology) →</h3>
                <p className="text-gray-600">Medicine, Pharmacy, Biotechnology.</p>
              </div>
            </div>
            
            {/* PCMB Card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-purple-50 p-3 rounded-full">
                <span className="text-purple-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">PCMB (Physics, Chemistry, Math, Biology) →</h3>
                <p className="text-gray-600">A mix of both Engineering & Medical fields.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second section with mirrored layout (as shown in image) */}
      <div className="flex flex-col lg:flex-row-reverse gap-12 max-w-6xl mx-auto mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
        {/* Right column - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mt-15">
          Who should choose? If interested in Finance, Business, Accounting, or Economics.
          </h2>
        </div>
        
        {/* Left column - Cards */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {/* PCM Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <span className="text-blue-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">Subjects: →</h3>
                <p className="text-gray-600">Accountancy, Business Studies, Economics, Mathematics (optional).</p>
              </div>
            </div>
            
            {/* PCB Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-yellow-50 p-3 rounded-full">
                <span className="text-yellow-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">Careers: →</h3>
                <p className="text-gray-600">CA, CS, Banking, Marketing, Entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Third Section*/}
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Left column - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mt-15">
          Who should choose? If interested in Creativity, Social Sciences, Literature, Psychology, or Journalism.
          </h2>
        </div>
        
        {/* Right column - Cards */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {/* PCM Card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <span className="text-blue-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">Subjects:→</h3>
                <p className="text-gray-600">History, Political Science, Sociology, Psychology, English.
                </p>
              </div>
            </div>
            
            {/* PCB Card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
              <div className="bg-yellow-50 p-3 rounded-full">
                <span className="text-yellow-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">Careers: →</h3>
                <p className="text-gray-600">Law, Civil Services (IAS, IPS), Journalism, Media, Teaching, Design.
                .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* fourth section with mirrored layout (as shown in image) */}
      <div className="flex flex-col lg:flex-row-reverse gap-12 max-w-6xl mx-auto mt-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
        {/* Right column - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mt-15">
          Who should choose? If interested in practical skills, IT, or direct job opportunities after 12th.

          </h2>
        </div>
        
        {/* Left column - Cards */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {/* PCM Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <span className="text-blue-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">Courses: →</h3>
                <p className="text-gray-600">ITI, Diploma in Engineering, Hotel Management, Fashion Design, Animation.
                </p>
              </div>
            </div>
            
            {/* PCB Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-yellow-50 p-3 rounded-full">
                <span className="text-yellow-500 font-medium">O</span>
              </div>
              <div>
                <h3 className="font-medium">Careers: →</h3>
                <p className="text-gray-600">Technician, IT Support, Graphic Designer, Chef, Fashion Designer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;