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
            <a className='mx-4 text-lg' href='/Home'>Home</a>
            <a className='mx-4 text-lg' href='/'>Service</a>
            <a className='mx-4 text-lg' href='/'>About</a>
            <a className='mx-4 text-lg' href='/'>Contact</a>
          </div>
          <div className='flex items-center'>
            <button className='font-Poppins px-3 h-8 rounded-md text-white' >Sign Up</button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Navbar