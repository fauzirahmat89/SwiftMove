import React from 'react'

const Address = () => {
  return (
    <div className='w-1/3 gap-5 flex flex-col'>
        <div className='flex justify-between items-center font-Poppins'>
            <div>
                <div>Jack Thompson</div>
                <div>+62xxxxxxxxxxx</div>
            </div>
            <div className='font-Poppins items-center'> Date : 12/12/2023</div>
        </div>
        <div className='rounded-md p-2 bg-black'>
            <div className='font-Poppins text-center text-white m-2'>Pick Up</div>
            <div className='flex justify-between items-center font-Poppins px-5 py-1 bg-white rounded-md gap-10'>
                <div className='font-Poppins text-justify'>123 Beautiful Rose Street, Happy Prosperity Village Peaceful Harmony, District Joyful City, 12345 United States</div>
                <img src="images/pinmaps.png" alt="" />
            </div>
        </div>
        <div className='rounded-md p-2 bg-black'>
            <div className='font-Poppins text-center text-white m-2'>Drop Of</div>
            <div className='flex justify-between items-center font-Poppins px-5 py-1 bg-white rounded-md gap-10'>
                <div className='font-Poppins text-justify'>42 Serene Meadow Lane, Tranquil Heights Suburb Serenity Valley, District Harmony City, 54321 United States</div>
                <img src="images/pinmaps.png" alt="" />
            </div>
        </div>
        <button className='font-Poppins w-full h-16 mt-2 rounded-md text-white text-lg' >Confirm</button>
    </div>
  )
}

export default Address