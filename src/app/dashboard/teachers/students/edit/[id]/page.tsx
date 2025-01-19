'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';
import Spinner from '@/components/Spinner';

const EditStudent = () => {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [student, setStudent] = useState({ name: '', email: '', grade: '', subject: '' });

  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const response: any = await axios.get(`/api/student/${id}`);
        console.log(response.data.data);
        setStudent(response.data.data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getStudentDetails();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!student.name || !student.email) {
      setError('Name and email are necessary.');
      return;
    }

    console.log('before posting :- ', student);

    try {
      const res = await axios.put(`/api/student/${id}`, student);
      if (res.status === 201) {
        router.push('/dashboard/teachers/students');
        toast.success('Student updated successful.');
      }
    } catch (err: any) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Update Student</h1>
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
                defaultValue={student.name}
                placeholder="Enter your full name"
                onChange={handleChange}
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
                disabled={true}
                required
                defaultValue={student.email}
                placeholder="Enter your email address"
                onChange={handleChange}
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
                onChange={handleChange}
                defaultValue={student.grade}
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
                onChange={handleChange}
                defaultValue={student.subject}
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
                Update Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
