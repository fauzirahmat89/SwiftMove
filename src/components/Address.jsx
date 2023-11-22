import React from 'react'

const Address = () => {
  return (
    <div className='w-1/3 flex flex-col gap-2'>
        <div className='flex justify-between items-center font-Poppins'>
            <div>
                <div>Jack Thompson</div>
                <div>+62xxxxxxxxxxx</div>
            </div>
            <div className='items-center'> Date : 12/12/2023</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='pick-container rounded-md p-3'>
              <div className='text-center text-white m-2 font-medium'>Pick Up</div>
              <div className='pick-box flex justify-between items-center px-5 py-2 bg-white rounded-md gap-10'>
                  <div className='text-justify text-white text-sm'>123 Beautiful Rose Street, Happy Prosperity Village Peaceful Harmony, District Joyful City, 12345 United States</div>
                  <img src="images/pinmaps2.png" alt="" />
              </div>
          </div>
          <div className='drop-container rounded-md p-3'>
              <div className='text-center text-white m-2 font-medium'>Drop Of</div>
              <div className='drop-box flex justify-between items-center px-5 py-2 bg-white rounded-md gap-10'>
                  <div className='text-justify text-white text-sm'>42 Serene Meadow Lane, Tranquil Heights Suburb Serenity Valley, District Harmony City, 54321 United States</div>
                  <img src="images/pinmaps2.png" alt="" />
              </div>
          </div>
        </div>
        <button className='w-full h-16 mt-2 rounded-md text-white text-lg' >Confirm</button>
    </div>
  )
}

export default Address