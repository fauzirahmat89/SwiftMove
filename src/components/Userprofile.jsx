import React from 'react'

const Userprofile = () => {
  return (
    <div className='flex justify-center items-center m-20 gap-2'>
        <div className='sidebar-profile flex flex-col justify-center rounded-md w-64 bg-white items-start gap-2 p-3 h-60'>
          <button className='btn-profile bg-transparent text-lg font-medium'>My Profile</button>
          <button className='btn-profile bg-transparent text-lg'>Password</button>
          <button className='btn-profile bg-transparent text-lg'>Logout</button>
          <hr />
        </div>
          <div className='content-profile flex flex-col justify-center rounded-md w-1/3 bg-white items-start gap-2 p-3 h-60'>
          <div className='flex justify-between w-full items-center font-Poppins text-xs'>
            <div className='flex gap-2 items-center'>
              <img className='w-8' src="./images/profile2.png" alt="" />
              <div>
                  <div>Jack Thompson</div>
                  <div>+62xxxxxxxxxxx</div>
              </div>
            </div>
              <button className='font-Poppins p-2 h-auto rounded-md text-white text-xs' >Edit Profile</button>
          </div>
          <div className='w-full flex justify-between'>
            <div>Full Name</div>
            <div>Jack Thompson</div>
          </div>
          <div className='w-full flex justify-between'>
            <div>Contact</div>
            <div>+62xxxxxxxxxxx</div>
          </div>
          <div className='w-full flex justify-between'>
            <div>Email</div>
            <div>thompson@gmail.com</div>
          </div>
          <div className='w-full flex justify-between'>
            <div>user name</div>
            <div>mrthmpson</div>
          </div>
          <div className='w-full flex justify-between'>
            <div>Password</div>
            <div>*********</div>
          </div>
        </div>
      </div>
  )
}

export default Userprofile