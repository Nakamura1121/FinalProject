import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p>Email: beka.tsertsvadze.1@btu.edu.ge</p>
          <p>Phone: (995) 57777****</p>
        </div>
        <div>
          <a href="https://github.com/Nakamura1121" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/btsertsvadze/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-gray-500">&copy; 2024 HTS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

