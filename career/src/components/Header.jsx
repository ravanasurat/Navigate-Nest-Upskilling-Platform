import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import Logo from "../assets/logo.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth(); 
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="bg-[#4CBFB8] flex justify-between items-center px-4 sm:px-8 py-4 relative">
      <div className="flex items-center">
        <div className="text-white font-bold text-2xl">
        <div className="relative w-40 h-15 flex items-center justify-center ">
      <img 
        src={Logo}
        alt="NavigateNest Logo" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-300 h-40"
      />
    </div>
        </div>
      </div>
      

      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      

      <nav className="hidden md:flex ml-130 space-x-8">
        <Link to="/HomePage" className="text-white hover:text-teal-200">Home</Link>
        <Link to="/Mentor" className="text-white hover:text-teal-200">Mentors</Link>
        <Link to="/Career" className="text-white hover:text-teal-200">Careers</Link>
        <Link to="/TrendAnalysis" className="text-white hover:text-teal-200">Labour & Job Market</Link>
        <Link to="/AboutUs" className="text-white hover:text-teal-200">About Us</Link>
      </nav>
      

      <div className="hidden md:flex items-center space-x-4">
        {currentUser ? (
          <div className="relative">
            <button 
              onClick={() => setProfileMenuOpen(!profileMenuOpen)} 
              className="flex items-center space-x-2 text-white focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#4CBFB8] flex items-center justify-center font-bold">
                {currentUser.email ? currentUser.email.charAt(0).toUpperCase() : 'U'}
              </div>
              <span>Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
          
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="bg-white text-[#4CBFB8] px-6 py-2 rounded-full hover:bg-gray-100 transition">Login</Link>
            <Link to="/signup" className="bg-teal-100 text-[#4CBFB8] px-6 py-2 rounded-full hover:bg-teal-200 transition">Sign up</Link>
          </>
        )}
      </div>
      
  
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#4CBFB8] shadow-lg rounded-b-lg z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <a href="#" className="text-white hover:text-teal-200 py-2">Home</a>
            <a href="#" className="text-white hover:text-teal-200 py-2">Courses</a>
            <Link to="/career" className="text-white hover:text-teal-200 py-2">Careers</Link>
            <a href="#" className="text-white hover:text-teal-200 py-2">Blog</a>
            <a href="#" className="text-white hover:text-teal-200 py-2">About Us</a>
            

            <div className="flex flex-col space-y-2 pt-2 border-t border-teal-500">
              {currentUser ? (
                <>
                  <Link to="/Profile" className="text-white hover:text-teal-200 py-2">
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-teal-200 py-2 text-left"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-white text-[#4CBFB8] px-6 py-2 rounded-full hover:bg-gray-100 transition text-center">Login</Link>
                  <Link to="/signup" className="bg-teal-100 text-[#4CBFB8] px-6 py-2 rounded-full hover:bg-teal-200 transition text-center">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;