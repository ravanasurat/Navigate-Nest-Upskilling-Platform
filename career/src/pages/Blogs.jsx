import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%] z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <Header />
        <VideosYT />
        <Footer />
        <ChatbotWidget />
      </div>
    </div>
  );
};

export default Blogs;