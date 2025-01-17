import React from 'react';
import Link from 'next/link';

const accessDenied = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Access Denied</h2>
        <p className="text-gray-600 mb-6">
          You do not have permission to access this page. Please contact your administrator if you believe this is an
          error.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default accessDenied;
