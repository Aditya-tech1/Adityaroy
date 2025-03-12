import React from 'react'
import ProjectCards from './ProjectCards'

export default function Project() {
    return (
        <div className='w-full min-h-screen  relative'>

            <h1 id='projects' className='bg-[#d9d9d9] text-[#1c2231] sm:text-6xl text-4xl p-6 text-center font-extralight '>What I Made?</h1>

            <ProjectCards />

        </div>
    )
}

