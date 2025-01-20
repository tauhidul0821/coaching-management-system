'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '@/types/user';

export const fetchStudentDetails = (id: any) => {
  const [student, setStudent] = useState({ name: '', email: '', grade: '', subject: '' } as IUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const response: any = await axios.get(`/api/student/${id}`);
        setStudent(response.data.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      } finally {
        setLoading(false);
      }
    };

    getStudentDetails();
  }, [id]);

  return { student, loading };
};
