'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname);
  
  return (
    <section>
        <aside className="bg-blue-600 text-white w-64 min-h-screen flex flex-col">
            <div className="p-6 text-center border-b border-blue-500">
            <h1 className="text-2xl font-bold">CMS Dashboard</h1>
            </div>
            <nav className="flex-1 p-4">
            <ul className="space-y-4">
                <li>
                    <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'bg-blue-500': ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/students" className={`${pathname === '/dashboard/students' ? 'bg-blue-500': ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}>
                        <span>Students</span>
                    </Link>
                </li>
            </ul>
            </nav>
        </aside>
    </section>
  )
}

export default Sidebar;