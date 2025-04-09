import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SuccessSection from '../components/SuccessSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import ClassSection from '../components/ClassSection';
import FeaturesPage from '../components/FeaturesPage';
import ToolsSection from '../components/ToolsSection';
import AssessmentSection from '../components/AssessmentSection';
import ClassManagementSection from '../components/ClassManagementSection';
import OneOnOneDiscussionsSection from '../components/OneOnOneDiscussionsSection';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const HomePage = () => {
  return (
    <div className="">
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%] z-0"></div>
      <div className="container mx-auto relative z-10">
        <Header />
        <Hero />
        <SuccessSection/>
        <FeaturesSection/>
        <AboutSection/>
        <ClassSection/>
        <FeaturesPage/>
        <ToolsSection/>
        <AssessmentSection/>
        <ClassManagementSection/>
        <OneOnOneDiscussionsSection/>
        <Testimonial/>
        <Footer/>
        <ChatbotWidget/>
      </div>
    </div>
  );
};

export default HomePage;
