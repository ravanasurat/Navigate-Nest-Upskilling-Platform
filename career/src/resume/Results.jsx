import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ResumeAnalysis from './ResumeAnalysis';
import JobDescription from './JobDescription';
import Recommendations from './Recommendations';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resume_data, evaluation_data } = location.state || {};
  const [activeTab, setActiveTab] = useState('resume');

  if (!resume_data || !evaluation_data) {
    return (
      <div className="max-w-6xl mx-auto py-4 px-4">
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-4">
          No analysis data available. Please upload a resume.
        </div>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          onClick={() => navigate('/')}
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-4 px-4">
      <div className="flex justify-center">
        <div className="w-full lg:w-5/6">
          <div className="rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold mb-0">Resume Analysis Results</h1>
              <button 
                className="bg-white text-blue-600 px-3 py-1 text-sm rounded-md hover:bg-gray-100"
                onClick={() => navigate('/')}
              >
                Analyze Another Resume
              </button>
            </div>
            <div className="p-6 bg-white">
              <div className="mb-6">
                <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-md p-4 mb-4">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-shrink-0 text-center md:text-left mb-4 md:mb-0">
                      <h2 className="text-4xl font-bold mb-0">{evaluation_data.match_score || 'N/A'}</h2>
                      <p className="text-center"><span className="text-sm">Match Score</span></p>
                    </div>
                    <div className="flex-grow md:ml-4">
                      <h4 className="font-medium">Detected Domain: {resume_data.domain || 'Unknown'}</h4>
                      <p className="mb-0">This analysis compares your resume against standard requirements for this role.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tab Navigation */}
              <div className="border-b mb-4">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <button
                      className={`inline-block py-2 px-4 font-medium text-center border-b-2 ${
                        activeTab === 'resume'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('resume')}
                    >
                      Resume Analysis
                    </button>
                  </li>
                  <li className="mr-2">
                    <button
                      className={`inline-block py-2 px-4 font-medium text-center border-b-2 ${
                        activeTab === 'job'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('job')}
                    >
                      Job Description
                    </button>
                  </li>
                  <li className="mr-2">
                    <button
                      className={`inline-block py-2 px-4 font-medium text-center border-b-2 ${
                        activeTab === 'recommendations'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('recommendations')}
                    >
                      Recommendations
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Tab Content */}
              <div className="mb-4">
                {activeTab === 'resume' && (
                  <ResumeAnalysis resumeData={resume_data} />
                )}
                {activeTab === 'job' && (
                  <JobDescription jobDescription={evaluation_data.job_description} domain={resume_data.domain} />
                )}
                {activeTab === 'recommendations' && (
                  <Recommendations
                    missingSkills={evaluation_data.missing_skills}
                    improvementSuggestions={evaluation_data.improvement_suggestions}
                  />
                )}
              </div>
            </div>
            <div className="bg-gray-50 p-4 border-t">
              <div className="flex flex-col sm:flex-row justify-between">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-2 sm:mb-0"
                  onClick={() => navigate('/')}
                >
                  Analyze Another Resume
                </button>
                <button 
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => navigate('/')}
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;