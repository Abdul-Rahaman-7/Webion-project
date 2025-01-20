import React from 'react';


const Navbar = () => {
  return (
    <div className="bg-black py-2 fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 mt-4">
      <nav className="bg-black py-2 px-4 flex justify-between items-center rounded-full border border-white max-w-7xl mx-auto mx-16">
          <div className="text-2xl font-bold" style={{ color: '#d4ff00' }}>
            LearnHub
          </div>
          <button className="text-white text-sm px-1 py-1">
            Admin
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;