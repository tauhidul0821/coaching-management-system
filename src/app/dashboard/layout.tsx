import React from 'react'
import Sidebar from '@/components/Layout/Sidebar';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
          <div className="bg-gray-100 flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 p-6">
                  <div>{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </>
    );
  }
