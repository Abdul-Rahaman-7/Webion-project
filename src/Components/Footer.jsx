import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-black text-center py-6">
      {/* Footer Title */}
      <div className="text-2xl font-bold" style={{ color: '#d4ff00' }}>
        LearnHub
      </div>
      {/* Copyright Information */}
      <div className="text-gray-400 mt-2">
        © 2022 Tailwind Labs Inc. All rights reserved.
      </div>
      {/* Links */}
      <div className="flex justify-center mt-4 space-x-6">
      <Link 
          to="/form" className="text-gray-400 hover:text-gray-200"
        >
          Form   
        </Link>
        <Link to="/Notes" className="text-gray-400 hover:text-gray-200">
         Notes
        </Link>
      </div>
    </footer>
  );
};
export default Footer;