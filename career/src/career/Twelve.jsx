import React from 'react';
import AdvertiseForm from './AdvertiseForm';
import Competitive from './Competitive';
import Cutoff from './CourseCards';


const Twelve = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Curved bottom background */}
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%] z-0"></div>
        {/* AdvertiseForm component */}
        <AdvertiseForm />
        <Competitive/>
        <Cutoff/>
    </div>
  );
};

export default Twelve;