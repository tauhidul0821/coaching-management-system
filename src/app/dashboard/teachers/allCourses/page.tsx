import React from 'react';

const allCourses = () => {
  return (
    <>
      <main className="container mx-auto mt-8 px-4">
        {/* <!-- Create Course Section --> */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Create a New Course</h2>
          <form id="create-course-form" className="space-y-4">
            <div>
              <label htmlFor="courseName" className="block text-gray-700 font-medium">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                placeholder="Enter course name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="courseDescription" className="block text-gray-700 font-medium">
                Course Description
              </label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                placeholder="Enter course description"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Create Course
            </button>
          </form>
        </section>

        {/* <!-- Courses List Section --> */}
        <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Manage Courses</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Course Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody id="course-list">
              <tr className="border-b">
                <td className="px-4 py-2">Math</td>
                <td className="px-4 py-2">Basic Mathematics Course</td>
                <td className="px-4 py-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
              {/* <!-- Add more courses dynamically here --> */}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default allCourses;
