import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`
        w-full 
        p-4 
        border 
        border-slate-300 
        rounded-lg 
        focus:outline-none 
        focus:border-blue-600 
        focus:ring-2 
        focus:ring-blue-600 
        focus:ring-opacity-50 
        transition-all 
        duration-200 
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
