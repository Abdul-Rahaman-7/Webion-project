import React from 'react';

const ResultSection = () => {
  const stats = [
    { label: 'Total Students', value: '11' },
    { label: 'Placed Students', value: '5' },
    { label: 'Unplaced Students', value: '6' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Hero Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-green-500">
              Empower your future with cutting-edge skills
            </span>
            <br />
            <span className="text-blue-400">
              New, Embrace innovation, master technology, & shape the digital world
            </span>
            <br />
            <span className="text-red-500">
              Your journey to success starts here.
            </span>
          </h1>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <p className="text-xl leading-relaxed">
            Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#9eff00] text-black px-4 py-1 rounded-full text-sm mb-3">
                  {stat.label}
                </div>
                <div className="text-4xl font-bold">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;