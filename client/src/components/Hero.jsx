import React from 'react'

export default function Hero() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-row justify-evenly items-center w-full'>
        <h1 className='text-5xl text-[#1c2231]'>Hii</h1>
        <img src="/iam.jpg" alt="" className='w-72 aspect-square rounded-full object-cover double-border '/>
        
        <h1 className='text-5xl text-[#d9d9d9]'>I am</h1>
      </div>
      <div className='text-[10rem] mix-blend-difference font-sans font-extrabold text-[#d9d9d9] tracking-wider specialtext'>ADITYA ROY</div>
    </div>
  )
}
