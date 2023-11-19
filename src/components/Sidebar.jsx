// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router

const Sidebar = ({ username }) => {
  return (
    <aside className="bg-gradient-to-r from-purple-700 to-indigo-800 w-64 p-4 h-full text-white">
      <div className="mb-8">
        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-white mb-2"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="text-xl font-semibold">{username}</div>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-1 15h2v-2h-2zm2-12c-2.67 0-8 1.34-8 4v2c0 2.66 5.33 4 8 4s8-1.34 8-4v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
              Profile
            </Link>
          </li>
          {/* Tambahkan menu lainnya */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
