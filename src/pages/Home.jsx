import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
      <Navbar />
      <img src="images/banner.png" alt="banner" />
      <div className="header text-center font-Poppins font-medium text-3xl my-12">Top Partners</div>
      <div className='partner container mx-auto flex justify-center'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className="header text-center font-Poppins font-medium text-3xl my-12">Additional Service</div>
      <div className="content container mx-auto flex justify-center gap-10">
        <div className="text flex flex-col columns-lg gap-5 my-auto">
          <div className="text-header font-Poppins text-2xl">Extra protection of your goods <br /> with wooden packaging.</div>
          <div className="text-body font-Poppins text-base text-justify w-96">We recruit professionals to improve the efficiency of your time and energy when moving house, no need to worry because we will deliver your goods to a new place safely.</div>
        </div>
        <img className="w-96 items-center" src="images/wooden.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home