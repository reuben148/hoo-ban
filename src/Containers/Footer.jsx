import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0A1C2C] text-white py-16 px-8">
      {/* Logo and Address */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div className="flex flex-col items-start">
          <img src="header.jpg" alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-[#A0A0A0]">
            1234 Street Name, City, Country
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        {/* Quick Links */}
        <div className="flex flex-col mb-8 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <a href="#" className="text-sm text-[#A0A0A0] mb-2">
            Home
          </a>
          <a href="#" className="text-sm text-[#A0A0A0] mb-2">
            About
          </a>
          <a href="#" className="text-sm text-[#A0A0A0] mb-2">
            Services
          </a>
          <a href="#" className="text-sm text-[#A0A0A0] mb-2">
            Contact
          </a>
        </div>

        {/* Company Info */}
        <div className="flex flex-col mb-8 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <a href="#" className="text-sm text-[#A0A0A0] mb-2">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-[#A0A0A0] mb-2">
            Terms of Service
          </a>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col mb-8 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm text-[#A0A0A0] mb-2">
            Email: contact@company.com
          </p>
          <p className="text-sm text-[#A0A0A0] mb-2">Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center sm:justify-start mb-8">
        <a href="#" className="text-[#A0A0A0] mx-4">
          Facebook
        </a>
        <a href="#" className="text-[#A0A0A0] mx-4">
          Twitter
        </a>
        <a href="#" className="text-[#A0A0A0] mx-4">
          Instagram
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-sm text-[#A0A0A0]">
        <p>© 2025 Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
