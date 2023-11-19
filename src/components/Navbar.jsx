// src/components/Navbar.jsx
import React from 'react';
import '../assets/style.css';
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
  
    <div className="navbar  flex items-center justify-between">
    <div className="logo flex items-center ml-10">
      <img src="/Logo.png" alt="Logo" className="w-16 h-15" />
    </div>

    <div className="menu flex-grow text-center ">
      <a href="/" className="font-Poppins font-reguler ">Home</a>
      <a href="/About" className="font-Poppins font-reguler ">About Us</a>
      <a href="/Services" className="font-Poppins font-reguler  ">Service</a>
      <a href="/Contact" className="font-Poppins font-reguler ">Contact us</a>
      
    </div>
    <Link to="/Auth/login">
      <button className="button py-2 px-4 mr-10 font-semibold">Account</button>
      </Link>
   
  

   
  </div>
 

  );
};

export default Navbar;
