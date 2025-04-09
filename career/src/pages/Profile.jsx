import React from 'react';
import Profiledetail from '../components/Profiledetail';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const Profile = () => {
  return (
    <div className="">
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%] z-0"></div>
      <div className="container mx-auto relative z-10">
         <Profiledetail/>
        <Footer/>
        <ChatbotWidget/>
      </div>
    </div>
  );
};

export default Profile;
