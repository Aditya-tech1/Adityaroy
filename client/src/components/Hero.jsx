import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center sm:pt-32 pt-10 gap-8'>
      <span id="wtblock" className="absolute top-0 sm:w-full w-[40rem] h-screen bg-[#d9d9d9] sm:-skew-x-45 -skew-x-25 right-1/2 -z-10"></span>

      <div className='flex sm:flex-row flex-col justify-evenly items-center sm:h-1/2 h-full   w-full'>
        <h1 className='text-5xl text-[#1c2231]'>Hii<span className='sm:hidden inline'>, I am</span> </h1>
        <div className='w-auto h-auto bg-[#d9d9d9] rounded-full p-2'>
          <img src="/iam.jpg" alt="" className='sm:w-72 w-54 aspect-square rounded-full object-cover double-border' />
        </div>

        <h1 className='text-5xl  text-[#d9d9d9] hidden sm:flex'>I am</h1>
      </div>
      <div className='sm:text-[10rem]  pb-10 text-7xl text-center text-wrap mix-blend-difference font-sans font-extrabold text-[#d9d9d9] tracking-wider specialtext'>ADITYA ROY</div>
    </div>
  )
}
