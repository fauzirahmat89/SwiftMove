// src/pages/Home.jsx
import React from 'react';
import '../assets/style.css';
import Advantages from '../pages/OurAdvantagesSection';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
<div className="container">
    <div className="hero-section font-Poppins">
    <div className="hero-content">
      <h1><b>Easy</b>Steps,<b>Moving</b>Everything</h1>
      <button className="cta-button m-5">Customer</button>
      <button className="cta-button m-5">Patner</button>
    </div>
  </div>
  <Advantages/>
  <div className="join flex ml-10">
      <img
        className="flex justify-center"
        src="/image/move.png"
        alt="Placeholder"
      />
      <div className=" text flex flex-col m-8 ">
        <h1 className="text-xl font-semibold mb-3 font-blue">Requirements</h1>
        <p className="text-gray-500 ml-4">
           <li>Nationality indonesia</li>
           <li>18-50 years old</li>
        </p>
        <h1 className="text-xl font-semibold mb-3 font-blue">Document Requirements</h1>
        <p className="text-gray-500 ml-4">
           <li>Scan of original </li>
           <li>General Driver's license A/B1/B2</li>
           <li>Vehile Documents</li>
           <li>Bang Account</li>
        </p>
        <h1 className="text-xl font-semibold mb-3 font-blue">Vehicle requirements</h1>
        <p className="text-gray-500 ml-4">
           <li>Pick Up Bak,Pick Up Box,Blind van,Engkel Bak,Engkel Box</li>
           <li>Maximum vehicle age 10 years</li>
        </p>
      </div>
    </div>
  </div>
<Footer/>
  </div>
  
  
  );
};

export default Home;
