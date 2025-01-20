'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { IProfile } from '@/types/user';
import Image from 'next/image';
import profilePicture from '@/assets/images/profile2.jpg';

const Header = ({ profileInfo }: { profileInfo: IProfile }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuClass = 'block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors';

  const router = useRouter();

  const logout = async () => {
    try {
      const res = await axios.get('/api/logout');
      if (res.status === 200) {
        router.push('/login');
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <section>
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-700">Dashboard</h2>
        <div className="relative">
          <button
            type="button"
            className=" relative flex items-center space-x-2"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          >
            <span className="hidden sm:block font-medium text-gray-700">{profileInfo ? profileInfo?.name : ''}</span>

            <Image className="h-10 w-auto" src={profilePicture} height={10} width={10} alt="alt" />
          </button>
          {isProfileMenuOpen && (
            <div
              id="profileDropdown"
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <Link href="/dashboard/profile" onClick={() => setIsProfileMenuOpen(false)} className={profileMenuClass}>
                Profile
              </Link>
              <button onClick={() => logout()} className={`${profileMenuClass} w-full text-left`}>
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
