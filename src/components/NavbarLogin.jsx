import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='container mx-auto'>
        <div className='flex justify-around'>
          <div> 
            <img className='logo w-16' src="images/logo.png" alt="" />
          </div>
          <div className='navbar-nav flex items-center font-Poppins'>
            <a className='mx-4 text-lg' href='/home'>Home</a>
            <a className='mx-4 text-lg' href='/service'>Service</a>
            <a className='mx-4 text-lg' href='/status'>Status</a>
          </div>
          <div className='flex items-center'>
            <button className='font-Poppins px-3 h-8 rounded-md text-white' ><a href="/profile">profile</a></button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Navbar