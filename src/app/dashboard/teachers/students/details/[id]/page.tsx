'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';
import Spinner from '@/components/Spinner';

const StudentDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
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

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <div className="bg-gray-100">
        <div className="p-8">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{student?.name}</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">Email:</p>
                <p className="text-gray-700">{student?.email}</p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-8 flex justify-end space-x-4">
            <Link
              href={`/dashboard/teachers/students/edit/${id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              {' '}
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
