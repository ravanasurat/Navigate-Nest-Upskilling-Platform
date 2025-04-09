import React from 'react';
import { PlayCircle } from 'lucide-react'; 
import Cas from "../assets/class.png";

function ClassSection() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl bg-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        
        <div className="md:w-1/2 space-y-5">
          <div>
            
            <div className="relative">
              <div className="bg-green-400 rounded-full h-20 w-20 absolute -left-3 -top-3 z-0"></div>
              <h2 className="text-3xl font-bold text-blue-900 relative z-10 pt-1 pl-3">
                Everything you can do in a physical
                <br />
                <span className="text-blue-900">classroom, </span>
                <span className="text-cyan-400">you can do with Navigate Nest</span>
              </h2>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed mt-4 text-lg">
          Navigate Nest is a comprehensive school management platform that enables educational institutions to seamlessly handle scheduling, attendance, payments, and virtual classrooms in a secure cloud-based system. It bridges the gap between traditional and online learning, ensuring an interactive and efficient education experience for students and teachers alike..
          </p>
          
        
        </div>
        
        
        <div className="md:w-1/2 relative">
          
          <div className="absolute -top-5 -left-5 h-16 w-16 bg-cyan-400 rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full z-0"></div>
          
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-8 border-white z-10">
            <img 
              src={Cas}
              alt="Classroom with teacher and students" 
              className="w-full h-auto"
            />
            
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-cyan-50 transition-colors">
                <PlayCircle size={48} className="text-cyan-400" />
              </button>
            </div>
          </div>
          
          
          <div className="absolute -bottom-5 -right-5 h-20 w-20 bg-green-400 rounded-full z-0"></div>
        </div>
      </div>
    </div>
  );
}

export default ClassSection;