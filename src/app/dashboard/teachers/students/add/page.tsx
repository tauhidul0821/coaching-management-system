'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddStudent = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email) {
      setError('All fields are necessary.');
      return;
    }

    const data = {
      name,
      email,
    };

    try {
      const res = await axios.post('/api/student', data);
      if (res.status === 201) {
        router.push('/dashboard/teachers/students');
        toast.success('Registration successful. Please login to continue.');
      }
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add New Student</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* <!-- Class Dropdown --> */}
          <div className="mb-4">
            <label htmlFor="class" className="block text-sm font-medium text-gray-600">
              Class
            </label>
            <select
              id="class"
              name="class"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="" disabled selected>
                Select a class
              </option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          {/* <!-- Subject Dropdown --> */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="" disabled selected>
                Select a subject
              </option>
              <option value="english">English</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
            </select>
          </div>

          {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Create New Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
