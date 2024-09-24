import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student' // default role
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
    <div className='text-black gap-9 mt-20 leading-[5]'>

      <form onSubmit={handleSubmit}>
        <div>
          <label className='flex col-span-2 text-5xl bg-[#D0D0D0] gap-72' >Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </label>

        </div>

        <div>
          <label className=' text-5xl bg-[#D0D0D0]'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className=' text-5xl bg-[#D0D0D0]'>You are interested in:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          <div id='budget section'>


            <label className='text-5xl bg-[#D0D0D0]'>Budget in USD:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>

          </div>


        </div>
        <div>
          <label className='text-5xl bg-[#D0D0D0]'>Project Details:</label>
          <input
            type="text"
            name="name"
            background="#D0D0D0"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <button className=" bg-[#D0D0D0]" type="submit">Send a message</button>
      </form>
    </div>
  );
}

export default SimpleForm;
