'use  client';
import React from 'react';
import { IUser } from '@/types/user';
import Link from 'next/link';

const StudentTableRow = ({ id, student }: { id: number; student: IUser }) => {
  const onDeleteStudent = () => {
    console.log('Delete student');
  };

  const tableDataClass = 'py-4 px-6 text-sm text-gray-700';
  return (
    <>
      <tr className="border-b" key={student?._id}>
        <td className={tableDataClass}>{id + 1}</td>
        <td className={tableDataClass}>{student?.name}</td>
        <td className={tableDataClass}>{student?.email}</td>
        <td className={tableDataClass}>10th Grade</td>
        <td className={tableDataClass}>Math, Science, English</td>
        <td className="py-4 px-6 text-sm text-center">
          <Link
            href={`/dashboard/teachers/students/details/${student?._id}`}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
          >
            Details
          </Link>

          <Link
            href={`/dashboard/teachers/students/edit/${student?._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Edit
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={onDeleteStudent}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default StudentTableRow;
