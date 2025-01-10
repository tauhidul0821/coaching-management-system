import React from 'react'
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100 flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold text-gray-700">Main Content Area</h1>
              <p className="mt-4 text-gray-600">This is where the dynamic content for each page will go.</p>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Dashboard
