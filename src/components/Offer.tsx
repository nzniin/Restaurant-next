import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

function Offer() {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
        {/* TEXT CONTAINER */}
        <div className='flex-1 flex-col flex justify-center items-center text-centergap-8 p-6'>
            <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
            <p className='text-white xl:text-xl p-4'>Progressively simply effective e-toilers and process-centric methods of empowerment. Quikly pontificate parallel.</p>
            <CountDown />
            <button className='bg-red-500 text-white rounded-md py-3 px-6 mt-3'>Order Now</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='relative flex-1 w-full md:h-full'>
            <Image src='/offerProduct.png' alt='' fill className='object-contain' />
        </div>
    </div>
  )
}

export default Offer