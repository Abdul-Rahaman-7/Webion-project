import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Grid background effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-neon-green via-black to-neon-green-50 "
        style={{
          background: `
            linear-gradient(to bottom,
              transparent 0%,
              rgba(0, 0, 0, 1) 100%
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2.5)',
          transformOrigin: 'center center',
          backgroundPosition: 'center -100px'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Learn from the best, be <br/> your best..
        </h1>
        
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Give yourself an upgrade with our inspiring online courses 
          and join a global community of learners
        </p>
        
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;