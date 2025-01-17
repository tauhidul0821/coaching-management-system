'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Layout/Sidebar';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState({ name: '', email: '', role: '' });
  const getUserDetails = async () => {
    try {
      const response: any = await axios.get('/api/me');
      localStorage.setItem('profile', JSON.stringify(response.data.data));
      setProfileInfo(response.data.data);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      {!isPageLoading ? (
        <div>
          <div className="bg-gray-100 flex min-h-screen">
            <Sidebar profileInfo={profileInfo} />
            <div className="flex-1 flex flex-col">
              <Header profileInfo={profileInfo} />
              <main className="flex-1 p-6">
                <div>{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
