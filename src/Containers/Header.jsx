import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#00040F] px-6 py-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <img
            className="w-10 h-10 rounded-[20px]"
            src="header.jpg"
            alt="logo"
          />
          <h1 className="font-sans text-xl font-semibold text-[#7DE7EB]">
            HooBank
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center text-[#FFFFFF] font-medium">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Features</a>
          <a href="#">Solution</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative">
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6H6m12 4H6m12 4H6m12 4H6"
              />
            </svg>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-28 border border-[#214D76] rounded-lg p-4 text-white font-medium bg-[#214D76] shadow-md z-10">
              <div className="flex flex-col gap-4">
                <a href="#" onClick={() => setIsOpen(false)}>
                  Home
                </a>
                <a href="#" onClick={() => setIsOpen(false)}>
                  About Us
                </a>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Features
                </a>
                <a href="#" onClick={() => setIsOpen(false)}>
                  Solution
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
