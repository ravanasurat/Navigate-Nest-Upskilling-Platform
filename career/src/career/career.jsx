// Career.jsx
import { useState } from 'react';
import TabButton from './TabButton';
import SubmitForm from './SubmitForm';
import Twelve from './Twelve';
import UpdateForm from './UpdateForm';
import AdvertiseForm from './AdvertiseForm';

function Career() {
  const [activeTab, setActiveTab] = useState('submit');

  const renderContent = () => {
    switch (activeTab) {
      case 'submit':
        return <SubmitForm />;
      case 'twelve':
        return <Twelve />;
      case 'advertise':
        return <AdvertiseForm />;
      case 'update':
        return <UpdateForm />;
      default:
        return <SubmitForm />;
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div 
          className={`bg-[#d7e1dc] text-gray-800 p-6 rounded-lg shadow-md cursor-pointer ${activeTab === 'submit' ? 'ring-4 ring-orange-400' : ''}`}
          onClick={() => setActiveTab('submit')}
        >
          <div className="p-3 bg-orange-200 rounded-lg inline-block mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ring-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">For 9th & 10th Students</h3>
          <p className="mb-4 text-gray-600">Can know the which stream need to choose.</p>
          <div className="flex items-center text-[#4CD5B6] mt-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div 
          className={`bg-[#d7e1dc] text-gray-800 p-6 rounded-lg shadow-md cursor-pointer ${activeTab === 'twelve' ? 'ring-4 ring-blue-200' : ''}`}
          onClick={() => setActiveTab('twelve')}
        >
          <div className="p-3 bg-blue-200 rounded-lg inline-block mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">For 12th Students</h3>
          <p className="mb-4 text-gray-600">Career pathway , decision to life profile.</p>
          <div className="flex items-center text-[#4CD5B6] mt-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div 
          className={`bg-[#d7e1dc] text-gray-800 p-6 rounded-lg shadow-md cursor-pointer ${activeTab === 'update' ? 'ring-4 ring-pink-200' : ''}`}
          onClick={() => setActiveTab('update')}
        >
          <div className="p-3 bg-pink-200 rounded-lg inline-block mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">For Graduate Students</h3>
          <p className="mb-4 text-gray-600">Trending jobs analysis and marketing size.</p>
          <div className="flex items-center text-[#4CD5B6] mt-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mb-8">
        <div className={`h-2 w-2 rounded-full ${activeTab === 'submit' ? 'bg-[#4CD5B6]' : 'bg-gray-300'}`}></div>
        <div className={`h-2 w-2 rounded-full ${activeTab === 'twelve' ? 'bg-[#4CD5B6]' : 'bg-gray-300'}`}></div>
        <div className={`h-2 w-2 rounded-full ${activeTab === 'update' ? 'bg-[#4CD5B6]' : 'bg-gray-300'}`}></div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {activeTab === 'submit' ? 'Stream Selection For 9th & 10th Students' : 
           activeTab === 'twelve' ? 'Stream Selection for 12th completed Students' : 
           activeTab === 'advertise' ? 'Career Guidance for Students' :
           'Guidance for Graduate Students'}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
}

export default Career;