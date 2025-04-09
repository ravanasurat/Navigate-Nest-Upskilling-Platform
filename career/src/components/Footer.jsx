import React from 'react';
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#27939b] text-white py-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center">
          <div className="mr-6">
            <div className="relative">
              <img src={Logo} alt="NavigateNest Logo" className="h-60 w-150" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl mb-6">Contact Us</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:contact@navigatenest.com" className="hover:text-teal-400 transition-colors">
                contact@navigatenest.com
              </a>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p>123 Education Lane, Learning City, LC 54321</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

     
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-gray-300">
          <a href="/careers" className="hover:text-teal-400 transition-colors">
            Careers
          </a>
          <span className="hidden sm:inline text-gray-600">|</span>
          <a href="/privacy" className="hover:text-teal-400 transition-colors">
            Privacy Policy
          </a>
          <span className="hidden sm:inline text-gray-600">|</span>
          <a href="/terms" className="hover:text-teal-400 transition-colors">
            Terms & Conditions
          </a>
        </div>

      
        <div className="text-white-400 text-sm">
          © 2025 NavigateNest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;