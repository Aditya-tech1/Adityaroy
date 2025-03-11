import { BookIcon, CalendarIcon, LocationPinIcon, PercentageIcon } from '@/icons/icon'
import React from 'react'

export default function Education() {
    return (
        <div className='w-full min-h-screen  relative'>

            <h1 className='bg-[#d9d9d9] text-[#1c2231] text-6xl p-6 text-center font-extralight '>Who I Studied?</h1>
            <div className='mt-18 flex flex-row m-auto w-full px-32 justify-center gap-8'>

                <div className='w-80 h-124 bg-[#d9d9d9] p-4 text-[#1c2231] rounded-xl flex flex-col justify-evenly'>
                    <img src="/gtb4cec.jpeg" alt="" className='aspect-[4/3] object-cover w-full rounded-xl' />
                    <h1 className='font-bold'>Guru Tegh Bahadur 4th Centenary Engineering College</h1>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        <LocationPinIcon className='w-6 h-6' />
                        {/* <img src="/vercel.svg" alt="" width={25}  /> */}
                        <p className='ml-2'>G-8 Area Rajouri Garden, New Delhi-110064</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <BookIcon className='w-6 h-6' />
                        <p className='ml-2'><strong>B.Tech.</strong><br />Computer Science and Engineering</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <CalendarIcon className='w-6 h-6' />
                        <p className='ml-2'>2023-2026</p>
                    </div>
                    <div className='flex mt-3 flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <PercentageIcon className='w-5 h-5' />
                        <p className='ml-2 '>81.1 CGPA</p>
                    </div>
                </div>
                <div className='w-80 h-124 bg-[#d9d9d9] p-4 text-[#1c2231] rounded-xl flex flex-col justify-evenly'>
                    <img src="/rit.jpg" alt="" className='aspect-[4/3] object-cover w-full rounded-xl' />
                    <h1 className='font-bold'>DSEU Rajokri Campus</h1>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        <LocationPinIcon className='w-6 h-6' />
                        {/* <img src="/vercel.svg" alt="" width={25}  /> */}
                        <p className='ml-2'>Golden Gate, Rajokri, New Delhi- 110038</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <BookIcon className='w-6 h-6' />
                        <p className='ml-2'><strong>Diploma</strong><br />Information Technology </p>
                    </div>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <CalendarIcon className='w-6 h-6' />
                        <p className='ml-2'>2020-2023</p>
                    </div>
                    <div className='flex mt-3 flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <PercentageIcon className='w-5 h-5' />
                        <p className='ml-2 '>81.1 CGPA</p>
                    </div>
                </div>
                <div className='w-80 h-124 bg-[#d9d9d9] p-4 text-[#1c2231] rounded-xl flex flex-col justify-evenly'>
                    <img src="/school.jpg" alt="" className='aspect-[4/3] object-cover w-full rounded-xl' />
                    <h1 className='font-bold'>Govt. Co-Ed Senior Secondary School</h1>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        <LocationPinIcon className='w-6 h-6' />
                        {/* <img src="/vercel.svg" alt="" width={25}  /> */}
                        <p className='ml-2'>Dwarka Sector-22, Delhi-110075</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <BookIcon className='w-6 h-6' />
                        <p className='ml-2'>Class 10th</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <CalendarIcon className='w-6 h-6' />
                        <p className='ml-2'>2019-2020</p>
                    </div>
                    <div className='flex mt-3 flex-row gap-2 items-center justify-start text-sm'>
                        {/* <img src="/vercel.svg" alt="" width={25} /> */}
                        <PercentageIcon className='w-5 h-5' />
                        <p className='ml-2 '>68.8%</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
