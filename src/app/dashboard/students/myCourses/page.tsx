import React from 'react';

const myCourses = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">My Courses</h2>

        {/* <!-- Courses Section --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Single Course Card --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-lg font-semibold">Course Title 1</h3>
              <p className="text-sm">Instructor: John Doe</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Description: This is a basic course on web development, covering HTML, CSS, and JavaScript.
              </p>
              <p className="mt-2 text-sm font-bold text-gray-800">Status: Completed</p>
              <p className="mt-1 text-sm text-gray-600">Grade: A+</p>
            </div>
          </div>

          {/* <!-- Repeat the Course Card --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-lg font-semibold">Course Title 2</h3>
              <p className="text-sm">Instructor: Jane Smith</p>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Description: This is an advanced course on React.js and modern front-end frameworks.
              </p>
              <p className="mt-2 text-sm font-bold text-gray-800">Status: In Progress</p>
              <p className="mt-1 text-sm text-gray-600">Grade: -</p>
            </div>
          </div>
        </div>

        {/* <!-- Results Section --> */}
        <h2 className="text-2xl font-bold mt-12 mb-6">My Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Instructor</th>
                <th className="px-4 py-2">Grade</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700 border-b">
                <td className="px-4 py-2">Course Title 1</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">A+</td>
                <td className="px-4 py-2">Completed</td>
              </tr>
              <tr className="text-gray-700 border-b">
                <td className="px-4 py-2">Course Title 2</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">In Progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default myCourses;
