'use client'
import Link from 'next/link'
import React from 'react'
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <section>
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-700">Dashboard</h2>
      <div className="relative">
        <button className="flex items-center space-x-2">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Avatar" 
            className="w-10 h-10 rounded-full"
          />
          <span className="hidden sm:block font-medium text-gray-700">John Doe</span>
        </button>
        <div 
          id="profileDropdown" 
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg hidden"
        >
          <Link
            href="/dashboard/profile" 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Profile
          </Link>
          <button
            onClick={() => signOut()} 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Logout
          </button>
        </div>
      </div>
    </header>
    
    </section>
  )
}

export default Navbar