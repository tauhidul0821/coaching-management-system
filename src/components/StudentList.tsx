'use  client';
import React, { useState } from 'react';
import { IUser } from '@/types/user';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const StudentTableRow = ({ id, student }: { id: number; student: IUser }) => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  const openModal = (studentId: any) => {
    setSelectedStudentId(studentId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudentId(null);
  };

  const onDeleteStudent = async () => {
    setLoading(true);
    console.log(`Deleting student with ID: ${selectedStudentId}`);

    try {
      const res = await axios.delete(`/api/student/${selectedStudentId}`);
      if (res.status === 200) {
        toast.success('Student Deleted successful.');
        // router.refresh();
        // location.reload();
      }
    } catch (err: unknown) {
      toast.error('An error occurred while deleting student');
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const tableDataClass = 'py-4 px-6 text-sm text-gray-700';
  return (
    <>
      <tr className="border-b" key={student?._id}>
        <td className={tableDataClass}>{id + 1}</td>
        <td className={tableDataClass}>{student?.name}</td>
        <td className={tableDataClass}>{student?.email}</td>
        <td className={tableDataClass}>{student?.grade ? student?.grade : 'N/A'}</td>
        <td className={tableDataClass}>{student?.subject ? student?.subject : 'N/A'}</td>
        <td className="py-4 px-6 text-sm text-center">
          <Link
            href={`/dashboard/teachers/students/edit/${student?._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Edit
          </Link>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => openModal(student?._id)}
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Confirm Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">Are you sure you want to delete this student?</p>
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={closeModal}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onDeleteStudent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentTableRow;
