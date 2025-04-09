import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from './Header';

const Profiledetail = () => {
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    photoURL: '',
    createdAt: '',
    lastLoginAt: '',
    proficientDomain: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        if (currentUser) {
       
          const metadata = currentUser.metadata;
          
 
          let proficientDomain = 'Not specified';
          
          try {
        
          } catch (err) {
            console.error("Error fetching proficient domain:", err);
          }
          
          setUserData({
            displayName: currentUser.displayName || 'User',
            email: currentUser.email || 'No email provided',
            photoURL: currentUser.photoURL || null,
            createdAt: metadata?.creationTime ? new Date(metadata.creationTime).toLocaleString() : 'Unknown',
            lastLoginAt: metadata?.lastSignInTime ? new Date(metadata.lastSignInTime).toLocaleString() : 'Unknown',
            provider: currentUser.providerData[0]?.providerId || 'Unknown provider',
            proficientDomain: proficientDomain
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleAnalyzeStream = () => {

    navigate('/analyze-stream');
  };

  
  const getInitials = () => {
    return userData.displayName 
      ? userData.displayName.split(' ').map(n => n[0]).join('').toUpperCase()
      : userData.email.charAt(0).toUpperCase();
  };
x
  const isGoogleUser = userData.provider === 'google.com';

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      
            <div className="bg-gradient-to-r from-[#4CBFB8] to-teal-500 h-32 sm:h-48 relative">
            
              <Link to="/" className="absolute top-4 left-4 text-white hover:text-teal-100 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
              </Link>
              
       
              <h1 className="text-white text-center text-2xl font-bold pt-6 sm:pt-10">My Profile</h1>
              
           
              <div className="absolute -bottom-14 inset-x-0 flex justify-center">
                {userData.photoURL ? (
                  <img 
                    src={userData.photoURL} 
                    alt="Profile" 
                    className="w-28 h-28 rounded-full border-4 border-white object-cover"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-teal-600 text-white flex items-center justify-center text-3xl font-bold border-4 border-white">
                    {getInitials()}
                  </div>
                )}
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-16 px-6 pb-8">
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
                </div>
              ) : (
                <>
                  {/* User Name */}
                  <h2 className="text-2xl font-bold text-center text-gray-800">
                    {userData.displayName}
                  </h2>
                  
                  {/* Email */}
                  <p className="text-center text-gray-600 mb-8">{userData.email}</p>
                  
                  {/* Sign in method badge */}
                  <div className="flex justify-center mb-8">
                    <div className={`px-4 py-2 rounded-full flex items-center ${isGoogleUser ? 'bg-red-50 text-red-600' : 'bg-teal-50 text-teal-600'}`}>
                      {isGoogleUser ? (
                        <>
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                            <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
                            <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
                            <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                          </svg>
                          Signed in with Google
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6ZM10 15C10.8284 15 11.5 14.3284 11.5 13.5C11.5 12.6716 10.8284 12 10 12C9.17157 12 8.5 12.6716 8.5 13.5C8.5 14.3284 9.17157 15 10 15Z" clipRule="evenodd"/>
                          </svg>
                          Signed in with Email
                        </>
                      )}
                    </div>
                  </div>

                  {/* Account Information */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Account Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className="text-gray-600">Member since</span>
                        <span className="font-medium">{userData.createdAt}</span>
                      </div>
                      
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className="text-gray-600">Last login</span>
                        <span className="font-medium">{userData.lastLoginAt}</span>
                      </div>
                      
                      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className="text-gray-600">Authentication provider</span>
                        <span className="font-medium">{userData.provider}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Proficient Domain</span>
                        <span className="font-medium">{userData.proficientDomain}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Analyze Stream Button */}
                 
                  <Link to="/ResumeAnalysis">
                  <button
                  className="w-full bg-blue-500 text-white font-semibold py-3 rounded-full hover:bg-blue-600 transition mb-4"
                  >
                  ANALYZE MY STREAM USING RESUME
                  </button>
                 </Link>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Link 
                      to="/settings" 
                      className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-full text-center font-medium hover:bg-gray-50 transition"
                    >
                      Edit Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex-1 bg-[#4CBFB8] text-white py-3 rounded-full text-center font-medium hover:bg-teal-600 transition"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiledetail;