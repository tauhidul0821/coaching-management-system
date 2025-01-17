'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [profile, setProfile] = useState({ name: '', role: '', email: '' });

  const router = useRouter();

  const getUserDetails = async () => {
    try {
      const response: any = await axios.get('/api/me');
      setProfile(response.data.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      router.push('/login');
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <section>
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-700">Dashboard</h2>
        {/* <!-- Profile Section --> */}
        <div className="relative">
          <button
            type="button"
            className=" relative flex items-center space-x-2"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          >
            <span className="hidden sm:block font-medium text-gray-700">{profile ? profile?.name : 'Jhon Do'}</span>
            <img src="https://via.placeholder.com/40" alt="Avatar" className="w-10 h-10 rounded-full" />
          </button>
          {isProfileMenuOpen && (
            <div
              id="profileDropdown"
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <Link
                href="/dashboard/profile"
                onClick={() => setIsProfileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button onClick={() => logout()} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
