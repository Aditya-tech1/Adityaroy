import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='sm:bg-transparent bg-[#1c2231] absolute top-0 left-1/2 -translate-x-1/2 text-base m-auto sm:w-2/7 w-full text-center p-4 flex flex-row justify-between  sm:text-[#1c2231] text-[#d9d9d9] '>
      <Link className='p-2 ' href="/#about">About</Link>
      <Link className='p-2 ' href="/#education">Education</Link>
      <Link className='p-2 ' href="/#projects">Projects</Link>
      <Link className='p-2 ' href="/#contact">Contact</Link>
    </nav>
  )
}
