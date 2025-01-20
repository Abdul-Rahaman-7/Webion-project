import React from 'react';
import PropTypes from 'prop-types';

function ResultSection({ details }) {
  const placedStudents = details.filter((student) => student.status === "Placed");
  const unplacedStudents = details.filter((student) => student.status === "Unplaced");

  return (
    <div className="bg-black text-white p-8 ">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left column with text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            <span className="text-green-500">
              Empower your future<br />with cutting-edge skills
            </span><br />
            <span className="text-blue-400">
              New, Embrace innovation,<br />master technology, &<br />shape the digital world
            </span><br />
            <span className="text-red-500">
              Your journey to success<br />starts here.
            </span>
          </h1>
        </div>

        {/* Right column with content */}
        <div className="space-y-8">
          <p className="text-lg">
            Join our course with a proven track record of success, where learning isnt just about gaining skills; its about growing them. Join us, learn with confidence, and watch your skills soar.
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-[#90ff00] bg-opacity-20 rounded-lg p-3">
                <div className="text-[#90ff00] font-bold text-sm mb-2">Total Students</div>
                <div className="text-4xl font-bold">{details.length}</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#90ff00] bg-opacity-20 rounded-lg p-3">
                <div className="text-[#90ff00] font-bold text-sm mb-2">Placed Students</div>
                <div className="text-4xl font-bold">{placedStudents.length}</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#90ff00] bg-opacity-20 rounded-lg p-3">
                <div className="text-[#90ff00] font-bold text-sm mb-2">Unplaced Students</div>
                <div className="text-4xl font-bold">{unplacedStudents.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    </div>
  );
}

ResultSection.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      address: PropTypes.string, // Added address prop type
    })
  ).isRequired,
};

export default ResultSection;


