import React from 'react'

const Userprofile = () => {
  return (
    <div className='contain flex mx-auto my-10 p-5 justify-center items-center rounded-md'>
      <div className='w-2/4 h-full'>
        <div className='flex flex-col justify-center bg-white items-start gap-2'>
          <button className='btn-profile bg-transparent text-lg font-medium'>My Profile</button>
          <button className='btn-profile bg-transparent text-lg'>Password</button>
          <button className='btn-profile bg-transparent text-lg'>Logout</button>
        </div>
      </div>
      <div className='card-profile p-5 rounded-md flex flex-col justify-between w-full items-center font-Poppins text-base gap-3'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img className='w-14' src="./images/profile2.png" alt="" />
            <div>
              <div>Jack Thompson</div>
              <div>+62xxxxxxxxxxx</div>
            </div>
          </div>
          <button className='font-Poppins p-2 h-auto rounded-md text-white text-xs' >Edit Profile</button>
        </div>
        <div className='w-full flex justify-between'>
          <div className='font-medium'>Full Name</div>
          <div>Jack Thompson</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='font-medium'>Contact</div>
          <div>+62xxxxxxxxxxx</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='font-medium'>Email</div>
          <div>thompson@gmail.com</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='font-medium'>user name</div>
          <div>mrthmpson</div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='font-medium'>Password</div>
          <div>*********</div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile