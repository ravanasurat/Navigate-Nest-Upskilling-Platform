import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CourseCard = ({ title, shortName, color, careers, institutions, examName, scope, careerOptions, preparationTips }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  // Dynamic style for 3D flip effect
  const cardStyle = {
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s ease'
  };
  
  // Style for back face (must be flipped)
  const backStyle = {
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };
  
  // Style for front face
  const frontStyle = {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <div className="relative w-full h-80 mb-6" style={{ perspective: '1000px' }}>
      <div className="w-full h-full relative" style={cardStyle}>
        {/* Front side */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between" style={frontStyle}>
          <div>
            <div className={`bg-${color}-50 p-3 rounded-full inline-block mb-2`}>
              <span className={`text-${color}-500 font-medium`}>{shortName}</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-500 mt-2">{institutions}</p>
          </div>
          <div className="mt-4">
            <button 
              onClick={handleFlip}
              className={`w-full py-2 px-4 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition duration-300 flex items-center justify-center`}
            >
              <span>View Career</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Back side with additional information */}
        <div className="bg-white rounded-xl shadow-md p-5 overflow-auto" style={backStyle}>
          <div className="h-full flex flex-col">
            <h4 className="text-lg font-bold text-gray-800 mb-2">{examName}</h4>
            
            {/* Scope Section */}
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700">Scope:</p>
              <p className="text-xs text-gray-600">{scope}</p>
            </div>
            
            {/* Career Options Section */}
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700">Career Options:</p>
              <ul className="text-xs text-gray-600 pl-4 list-disc">
                {careerOptions.map((option, index) => (
                  <li key={index} className="mb-1">{option}</li>
                ))}
              </ul>
            </div>
            
            {/* Institutions Section */}
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700">Top Institutions:</p>
              <p className="text-xs text-gray-600">{institutions}</p>
            </div>
            
            {/* Preparation Tips */}
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700">Preparation Tips:</p>
              <p className="text-xs text-gray-600">{preparationTips}</p>
            </div>
            
            <button 
              onClick={handleFlip}
              className={`mt-auto py-2 px-4 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition duration-300 text-xs flex items-center justify-center`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to course</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Competitive = () => {
  // Enhanced data with scope, career options, and preparation tips
  const engineeringCourses = [
    {
      title: "Joint Entrance Examination",
      shortName: "JEE",
      color: "orange",
      examName: "JEE (Joint Entrance Examination)",
      careers: "B.Tech, B.E., Data Science, AI, Cybersecurity",
      institutions: "IITs, NITs, IIITs",
      scope: "National level engineering entrance exam, opening doors to some of the most prestigious engineering institutions in India.",
      careerOptions: [
        "Software Development and AI Engineering",
        "Electronics and Communication Engineering",
        "Mechanical and Aerospace Engineering",
        "Civil and Architectural Engineering",
        "Chemical Engineering and Biotechnology"
      ],
      preparationTips: "Focus on NCERT, practice numerical problems daily, take mock tests regularly."
    },
    {
      title: "BITS Aptitude Test",
      shortName: "BIT",
      color: "orange",
      examName: "BITSAT (Birla Institute of Technology and Science Aptitude Test)",
      careers: "B.Tech, Electronics, Mechanical, IT",
      institutions: "BITS Pilani, Goa, Hyderabad",
      scope: "Entrance exam for admission to BITS campuses, known for an industry-oriented and research-driven curriculum.",
      careerOptions: [
        "Computer Science and Information Technology",
        "Electronics and Instrumentation",
        "Mechanical and Manufacturing Engineering",
        "Chemical Engineering",
        "Economics and Finance (dual degree options)"
      ],
      preparationTips: "Focus on speed and accuracy, practice online mock tests, cover all topics in Physics, Chemistry, and Math."
    },
    {
      title: "VIT Engineering Entrance",
      shortName: "VIT",
      color: "orange",
      examName: "VITEEE (VIT Engineering Entrance Exam)",
      careers: "Computer Science, Robotics, Civil Engineering",
      institutions: "VIT Vellore, Chennai",
      scope: "Provides entry to VIT campuses, known for strong industry connections and placement opportunities.",
      careerOptions: [
        "Computer Science and Software Development",
        "Robotics and Automation",
        "Biomedical Engineering",
        "Civil and Structural Engineering",
        "Information Technology and Cyber Security"
      ],
      preparationTips: "Understand the exam pattern, revise Class 11-12 concepts thoroughly, practice with previous year papers."
    }
  ];
  
  const medicalCourses = [
    {
      title: "National Eligibility Entrance Test",
      shortName: "NEET",
      color: "red",
      examName: "NEET (National Eligibility Entrance Test)",
      careers: "MBBS, BDS, BAMS, Veterinary Sciences",
      institutions: "AIIMS, JIPMER, State Medical Colleges",
      scope: "Unified national entrance exam for all medical and dental colleges in India with over 90,000 MBBS seats.",
      careerOptions: [
        "General Medicine and Surgery",
        "Specialized Medical Fields (Cardiology, Neurology, etc.)",
        "Dental Surgery and Specializations",
        "Ayurvedic Medicine",
        "Research and Development in Medical Sciences"
      ],
      preparationTips: "Master NCERT books first, build strong fundamentals in Biology, take regular mock tests."
    },
    {
      title: "AIIMS MBBS Entrance",
      shortName: "AIIMS",
      color: "red",
      examName: "AIIMS MBBS",
      careers: "Medicine, Surgery, Medical Research",
      institutions: "AIIMS (Delhi, Bhopal, Bhubaneswar)",
      scope: "Entrance to the premier medical institutions of India, known for advanced medical education and research.",
      careerOptions: [
        "Clinical Practice and Healthcare Management",
        "Surgical Specialties",
        "Medical Research and Academia",
        "Public Health and Policy Development",
        "Medical Administration and Hospital Management"
      ],
      preparationTips: "Focus on in-depth knowledge, practice with previous AIIMS papers, develop strong reasoning skills."
    }
  ];
  
  const commerceCourses = [
    {
      title: "Chartered Accountant",
      shortName: "CA",
      color: "blue",
      examName: "CA (Chartered Accountant)",
      careers: "Accounting, Auditing, Taxation",
      institutions: "ICAI",
      scope: "Highly respected professional qualification in accounting, finance, and business with global recognition.",
      careerOptions: [
        "Corporate Finance and Accounting",
        "Audit and Assurance Services",
        "Taxation and Tax Consulting",
        "Financial Planning and Analysis",
        "Investment Banking and Corporate Advisory"
      ],
      preparationTips: "Build solid conceptual understanding, practice numerical problems, stay updated with latest financial regulations."
    },
    {
      title: "Company Secretary",
      shortName: "CS",
      color: "blue",
      examName: "CS (Company Secretary)",
      careers: "Corporate Governance, Company Law",
      institutions: "ICSI",
      scope: "Specialization in corporate laws, governance, and compliance with growing demand in the corporate sector.",
      careerOptions: [
        "Corporate Compliance and Governance",
        "Legal Advisory Services",
        "Corporate Restructuring and M&A",
        "Secretarial Auditing",
        "Corporate Law Consultation"
      ],
      preparationTips: "Focus on understanding legal concepts, practice theoretical questions, stay updated with latest company laws."
    },
    {
      title: "Common Law Admission Test",
      shortName: "CLAT",
      color: "blue",
      examName: "CLAT (Common Law Admission Test)",
      careers: "Corporate Law, Legal Advisory",
      institutions: "NLU, Symbiosis Law School",
      scope: "Gateway to top law schools in India, preparing for diverse legal career options in corporate and litigation fields.",
      careerOptions: [
        "Corporate and Business Law",
        "Litigation and Judicial Services",
        "Intellectual Property Rights",
        "International Law and Diplomacy",
        "Legal Consultation and Advisory"
      ],
      preparationTips: "Improve reading comprehension, stay updated with current affairs, develop logical reasoning skills."
    },
    {
      title: "Integrated Program in Management",
      shortName: "IPMAT",
      color: "blue",
      examName: "IPMAT (Integrated Program in Management Aptitude Test)",
      careers: "Business Management, Finance, HR",
      institutions: "IIM Indore, IIM Rohtak",
      scope: "5-year integrated management program at prestigious IIMs, offering early entry into management education.",
      careerOptions: [
        "Marketing and Brand Management",
        "Finance and Investment Analysis",
        "Human Resource Management",
        "Operations and Supply Chain Management",
        "Entrepreneurship and Business Development"
      ],
      preparationTips: "Focus on quantitative aptitude, develop verbal skills, practice logical reasoning questions."
    }
  ];
  
  const artsCourses = [
    {
      title: "Common University Entrance Test",
      shortName: "CUET",
      color: "purple",
      examName: "CUET (Common University Entrance Test)",
      careers: "Psychology, Political Science, Literature",
      institutions: "DU, JNU, BHU",
      scope: "Unified entrance exam for central universities offering various undergraduate and postgraduate programs in humanities.",
      careerOptions: [
        "Research and Academia",
        "Clinical and Counseling Psychology",
        "Public Administration and Policy",
        "Content Creation and Publishing",
        "Social Work and NGO Management"
      ],
      preparationTips: "Develop strong reading habits, build writing skills, stay updated with current affairs and domain knowledge."
    },
    {
      title: "National Institute of Design",
      shortName: "NID",
      color: "purple",
      examName: "NID DAT (National Institute of Design)",
      careers: "Graphic Design, UI/UX, Animation",
      institutions: "NID Ahmedabad",
      scope: "Premier design education institute preparing students for creative careers in various design disciplines.",
      careerOptions: [
        "Graphic and Visual Communication Design",
        "UI/UX and Digital Product Design",
        "Animation and Motion Graphics",
        "Industrial and Product Design",
        "Exhibition and Space Design"
      ],
      preparationTips: "Build a strong portfolio, develop drawing skills, practice creative problem-solving, study design principles."
    },
    {
      title: "National Institute of Fashion Technology",
      shortName: "NIFT",
      color: "purple",
      examName: "NIFT (National Institute of Fashion Technology)",
      careers: "Fashion Design, Textile Design",
      institutions: "NIFT Delhi, Mumbai",
      scope: "Leading fashion education institute preparing students for creative careers in the fashion and textile industry.",
      careerOptions: [
        "Fashion Design and Styling",
        "Textile Design and Development",
        "Fashion Communication and Marketing",
        "Luxury Brand Management",
        "Apparel Production and Technology"
      ],
      preparationTips: "Develop sketching and illustration skills, stay updated with fashion trends, build a creative portfolio."
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🎯 Competitive Exams After 12th: Your Gateway to Top Careers
          </h2>
          <div className="italic text-gray-700 text-center mb-4">
            <p>
              Choosing the right competitive exam can open doors to prestigious colleges and high-paying careers. 
              Click on the "View Career" button to see detailed scope and career options.
            </p>
          </div>
        </div>

        {/* Engineering Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-orange-500 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">For Engineering Aspirants</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                shortName={course.shortName}
                color={course.color}
                examName={course.examName}
                careers={course.careers}
                institutions={course.institutions}
                scope={course.scope}
                careerOptions={course.careerOptions}
                preparationTips={course.preparationTips}
              />
            ))}
          </div>
        </div>

        {/* Medical Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-red-500 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">For Medical Aspirants</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {medicalCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                shortName={course.shortName}
                color={course.color}
                examName={course.examName}
                careers={course.careers}
                institutions={course.institutions}
                scope={course.scope}
                careerOptions={course.careerOptions}
                preparationTips={course.preparationTips}
              />
            ))}
          </div>
        </div>

        {/* Commerce Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-blue-500 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">For Commerce & Business Enthusiasts</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commerceCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                shortName={course.shortName}
                color={course.color}
                examName={course.examName}
                careers={course.careers}
                institutions={course.institutions}
                scope={course.scope}
                careerOptions={course.careerOptions}
                preparationTips={course.preparationTips}
              />
            ))}
          </div>
        </div>

        {/* Arts Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-purple-500 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">For Arts & Humanities Students</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {artsCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                shortName={course.shortName}
                color={course.color}
                examName={course.examName}
                careers={course.careers}
                institutions={course.institutions}
                scope={course.scope}
                careerOptions={course.careerOptions}
                preparationTips={course.preparationTips}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#EEF2FF] p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Start Your Preparation Journey?</h3>
          <p className="text-gray-700 mb-6">Our cutoff calculator help you to choose your skilled stream easily using your marks.</p>
          <Link to ="/Calculator" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Calculate Cut-off
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Competitive;