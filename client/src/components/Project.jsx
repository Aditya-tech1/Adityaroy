import React from 'react'
import ProjectCards from './ProjectCards'

export default function Project() {
    return (
        <div className='w-full min-h-screen  relative'>

            <p loop="" className='-z-10 w-full absolute top-1/2 left-1/2 -translate-1/2 font-extrabold opacity-25 text-[#d9d9d9] text-[18rem]'>PROJECTS</p>
            <h1 className='bg-[#d9d9d9] text-[#1c2231] text-6xl p-6 text-center font-extralight '>What I Made?</h1>

            <ProjectCards />

        </div>
    )
}

