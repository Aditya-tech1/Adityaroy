import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='text-base m-auto w-2/7 text-center p-4 flex flex-row justify-between bg-transparent text-[#1c2231] '>
      <Link className='p-2 ' href="/#about">About</Link>
      <Link className='p-2 ' href="/#about">Education</Link>
      <Link className='p-2 ' href="/#about">Projects</Link>
      <Link className='p-2 ' href="/#about">Contact</Link>
    </nav>
  )
}
