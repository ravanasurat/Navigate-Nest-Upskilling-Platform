import React from 'react';
import Header from '../components/Header';
import Calculate from '../career/Calculate';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const Calculator = () => {
  return (
    <div className="">
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%] z-0"></div>
      <div className="container mx-auto relative z-10">
        <Header />
        <Calculate/>
        <Footer/>
        <ChatbotWidget/>
      </div>
    </div>
  );
};

export default Calculator;
