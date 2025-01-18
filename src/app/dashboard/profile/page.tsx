'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/components/Spinner';

const profile = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [profile, setProfile] = useState({ name: '', role: '', email: '' });

  const getUserDetails = async () => {
    try {
      setIsPageLoading(true);
      const response: any = await axios.get('/api/me');
      setProfile(response.data.data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
    console.log('profile', profile);
  }, []);

  if (isPageLoading) return <Spinner loading={isPageLoading} />;

  return (
    <div className="bg-gray-100">
      <div className="p-8">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">My Profile</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
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
                value={profile.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue="{profile.email}"
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

export default profile;
