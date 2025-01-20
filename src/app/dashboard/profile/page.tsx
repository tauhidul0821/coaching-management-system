'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';

const profilePages = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [profile, setProfile] = useState({ name: '', role: '', email: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response: any = await axios.get('/api/me');
        setProfile(response.data.data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setIsPageLoading(false);
      }
    };

    getUserDetails();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!profile?.name || !profile?.email) {
      setError('All fields are necessary.');
      return;
    }

    try {
      const res = await axios.post('/api/me', profile);
      if (res.status === 201) {
        toast.success('Profile updated successful.');
      }
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  if (isPageLoading) return <Spinner loading={isPageLoading} />;

  return (
    <div className="bg-gray-100">
      <div className="p-8">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">My Profile</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                defaultValue={profile.name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></input>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={true} // This field is disabled, user can't change email address
                required
                onChange={handleChange}
                defaultValue={profile.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></input>
            </div>

            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default profilePages;
