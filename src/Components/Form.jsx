import React, { useState } from "react";

const initialForm = {
  name: "",
  role: "",
  email: "",
  phone: "",
  course: "",
  status: "Unplaced",
};

function Form({ details, setDetails }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  console.log(details.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails([...details, form]);
    console.log("Form :", details);
    setForm(initialForm);
  };

  const handleDelete = (index) => {
    const updatedDetails = details.filter((_, i) => i !== index);
    setDetails(updatedDetails);
  };

  return (
    <>
      {/* Form Section */}
      <div className="bg-black text-[#94ff08d3] py-10 px-5">
        <div className="max-w-4xl mx-auto bg-black text-white rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6" style={{ color: '#d4ff00' }}>Fill This Form</h1>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-bold" style={{ color: '#d4ff00' }}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-100 text-black rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-lg font-bold" style={{ color: '#d4ff00' }}>
                Role:
              </label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="Enter your role"
                value={form.role}
                onChange={handleChange}
                className="w-full bg-gray-100 text-black rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-bold" style={{ color: '#d4ff00' }}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-100 text-black rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-lg font-bold" style={{ color: '#d4ff00' }}>
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-gray-100 text-black rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            {/* Course */}
            <div>
              <label htmlFor="course" className="block text-lg font-bold" style={{ color: '#d4ff00' }}>
                Course:
              </label>
              <select
                id="course"
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full bg-gray-100 text-black rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Select a course</option>
                <option value="React">React Basics</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
                <option value="Advance CSS">Advance CSS</option>
                <option value="Backend Development">Backend Development</option>
              </select>
            </div>
            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-lg font-bold" style={{ color: '#d4ff00' }}>
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full bg-gray-100 text-black rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="Unplaced">Unplaced</option>
                <option value="Placed">Placed</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-[#d4ff00] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  
      {/* Display Section */}
      <div className="bg-black py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-white text-black p-5 rounded-lg shadow-lg relative"
            >
              {/* User Initial */}
              <div className="bg-[#90ff00] text-black font-bold rounded-full w-12 h-12 flex items-center justify-center absolute -top-6 left-5">
                {detail.name.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-bold mb-2 ml-16">{detail.name}</h2>
              <p>
                <strong>Role:</strong> {detail.role}
              </p>
              <p>
                <strong>Email:</strong> {detail.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {detail.phone}
              </p>
              <p>
                <strong>Course:</strong> {detail.course}
              </p>
              <p>
                <strong>Status:</strong> {detail.status}
              </p>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full mt-4 hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Form;
