"use client"
import React, { useState } from 'react';

const Dropbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-10 py-2 ml-72 -mt-96 bg-blue-500 text-white rounded-lg focus:outline-none"
      >
        ▼
      </button>
      {isOpen && (
        <div className=" ml-60 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropbar;


