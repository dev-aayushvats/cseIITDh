import React from 'react';

const Footer = () => {
  // Automatically updated during build time
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long"
  });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Department of Computer Science and Engineering, IIT DHARWAD
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-xs text-center">
            All rights reserved. The content on this website is the intellectual property of IIT DHARWAD.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 