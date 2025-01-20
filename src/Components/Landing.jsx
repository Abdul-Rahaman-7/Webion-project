import React from 'react';

const LandingSection = () => {
  const features = [
    {
      icon: "/images/Cer.jpg", // Add your certificate icon path
      title: "Certificate Distribution",
      description: "We offer certificates to validate and recognize your achievement."
    },
    {
      icon: "/images/kno.jpg", // Add your knowledge icon path
      title: "Knowledge",
      description: "We deliver transformative knowledge that empowers and inspires."
    },
    {
      icon: "/images/Han.jpg", // Add your hands-on icon path
      title: "Hands-on Experience",
      description: "We provide hands-on experience for real-world learning. You learn best by doing."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 py-2">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="text-cyan-400 uppercase tracking-wider text-sm mb-4 text-bold font-bold">
          Open source theme and UI components
        </div>
        <h1 className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight">
          Geaux Astro helps you craft beautiful websites efficiently
        </h1>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Features List */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <img 
            src="/images/Dashboard.jpg" // Add your dashboard image path
            alt="Dashboard Preview"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;