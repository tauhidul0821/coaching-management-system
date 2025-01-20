'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { fetchStudentDetails } from '@/utilities/FetchStudentDetails';

const StudentDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const { student, loading } = fetchStudentDetails(id);

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-500 px-6 py-4">
            <h1 className="text-white text-2xl font-bold">Student Details</h1>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center">
              <label className="w-1/4 font-medium text-gray-600">Name:</label>
              <p className="w-3/4 text-gray-800">{student?.name}</p>
            </div>
            <div className="flex items-center">
              <label className="w-1/4 font-medium text-gray-600">Email:</label>
              <p className="w-3/4 text-gray-800">{student?.email}</p>
            </div>
            <div className="flex items-center">
              <label className="w-1/4 font-medium text-gray-600">Grade:</label>
              <p className="w-3/4 text-gray-800">{`${student?.grade ? `${student.grade}th class` : 'N/A'}`}</p>
            </div>
            <div className="flex items-center">
              <label className="w-1/4 font-medium text-gray-600">Subject:</label>
              <p className="w-3/4 text-gray-800">{student?.subject}</p>
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
