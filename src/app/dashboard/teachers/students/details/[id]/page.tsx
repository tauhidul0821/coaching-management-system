'use client';
import React from 'react';
import axios from 'axios';
import Spinner from '@/components/Spinner';
import { useRouter, useParams } from 'next/navigation';

interface Student {
  id: number;
  name: string;
  email: string;
  className: string;
  subjects: string[];
}

const StudentDetails = async () => {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {}, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <div className="bg-gray-100">
        <div className="p-8">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">John Doe</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">Email:</p>
                <p className="text-gray-700">john@gmail.com</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">Grade:</p>
                <p className="text-gray-700">A+</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Academic Records</h3>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Mathematics</td>
                  <td className="border border-gray-300 px-4 py-2">95</td>
                  <td className="border border-gray-300 px-4 py-2">A</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Science</td>
                  <td className="border border-gray-300 px-4 py-2">88</td>
                  <td className="border border-gray-300 px-4 py-2">B+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">English</td>
                  <td className="border border-gray-300 px-4 py-2">92</td>
                  <td className="border border-gray-300 px-4 py-2">A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-3xl mx-auto mt-8 flex justify-end space-x-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
              Edit Details
            </button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">
              Delete Student
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
