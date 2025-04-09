import React, { useState } from 'react';

const CourseCard = ({ title, color, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define color classes based on the color prop
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      cardBg: 'bg-blue-50',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-600'
    },
    yellow: {
      bg: 'bg-yellow-500',
      cardBg: 'bg-yellow-50',
      text: 'text-yellow-600',
      hover: 'hover:bg-yellow-600'
    },
    purple: {
      bg: 'bg-purple-500',
      cardBg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-600'
    },
    red: {
      bg: 'bg-red-500',
      cardBg: 'bg-red-50',
      text: 'text-red-600',
      hover: 'hover:bg-red-600'
    }
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className={`${classes.cardBg} p-4`}>
        <h4 className={`font-semibold ${classes.text}`}>{title}</h4>
      </div>
      <div className="p-3 flex justify-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`${classes.text} font-medium text-sm flex items-center`}
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {/* Dropdown content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 border-t">
          <p className="text-sm font-medium text-gray-700">Career Opportunities:</p>
          <p className="text-sm text-gray-600">{details.career}</p>
        </div>
        <div className="p-4 border-t">
          <p className="text-sm font-medium text-gray-700">Eligibility:</p>
          <p className="text-sm text-gray-600">{details.eligibility}</p>
        </div>
        <div className="p-4 border-t">
          <p className="text-sm font-medium text-gray-700">Top Institutions:</p>
          <p className="text-sm text-gray-600">{details.institutions}</p>
        </div>
      </div>
    </div>
  );
};

const CourseSection = ({ title, color, courses }) => {
  const iconComponents = {
    blue: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    yellow: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    purple: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    red: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };

  const colorBgClass = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500'
  };

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className={`p-2 ${colorBgClass[color]} rounded-full mr-2`}>
          {iconComponents[color]}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} color={color} details={course.details} />
        ))}
      </div>
    </div>
  );
};

const CourseCards = () => {
  // Data for the courses
  const scienceCourses = [
    {
      title: "B.Sc. Physics",
      details: {
        career: "Research, Data Science, Academic Positions",
        eligibility: "75-85% in PCM subjects",
        institutions: "St. Stephen's, IISER, DU Colleges"
      }
    },
    {
      title: "B.Sc. Chemistry",
      details: {
        career: "Pharmaceuticals, Food Industry, Research",
        eligibility: "70-80% in PCB subjects",
        institutions: "Christ University, Loyola College, DU"
      }
    },
    {
      title: "B.Sc. Mathematics",
      details: {
        career: "Analytics, Actuarial Science, Statistical Analysis",
        eligibility: "80-90% with strong math scores",
        institutions: "ISI Kolkata, CMI Chennai, BITS"
      }
    },
    {
      title: "B.Sc. Biotechnology",
      details: {
        career: "Biomedical Research, Genetic Engineering",
        eligibility: "75-85% in PCB subjects",
        institutions: "VIT, Amity University, Manipal University"
      }
    }
  ];

  const commerceCourses = [
    {
      title: "B.Com (Honors)",
      details: {
        career: "Accounting, Finance, Banking",
        eligibility: "85-95% in Commerce subjects",
        institutions: "SRCC, LSR, Hindu College (DU)"
      }
    },
    {
      title: "BBA (Business Administration)",
      details: {
        career: "Management, Entrepreneurship, Consulting",
        eligibility: "75-85% in any stream",
        institutions: "Christ University, Symbiosis, NMIMS"
      }
    },
    {
      title: "B.Com Banking & Insurance",
      details: {
        career: "Banks, Insurance Companies, Financial Institutions",
        eligibility: "70-80% with commerce background",
        institutions: "HR College, NM College, RA Podar College"
      }
    },
    {
      title: "B.A. Economics",
      details: {
        career: "Economic Analysis, Policy Making, Research",
        eligibility: "85-95% with strong math scores",
        institutions: "St. Stephen's, LSR, SRCC (DU)"
      }
    }
  ];

  const artsCourses = [
    {
      title: "B.A. Psychology",
      details: {
        career: "Counseling, Clinical Psychology, Organizational Psychology",
        eligibility: "80-90% in any stream",
        institutions: "LSR, Christ University, Fergusson College"
      }
    },
    {
      title: "B.A. English Literature",
      details: {
        career: "Publishing, Content Creation, Teaching",
        eligibility: "75-85% with strong English scores",
        institutions: "St. Stephen's, JMC, Miranda House (DU)"
      }
    },
    {
      title: "B.A. History",
      details: {
        career: "Archaeology, Museum Curation, Research",
        eligibility: "70-80% in arts subjects",
        institutions: "St. Stephen's, Hindu College, JNU"
      }
    },
    {
      title: "B.A. Mass Communication",
      details: {
        career: "Journalism, PR, Digital Media",
        eligibility: "75-85% in any stream",
        institutions: "LSR, IP University, Symbiosis"
      }
    }
  ];

  const vocationalCourses = [
    {
      title: "Hotel Management",
      details: {
        career: "Hospitality, Food & Beverage, Event Management",
        eligibility: "60-70% in any stream",
        institutions: "IHM Mumbai, IHM Bangalore, Welcome Group"
      }
    },
    {
      title: "Fashion Design",
      details: {
        career: "Fashion Styling, Textile Design, Retail",
        eligibility: "65-75% + Portfolio/Entrance",
        institutions: "NIFT, Pearl Academy, Symbiosis"
      }
    },
    {
      title: "Animation & VFX",
      details: {
        career: "3D Modeling, Game Design, Film VFX",
        eligibility: "60-70% + Creative Portfolio",
        institutions: "MAAC, Arena Animation, FX School"
      }
    },
    {
      title: "Culinary Arts",
      details: {
        career: "Chef, Food Stylist, Restaurant Management",
        eligibility: "60-70% in any stream",
        institutions: "IHM, Culinary Academy of India, IICA"
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🎯 Cutoff-Based Courses After 12th: Your Pathway to a Successful Career
          </h2>
          <div className="italic text-gray-700 text-justify mb-4">
            <p>
              Many prestigious courses and careers are accessible through cutoff-based admission processes. 
              Your 12th-grade percentage or board exam marks play a vital role in securing admission to top 
              universities and institutions.
            </p>
          </div>
        </div>

        {/* Course Sections */}
        <CourseSection 
          title="Science Stream Courses" 
          color="blue" 
          courses={scienceCourses} 
        />
        
        <CourseSection 
          title="Commerce Stream Courses" 
          color="yellow" 
          courses={commerceCourses} 
        />
        
        <CourseSection 
          title="Arts & Humanities Courses" 
          color="purple" 
          courses={artsCourses} 
        />
        
        <CourseSection 
          title="Vocational & Professional Courses" 
          color="red" 
          courses={vocationalCourses} 
        />

        {/* Call to action */}
        <div className="bg-[#EEF2FF] p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help Deciding the Right Course?</h3>
          <p className="text-gray-700 mb-6">Our expert counselors can help you find programs that match your percentage and career goals.</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Schedule a Free Counseling Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;