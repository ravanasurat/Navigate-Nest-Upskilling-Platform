// TabButton.jsx
import React from 'react';

function TabButton({ title, description, isActive, onClick, color, icon = null }) {
  return (
    <button 
      className={`${color} ${isActive && color === 'bg-white' ? 'border-2 border-purple-600' : ''} 
      rounded-lg p-4 text-left flex-1 shadow-sm hover:shadow-md transition-all`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <h3 className={`text-xl font-semibold ${color === 'bg-purple-600' ? 'text-white' : 'text-black'}`}>
          {title}
        </h3>
        {icon && <span>{icon}</span>}
      </div>
      <p className={`mt-1 ${color === 'bg-purple-600' ? 'text-white' : 'text-gray-600'}`}>
        {description}
      </p>
    </button>
  );
}

export default TabButton;