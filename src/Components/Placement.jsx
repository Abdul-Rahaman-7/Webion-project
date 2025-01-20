import React from 'react';

// Partner logo data
const partners = [
  { name: 'Airbnb', logo: "/images/ado.jpg" },
  { name: 'Grabyo', logo: '/images/grabyo.jpg' },
  { name: 'Life Groups', logo: '/images/lifegroups.jpg' },
  { name: 'MYOB', logo: '/images/myob.jpg' },
  { name: 'Tailus', logo: '/images/tailus.jpg' },
  { name: 'Microsoft', logo: '/images/microsoft.jpg' },
  { name: 'COTY', logo: '/images/coty.jpg' },
  { name: 'Lilly', logo: '/images/lilly.jpg' },
];

const PartnersSection = () => {
  return (
    <section className="bg-black py-16 px-6">
      {/* Title */}
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Placement Partners
        </h2>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
            >
              {/* Using placeholder for demo, replace with actual partner logos */}
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-[150px] h-auto opacity-90 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* More Companies Button */}
        <div className="text-center mt-12">
          <button className="bg-[#c8ff00] hover:bg-[#d4ff33] px-8 py-3 rounded-full text-black transition-colors duration-300">
            and, more companies
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;