import React from 'react';
import Link from 'next/link'

import { FaExclamationTriangle } from 'react-icons/fa';

const displayInline = {
  display: 'inline'
}

const NotFoundPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
          <FaExclamationTriangle style={displayInline} className="text-9xl text-yellow-500" />
          {/* <h1 className="text-9xl font-bold text-blue-500">404</h1> */}
          <p className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</p>
          <p className="mt-2 text-gray-500">Sorry, the page you're looking for doesn't exist.</p>
          <Link href="/dashboard" 
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
              Go Back to Home
          </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
