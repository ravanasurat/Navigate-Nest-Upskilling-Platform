import React, { useState } from 'react';

const FieldCard = ({ icon, title, color, fields, careers, resources }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 transition-all duration-300 hover:shadow-lg">
      {/* Card Header */}
      <div className={`bg-${color}-50 p-4 cursor-pointer`} onClick={toggleExpand}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`p-2 bg-${color}-500 rounded-full mr-3 text-white`}>
              {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          </div>
          <div className="transform transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Expandable Content */}
      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-4 border-t border-gray-100">
          {/* Fields Section */}
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Fields:</h4>
            <div className="flex flex-wrap gap-2">
              {fields.map((field, index) => (
                <span key={index} className={`text-xs bg-${color}-100 text-${color}-700 px-2 py-1 rounded-full`}>
                  {field}
                </span>
              ))}
            </div>
          </div>
          
          {/* Career Options Section */}
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Career Options:</h4>
            <ul className="text-sm text-gray-600 pl-5 list-disc">
              {careers.map((career, index) => (
                <li key={index} className="mb-1">{career}</li>
              ))}
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Resources:</h4>
            <p className="text-sm text-gray-600">{resources}</p>
          </div>
          
          {/* Action Button */}
          <button className={`mt-2 w-full py-2 px-4 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition duration-300 flex items-center justify-center`}>
            <span>Explore Opportunities</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const InterestQuiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState('');
  
  const handleAnswer = (question, answer) => {
    const newAnswers = {...answers, [question]: answer};
    setAnswers(newAnswers);
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simple algorithm to determine a field match
      const scores = {
        "Engineering & Technology": 0,
        "Business & Management": 0,
        "Creative Arts & Design": 0,
        "Science & Research": 0
      };
      
      if (newAnswers.q1 === 'a') scores["Engineering & Technology"] += 2;
      if (newAnswers.q1 === 'b') scores["Business & Management"] += 2;
      if (newAnswers.q1 === 'c') scores["Creative Arts & Design"] += 2;
      if (newAnswers.q1 === 'd') scores["Science & Research"] += 2;
      
      if (newAnswers.q2 === 'a') scores["Engineering & Technology"] += 1;
      if (newAnswers.q2 === 'b') scores["Business & Management"] += 1;
      if (newAnswers.q2 === 'c') scores["Creative Arts & Design"] += 1;
      if (newAnswers.q2 === 'd') scores["Science & Research"] += 1;
      
      if (newAnswers.q3 === 'a') scores["Engineering & Technology"] += 1;
      if (newAnswers.q3 === 'b') scores["Business & Management"] += 1;
      if (newAnswers.q3 === 'c') scores["Creative Arts & Design"] += 1;
      if (newAnswers.q3 === 'd') scores["Science & Research"] += 1;
      
      // Find highest score
      const maxField = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
      setResult(maxField);
    }
  };
  
  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
    setResult('');
  };

  const questions = [
    {
      id: 'q1',
      text: "What type of activities do you enjoy most?",
      options: [
        { id: 'a', text: "Solving technical problems or building things" },
        { id: 'b', text: "Leading teams and analyzing market trends" },
        { id: 'c', text: "Creating art, designs, or expressive content" },
        { id: 'd', text: "Investigating how things work or conducting experiments" }
      ]
    },
    {
      id: 'q2',
      text: "How do you prefer to work?",
      options: [
        { id: 'a', text: "With computers, tools, or technology" },
        { id: 'b', text: "In teams, directing projects, or with clients" },
        { id: 'c', text: "Independently, expressing ideas visually" },
        { id: 'd', text: "In a laboratory or research setting" }
      ]
    },
    {
      id: 'q3',
      text: "What subjects did you enjoy most in school?",
      options: [
        { id: 'a', text: "Computer Science, Mathematics, or Engineering" },
        { id: 'b', text: "Economics, Business Studies, or Marketing" },
        { id: 'c', text: "Art, Design, Literature, or Music" },
        { id: 'd', text: "Biology, Chemistry, Physics, or Environmental Science" }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Discover Your Career Path</h3>
      
      {!result ? (
        <>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Question {step} of 3</span>
              <span className="text-sm text-gray-600">{Math.round((step/3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(step/3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-800 mb-3">{questions[step-1].text}</h4>
            <div className="space-y-3">
              {questions[step-1].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(questions[step-1].id, option.id)}
                  className={`w-full text-left p-3 rounded-lg border ${
                    answers[questions[step-1].id] === option.id
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  } transition duration-150`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-4">
          <div className="mb-4">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Your Result: {result}</h4>
            <p className="text-gray-600 mb-6">Based on your responses, you might be interested in careers in the {result} field. Explore the relevant section above for more details!</p>
            <button
              onClick={resetQuiz}
              className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const UpdateForm = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const careerFields = [
    {
      id: "engineering",
      title: "Engineering & Technology",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>,
      color: "blue",
      fields: ["Computer Science", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Aerospace Engineering"],
      careers: ["Software Developer", "AI Engineer", "Data Scientist", "Robotics Engineer", "Product Designer"],
      resources: "Coding boot camps, internships, project-based learning, and industry certifications."
    },
    {
      id: "business",
      title: "Business & Management",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>,
      color: "green",
      fields: ["Finance", "Marketing", "Human Resources", "Business Analytics", "Supply Chain Management"],
      careers: ["Financial Analyst", "Digital Marketer", "Business Consultant", "Entrepreneur"],
      resources: "Business strategy workshops, leadership programs, and networking with industry leaders."
    },
    {
      id: "science",
      title: "Science & Research",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>,
      color: "purple",
      fields: ["Biotechnology", "Environmental Science", "Physics", "Chemistry", "Life Sciences"],
      careers: ["Research Scientist", "Lab Technician", "Environmental Analyst", "Genetic Engineer"],
      resources: "Research labs, innovation hubs, and collaboration with top universities."
    },
    {
      id: "creative",
      title: "Creative Arts & Design",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>,
      color: "pink",
      fields: ["Graphic Design", "Animation", "Fine Arts", "Film Making", "Fashion Design"],
      careers: ["UX/UI Designer", "Illustrator", "Content Creator", "Art Director"],
      resources: "Portfolio building, freelancing opportunities, and access to creative communities."
    },
    {
      id: "social",
      title: "Social Sciences & Humanities",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>,
      color: "yellow",
      fields: ["Sociology", "Political Science", "Psychology", "History", "Philosophy"],
      careers: ["Social Worker", "Policy Analyst", "Psychologist", "Journalist"],
      resources: "Internships in NGOs, research projects, and communication skill development."
    },
    {
      id: "law",
      title: "Law & Public Administration",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>,
      color: "indigo",
      fields: ["Corporate Law", "Criminal Justice", "International Law", "Public Policy"],
      careers: ["Legal Advisor", "Public Prosecutor", "Policy Maker", "Diplomat"],
      resources: "Legal internships, case study analysis, and mock court experiences."
    },
    {
      id: "healthcare",
      title: "Healthcare & Medicine",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>,
      color: "red",
      fields: ["Medicine", "Pharmacy", "Nursing", "Public Health"],
      careers: ["Doctor", "Pharmacist", "Healthcare Manager", "Medical Researcher"],
      resources: "Clinical training, internships in hospitals, and access to health forums."
    },
    {
      id: "sports",
      title: "Sports & Physical Education",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>,
      color: "orange",
      fields: ["Sports Science", "Physical Therapy", "Sports Management", "Coaching"],
      careers: ["Athletic Trainer", "Sports Psychologist", "Fitness Instructor", "Sports Journalist"],
      resources: "Practical training sessions, mentorship from professional athletes, and sports analytics tools."
    }
  ];

  const filteredFields = careerFields.filter(field => {
    // If "all" is selected or the current field's id matches activeTab
    const tabMatch = activeTab === 'all' || field.id === activeTab;
    
    // If search term is empty or the field title includes the search term
    const searchMatch = searchTerm === '' || 
      field.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.fields.some(f => f.toLowerCase().includes(searchTerm.toLowerCase())) ||
      field.careers.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return tabMatch && searchMatch;
  });

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🎓 Graduates - Explore Opportunities Across Diverse Fields
          </h2>
          <div className="italic text-gray-700 text-center mb-6">
            <p>
              Congratulations on achieving this significant milestone! At Navigator Nest, we empower graduates to explore 
              various career paths and make informed decisions based on their interests and skills.
            </p>
          </div>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search fields, careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="inline-flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition duration-150`}
              >
                All Fields
              </button>
              <button
                onClick={() => setActiveTab('engineering')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'engineering'
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition duration-150`}
              >
                Engineering
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'business'
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition duration-150`}
              >
                Business
              </button>
              <button
                onClick={() => setActiveTab('healthcare')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'healthcare'
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition duration-150`}
              >
                Healthcare
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Career Fields */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-500 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Career Fields</h3>
              </div>
              
              {filteredFields.length > 0 ? (
                <div className="space-y-4">
                  {filteredFields.map((field) => (
                    <FieldCard 
                      key={field.id}
                      icon={field.icon}
                      title={field.title}
                      color={field.color}
                      fields={field.fields}
                      careers={field.careers}
                      resources={field.resources}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="mt-2 text-gray-700 font-medium">No matching career fields found</h4>
                  <p className="text-gray-500 mt-1">Try adjusting your search or filters</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setActiveTab('all');}}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Interest Quiz and Resources */}
          <div className="md:col-span-1">
            <InterestQuiz />
            
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Helpful Resources</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h4 className="font-semibold">Career Guides</h4>
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive guides for each field with salary insights and future prospects.</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold">Webinars & Workshops</h4>
                  </div>
                  <p className="text-sm text-gray-600">Live sessions with industry experts to gain practical insights.</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="font-semibold">Mentorship Program</h4>
                  </div>
                  <p className="text-sm text-gray-600">Connect with professionals who can guide you in your chosen field.</p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h4 className="font-semibold">Internship Portal</h4>
                  </div>
                  <p className="text-sm text-gray-600">Exclusive internship opportunities with partner organizations.</p>
                </div>
              </div>
              
              <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <span>Access Resources</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories Carousel */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-green-500 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Success Stories</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">PR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Priya Reddy</h4>
                  <p className="text-sm text-gray-600">Data Scientist at Google</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">"Navigator Nest helped me identify my passion for data science and guided me toward the right training programs. Now I'm living my dream!"</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Anil Kumar</h4>
                  <p className="text-sm text-gray-600">UI/UX Designer at Amazon</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">"The career quiz accurately matched me with UI/UX design. The resources and mentorship helped me build a portfolio that landed me my first job."</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sania Mirza</h4>
                  <p className="text-sm text-gray-600">Biotechnology Researcher</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">"I was confused between multiple science fields. The detailed resources and expert guidance helped me choose biotechnology, which perfectly fits my interests."</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#EEF2FF] p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Start Your Professional Journey?</h3>
          <p className="text-gray-700 mb-6">Our career advisors are here to help you navigate the exciting opportunities ahead.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Consultation
            </button>
            <button className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-50 transition duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Download Career Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;