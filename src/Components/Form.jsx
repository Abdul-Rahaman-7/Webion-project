import React, { useState } from 'react';

const FormInterface = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phoneNumber: '',
    course: '',
    status: 'Unplaced'
  });
  

  const [users, setUsers] = useState([

    {
      name: 'Srivasan',
      role: 'Developer',
      email: 'srivasan@gmail.com',
      phoneNumber: '123-456-7890',
      course: 'React Basics',
      status: 'Placed'
    },
    {
      name: 'Mohanapriya',
      role: 'Designer',
      email: 'mohanapriya@gmail.com',
      phoneNumber: '098-765-4321',
      course: 'UI/UX Design',
      status: 'Unplaced'
    },
    {
      name: 'kasi',
      role: 'Developer',
      email: 'kasi@gmail.com',
      phoneNumber: '123-456-7890',
      course: 'React Basics',
      status: 'Placed'
    },
    {
      name: 'anaya',
      role: 'Designer',
      email: 'anaya@gmail.com',
      phoneNumber: '098-765-4321',
      course: 'UI/UX Design',
      status: 'Unplaced'
    },
    {
      name: 'priya',
      role: 'Designer',
      email: 'priya@gmail.com',
      phoneNumber: '098-765-4321',
      course: 'UI/UX Design',
      status: 'Unplaced'
    },
    {
      name: 'Mohan',
      role: 'Designer',
      email: 'mohan@gmail.com',
      phoneNumber: '098-765-4321',
      course: 'UI/UX Design',
      status: 'Unplaced'
    }

  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: '',
      role: '',
      email: '',
      phoneNumber: '',
      course: '',
      status: 'Unplaced'
    });
  };

  const handleDelete = (email) => {
    setUsers(users.filter(user => user.email !== email));
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto"> 
        <h1 className="text-2xl font-bold mb-8 text-[#ccff00] text-center"> Fill this Form </h1>
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#ccff00] mb-2">Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your name"
                className="w-full p-2 rounded border border-gray-700 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-[#ccff00] mb-2">Role:</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                placeholder="Enter your role"
                className="w-full p-2 rounded border border-gray-700 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-[#ccff00] mb-2">Email:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                className="w-full p-2 rounded border border-gray-700 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-[#ccff00] mb-2">Phone Number:</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                placeholder="Enter your phone number"
                className="w-full p-2 rounded border border-gray-700 bg-white"
              />
            </div>
            
            <div>
              <label className="block text-[#ccff00] mb-2">Course:</label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full p-2 rounded border border-gray-700 bg-white"
              >
                <option value="">Select a course</option>
                <option value="React Basics">React Basics</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[#ccff00] mb-2">Status:</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full p-2 rounded border border-gray-700 bg-white"
              >
                <option value="Unplaced">Unplaced</option>
                <option value="Placed">Placed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-black text-white px-8 py-2 rounded hover:bg-[#ccff00] hover:text-black transition-colors border border-gray-700"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="grid grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold">
                  {user.name[0].toUpperCase()}
                </div>
                <h3 className="text-black font-semibold">{user.name}</h3>
              </div>
  
              <div className="space-y-2 text-black">
                <p><span className="font-semibold">Role:</span> {user.role}</p>
                <p><span className="font-semibold">Email:</span> {user.email}</p>
                <p><span className="font-semibold">Phone Number:</span> {user.phoneNumber}</p>
                <p><span className="font-semibold">Course:</span> {user.course}</p>
                <p><span className="font-semibold">Status:</span> {user.status}</p>
              </div>
              
              <button 
                onClick={() => handleDelete(user.email)}
                className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormInterface;