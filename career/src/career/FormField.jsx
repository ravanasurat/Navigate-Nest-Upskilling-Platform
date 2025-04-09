// FormField.jsx
import React from 'react';

function FormField({ label, required, input }) {
  return (
    <div>
      <label className="block mb-2">
        {required && <span className="text-red-500 mr-1">*</span>}
        <span className="font-medium">{label}</span>
      </label>
      {input}
    </div>
  );
}

export default FormField;