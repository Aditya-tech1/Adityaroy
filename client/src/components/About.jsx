import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div className='w-full min-h-screen bg-[#1c2231] '>
      <h1 className='bg-[#d9d9d9] text-[#1c2231] text-6xl p-6 text-center font-extralight '>Who I am?</h1>
      <div className='flex flex-row p-4 px-32 items-start justify-center gap-10  mt-18'>
        <div className='w-1/2 flex items-center justify-center '>
          <img src="/iam.jpg" alt="" className='w-1/2 rounded-xl aspect-[4/5] object-cover drop-shadow-xl ' />
        </div>
        <div className='w-1/2'>
          <p className='w-full text-justify text-base mb-8'>
            My name is Aditya Roy, and I am currently pursuing a BTech in Computer Science Engineering at Guru Tegh Bahadur 4th Centenary Engineering College. I have successfully completed a Diploma in ITESM from DSEU Rajokri Campus. <br /><br />

            Throughout my academic journey, I have been deeply passionate about web development and have worked diligently to enhance my skills in this field. I have undertaken several projects, gaining hands-on experience with technologies like MERN and Next.js. These experiences have strengthened my technical expertise and reinforced my ambition to contribute meaningfully to the development field by creating innovative websites and software solutions.<br /><br />

            In my free time, I enjoy playing badminton and watching movies, which help me stay active and relaxed.
          </p>
          <Link href="/" className='px-6 py-4 bg-[#d9d9d9] text-[#1c2231] rounded '>Download CV</Link>
        </div>
      </div>
    </div>
  )
}
