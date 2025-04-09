import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
    
    <div className="flex items-center gap-2">
      <img className="w-10 h-10 rounded-[20px]" src="header.jpg" alt="logo" />
      <h1 className="font-sans text-xl font-semibold">HooBank</h1>
    </div>
  
    <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">About Us</a>
      <a href="#" className="hover:text-blue-600">Features</a>
      <a href="#" className="hover:text-blue-600">Solution</a>
    </div>
  </div>
  
  );
}

export default Header;
