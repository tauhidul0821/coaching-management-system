'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiStudentBold } from 'react-icons/pi';
import { FaTachometerAlt, FaBook, FaBookReader, FaChalkboardTeacher } from 'react-icons/fa';

const Sidebar = ({ profileInfo }: { profileInfo: any }) => {
  const pathname = usePathname();

  return (
    <section>
      <aside className="bg-blue-600 text-white w-64 min-h-screen flex flex-col">
        <div className="p-6 text-center border-b border-blue-500">
          <h1 className="text-2xl font-bold">CMS Dashboard</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard"
                className={`${pathname === '/dashboard' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
              >
                <FaTachometerAlt />
                <span> Dashboard</span>
              </Link>
            </li>

            {profileInfo.role === 'teacher' && (
              <>
                <li>
                  <Link
                    href="/dashboard/teachers"
                    className={`${pathname === '/dashboard/teachers' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
                  >
                    <FaChalkboardTeacher />
                    <span> Teachers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/teachers/students"
                    className={`${pathname === '/dashboard/teachers/students' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
                  >
                    <PiStudentBold /> <span> Students</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/teachers/allCourses"
                    className={`${pathname === '/dashboard/teachers/allCourses' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
                  >
                    <FaBook /> <span> All Courses</span>
                  </Link>
                </li>
              </>
            )}

            {profileInfo.role === 'student' && (
              <>
                <li>
                  <Link
                    href="/dashboard/students/myCourses"
                    className={`${pathname === '/dashboard/students/myCourses' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
                  >
                    <FaBookReader /> <span> My Course</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/students/quiz"
                    className={`${pathname === '/dashboard/students/quiz' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
                  >
                    <FaBookReader /> <span> Quiz</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/students/exam"
                    className={`${pathname === '/dashboard/students/exam' ? 'bg-blue-500' : ''} flex items-center px-4 py-2 text-white rounded hover:bg-blue-700`}
                  >
                    <FaBookReader /> <span> Exam</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
