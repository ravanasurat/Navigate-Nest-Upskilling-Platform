import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/results', { state: response.data });
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while uploading the file.');
    }
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-4/5 lg:w-3/4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h1 className="text-xl font-semibold">Resume Analyzer & Job Match</h1>
            </div>
            <div className="p-6">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              <p className="text-lg mb-6">Upload your resume to get detailed analysis and job matching insights:</p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <h2 className="text-lg font-semibold mb-3">What You'll Get:</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Extracted skills, experience, education, and certifications</li>
                  <li>Identified professional domain</li>
                  <li>Standard job description for your domain</li>
                  <li>Resume match score (out of 100)</li>
                  <li>Suggestions for improvement</li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="resume" className="block text-gray-700 mb-2">
                    Select your resume (PDF only)
                  </label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Analyze Resume
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;