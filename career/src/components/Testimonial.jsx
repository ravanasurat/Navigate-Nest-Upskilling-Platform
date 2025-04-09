import { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import Image from "../assets/test.png";

const Testimonial = () => {
  const [assessment, setAssessment] = useState('');

  const handleInputChange = (e) => {
    setAssessment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assessment submitted:', assessment);
    setAssessment('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left side content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <div className="mb-2 text-indigo-600 font-medium uppercase tracking-wide">
            TESTIMONIAL
          </div>
          <h2 className="text-4xl font-bold text-indigo-900 mb-6">
            What They Say?
          </h2>
          
          <p className="text-gray-600 mb-4">
            Navigate Nest has got more than 100k positive ratings from our users around the world.
          </p>
          
          <p className="text-gray-600 mb-8">
            Some of the students and teachers were greatly helped by the Skilline.
          </p>
          
          <p className="text-gray-600 mb-6">
            Are you too? Please give your assessment
          </p>
          
          <form onSubmit={handleSubmit} className="flex">
            <div className="relative flex-grow">
              <input
                type="text"
                value={assessment}
                onChange={handleInputChange}
                placeholder="Write your assessment"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-indigo-500 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
        
        {/* Right side content with image and testimonial card */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-blue-100 rounded-lg overflow-hidden relative">
            <img
              src={Image}
              alt="Student with books" 
              className="w-full h-auto rounded-lg"
            />
            
            {/* Testimonial card */}
            <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-0 md:-translate-x-1/4 bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-700 italic mb-4">
                "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort."
              </p>
              
              <div className="flex justify-between items-center">
                <div className="font-semibold text-gray-800">Gloria Rose</div>
                <div className="flex flex-col items-end">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">12 reviews at Yelp</div>
                </div>
              </div>
            </div>
          </div>

          <button className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
            <ChevronRight className="h-5 w-5 text-indigo-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;