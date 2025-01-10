'use client'

import React from 'react'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <section>
        <aside className="bg-blue-600 text-white w-64 min-h-screen flex flex-col">
            <div className="p-6 text-center border-b border-blue-500">
            <h1 className="text-2xl font-bold">CMS Dashboard</h1>
            </div>
            <nav className="flex-1 p-4">
            <ul className="space-y-4">
                <li>
                    <Link href="/dashboard" className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/profile" className="flex items-center px-4 py-2 rounded hover:bg-blue-500">
                        <span>My Profile</span>
                    </Link>
                </li> */}
                <li>
                    <Link href="/dashboard/students" className="flex items-center px-4 py-2 rounded hover:bg-blue-500">
                        <span>Students</span>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/logout" className="flex items-center px-4 py-2 rounded hover:bg-blue-500">
                        <span>Logout</span>
                    </Link>
                </li> */}
            </ul>
            </nav>
        </aside>
    </section>
  )
}

export default Sidebar;