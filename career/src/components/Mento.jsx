import React, { useState } from 'react';

const MentorCard = ({ mentor, onBook }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-16 h-16 ${mentor.bgColor} rounded-full flex items-center justify-center mr-4`}>
            <span className={`${mentor.textColor} text-xl font-bold`}>{mentor.initials}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
            <p className="text-base text-gray-600">{mentor.role}</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-6 text-justify">{mentor.expertise}</p>
        
        <button 
          onClick={() => onBook(mentor)} 
          className="w-full py-3 px-6 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          <span>Book Consultation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const BookingPopup = ({ mentor, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className={`w-16 h-16 ${mentor.bgColor} rounded-full flex items-center justify-center mr-4`}>
              <span className={`${mentor.textColor} text-xl font-bold`}>{mentor.initials}</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold">{mentor.name}</h4>
              <p className="text-base text-gray-600">{mentor.role}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-700 text-lg font-medium">Consultation booked successfully!</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-4 text-justify">
            You'll receive an email with meeting details shortly.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-3 px-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

const Mentor = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  
  const mentors = [
    {
      id: 1,
      name: "Priya Reddy",
      initials: "PR",
      role: "Data Scientist at Google",
      expertise: "Machine learning specialist with 8+ years in AI and data visualization.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Anil Kumar",
      initials: "AK",
      role: "UI/UX Designer at Amazon",
      expertise: "Expert in user-centered design and prototyping for e-commerce platforms.",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      id: 3,
      name: "Sania Mirza",
      initials: "SM",
      role: "Biotechnology Researcher",
      expertise: "Leading genomics researcher with publications in scientific journals.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      name: "Raj Patel",
      initials: "RP",
      role: "Software Engineering Manager",
      expertise: "15+ years in software leadership and cloud architecture.",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      id: 5,
      name: "Maya Singh",
      initials: "MS",
      role: "Marketing Director",
      expertise: "Digital marketing expert specializing in brand building and growth.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      id: 6,
      name: "David Chen",
      initials: "DC",
      role: "Finance Consultant",
      expertise: "Financial advisor for investment strategies and personal finance.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    }
  ];
  
  const handleBookMentor = (mentor) => {
    setSelectedMentor(mentor);
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMentor(null);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Connect with Expert Mentors
          </h2>
          <p className="text-xl text-gray-700 text-center">
            Get personalized guidance from industry professionals.
          </p>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <MentorCard 
              key={mentor.id} 
              mentor={mentor}
              onBook={handleBookMentor}
            />
          ))}
        </div>
        
     
        {showPopup && selectedMentor && (
          <BookingPopup 
            mentor={selectedMentor}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Mentor;