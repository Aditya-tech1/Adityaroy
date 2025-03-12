import { LocationPinIcon, MailHollowIcon, PhoneIcon } from '@/icons/icon'
import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='w-full min-h-screen relative  sm:py-0 py-6'>
      <span id="wtblock" className="absolute hidden sm:flex bottom-0 sm:w-full w-[25rem] h-screen bg-[#d9d9d9] -skew-x-45 left-1/2 -z-10"></span>

      <h1 id='contact' className='bg-[#d9d9d9] text-[#1c2231] sm:text-6xl text-4xl p-6 text-center font-extralight '>Want To Reach Me?</h1>
      <div className='flex sm:flex-row flex-col items-center justify-evenly sm:mt-20 mt-10 px-10'>

        <div className='h-96 flex flex-col gap-8'>
          <div className='flex flex-row items-center justify-start gap-4'>
            <LocationPinIcon className='w-6 h-6 text-[#d9d9d9]' />
            <p className='w-9/10'>MBR Enclave Pochanpur, Dwarka sector-23, South west delhi-110077</p>
          </div>
          <div className='flex flex-row items-center justify-start gap-4'>
            <PhoneIcon className='w-6 h-6 text-[#d9d9d9]' />
            <p className='w-9/10'>+91 8742968564</p>
          </div>
          <div className='flex flex-row items-center justify-start gap-4'>
            <MailHollowIcon className='w-6 h-6 text-[#d9d9d9]' />
            <p className='w-9/10'>adityatech1m@gmail.com</p>
          </div>

          <div className='flex flex-col items-center text-center sm:w-fit w-full  p-4 text-[#d9d9d9] rounded-xl  justify-start '>
            
            <p>Scan to know</p>
            <Image src="/qrcode.png" alt="qrcode" width={50} height={50} className="w-36 aspect-square rounded"/>
            <p>My social profiles</p>
          </div>
        </div>
        <div className=' flex flex-col rounded-xl gap-8 bg-[#1c2231aa] sm:w-96 w-auto aspect-square mt-10 sm:mt-0'>
          <iframe className='w-full h-full rounded-xl drop-shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12830.461508979537!2d77.04313369793114!3d28.563926907293585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1affa5d4444b%3A0x3676c4af08d810cf!2sSector%2023%2C%20Dwarka%2C%20Delhi!5e1!3m2!1sen!2sin!4v1741678544610!5m2!1sen!2sin"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>

      </div>

    </div>
  )
}
