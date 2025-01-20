import React from 'react';

const DevelopmentGuides = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] p-8 text-white mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Front-end Guide */}
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#ccff00] border-b border-[#ccff00] pb-2">
            Front-end Guide
          </h2>
          <ul className="space-y-4 list-disc pl-6 mt-4">
            <li>Clone the exact project.</li>
            <li>Fill out the form first, and the form details should be added in card format.</li>
            <li>
              The card length will be added to the home page dynamically, and placed & unplaced values will also be updated dynamically.
            </li>
            <li>If we delete a card, it will update on the home page.</li>
            <li>
              Our requirement:
              <ul className="space-y-2 pl-6 mt-2">
                <li className="text-[#ccff00]">1. HTML</li>
                <li className="text-[#ccff00]">2. CSS</li>
                <li className="text-[#ccff00]">3. JavaScript</li>
                <li className="text-[#ccff00]">4. ReactJS</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Fullstack Development Guide */}
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#ccff00] border-b border-[#ccff00] pb-2">
            Fullstack Development Guide
          </h2>
          <ul className="space-y-4 list-disc pl-6 mt-4">
            <li>Clone the exact project.</li>
            <li>Fill out the form first, and the form details should be added in card format.</li>
            <li>
              The card length will be added to the home page dynamically, and placed & unplaced values will also be updated dynamically.
            </li>
            <li>If we delete a card, it will update on the home page.</li>
            <li>
              Our requirement choose any one language for backend:
              <ul className="space-y-2 pl-6 mt-2">
                <li className="text-[#ccff00]">1. HTML</li>
                <li className="text-[#ccff00]">2. CSS</li>
                <li className="text-[#ccff00]">3. JavaScript</li>
                <li className="text-[#ccff00]">4. ReactJS</li>
                <li className="text-[#ccff00]">5. Nodejs</li>
                <li className="text-[#ccff00]">6. Python</li>
                <li className="text-[#ccff00]">7. JAVA</li>
                <li className="text-[#ccff00]">8. MongoDB</li>
                <li className="text-[#ccff00]">9. SQL</li>
              </ul>
            </li>
            <li>For the backend, connect with the database using any language you know (Python, Node.js), and use either MongoDB or SQL.</li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="md:col-span-2 bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#ccff00] border-b border-[#ccff00] pb-2 text-center">
            Important Notes
          </h2>
          <ul className="space-y-4 list-disc pl-6 mt-4">
            <li>No need for notes files; they are for guidance only.</li>
            <li>Once completed, deploy the project to Github, Vercel, or Netlify and upload the link in the given form.</li>
            <li>We have attached asset files in zip format, check them out.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentGuides;