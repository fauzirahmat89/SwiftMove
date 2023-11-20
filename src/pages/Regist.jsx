import React from 'react'

const Regist = () => {
  return (
    <div className='flex justify-center w-screen'>
      <div className="side-img w-1/2 h-screen">
        <img src="images/sideimg.png" alt="" />
      </div>
      <div className="form w-1/2 my-auto">
        <div>
          <div className="form-header text-center font-Poppins text-2xl"><span className='font-medium' >Create</span> your account</div>
          <form className='mx-auto p-0 w-1/2 bg-transparent' action="">
            <input className='form w-full h-16 mt-2 p-2 rounded-md font-Poppins bg-gray-200 text-black' 
            type="Email" id='email' placeholder='Enter Email'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md font-Poppins bg-gray-200 text-black' 
            type="number" id='contact' placeholder='Contact'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md font-Poppins bg-gray-200 text-black' 
            type="username" id='username' placeholder='User name'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md font-Poppins bg-gray-200 text-black' 
            type="Password" id='pass' placeholder='Password'/>
            <input className='form w-full h-16 mt-2 p-2 rounded-md font-Poppins bg-gray-200 text-black' 
            type="Password" id='pass' placeholder='Confirm Password'/>
            <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg' >Book Now</button>
            <div className="center text-center font-Poppins text-lg mt-2">Have an already account? <span className='font-medium' >Sign in</span></div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Regist