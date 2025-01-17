'use client';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} Coaching Management System. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
