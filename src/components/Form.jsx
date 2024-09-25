import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student', // default role
    budget: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='container mx-auto px-4 py-8 lg:mb-96'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className=' md:flex '>
          <label className='block text-2xl md:bg-[#D0D0D0] md:text-black md:pr-[40vw] md:p-3 '>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full p-3  bg-[#D0D0D0] text-black focus:outline-none  "
          />
        </div>

        <div className=' md:flex '>
          <label className='block text-2xl  md:bg-[#D0D0D0] md:text-black md:pr-[40vw] md:p-3 '>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-3 rou bg-[#D0D0D0] text-black focus:outline-none "
          />
        </div>

        <div className=' md:flex '>
          <label className='block text-2xl  md:bg-[#D0D0D0] md:text-black md:pr-[40vw] md:p-3 '>You are interested in:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3  bg-[#D0D0D0] text-black focus:outline-none "
          >
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div className=' md:flex '>
          <label className='block text-2xl md:bg-[#D0D0D0] md:text-black md:pr-[40vw] md:p-3 '>Budget in USD:</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Enter your budget"
            className="w-full p-3  bg-[#D0D0D0] text-black focus:outline-none "
          />
        </div>

        <div className=' md:flex '>
          <label className='block text-2xl md:bg-[#D0D0D0] md:text-black md:pr-[40vw] md:p-3 '>Project Details:</label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Describe your project"
            required
            className="w-full p-3  bg-[#D0D0D0] text-black focus:outline-none"
          />
        </div>
        <button
          className="w-full p-3 bg-[#7a7878] text-black text-xl  hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          Send a message
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
