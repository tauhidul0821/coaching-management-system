'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentTableRow from '@/components/StudentList';
import Spinner from '@/components/Spinner';
import Link from 'next/link';

const StudentList = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response: any = await axios.get('/api/student');
        setStudents(response.data.data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getAllStudents();
  }, []);
  const tableHeaderClass = 'py-3 px-6 text-left text-sm font-medium text-gray-600';

  if (loading) return <Spinner loading={loading} />;

  return (
    <>
      <div className="bg-gray-100 p-10">
        <div className="container mx-auto">
          <div>
            <h1 className="float-left text-2xl font-bold mb-6 ">Students Table</h1>

            <Link
              href="/dashboard/teachers/students/add"
              className="float-right bg-blue-600 text-white px-4 py-2 pb-2 rounded-lg hover:bg-blue-700 right"
            >
              Add New Student
            </Link>
          </div>

          <div className="">
            {/* <Link
              href="/dashboard/teachers/students/add"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Add Students
            </Link> */}

            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className={tableHeaderClass}>Id</th>
                  <th className={tableHeaderClass}>Student Name</th>
                  <th className={tableHeaderClass}>Student Email</th>
                  <th className={tableHeaderClass}>ClassName</th>
                  <th className={tableHeaderClass}>Subject List</th>
                  <th className={`${tableHeaderClass} text-center`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student: any, index: number) => (
                  <StudentTableRow student={student} id={index} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;
