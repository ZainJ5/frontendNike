import React from 'react'
import twitter from '../images/twitter.png'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import menu from '../images/menu.png'

export default function Sidebar() {
  const  linkfb = 'https://www.facebook.com/share/nJ5RThqosJZWTuDs/?mibextid=qi2Omg'
  const  linkinsta = 'https://www.instagram.com/nike?igsh=dXZmMnlicWQ3aW8z'
  const  linktwitter =  'https://x.com/Nike?t=USejavrU2OvA7FDs_0iT9Q&s=08'

  return (
    <div className='bg-[#1B212C] h-full sidebar flex flex-col items-center justify-between'>
      <div className="menu cursor-pointer">
        <img src={menu} alt="Menu" />
      </div>
        <div className="headings text-white sm:px-4 font-bold font-poppins">
        <h1 className=' hover:text-[#FB4B29] cursor-pointer '>DELIVERY</h1>
        <h1 className=' hover:text-[#FB4B29] cursor-pointer '>PACKAGING</h1>
        <h1 className=' hover:text-[#FB4B29] cursor-pointer '>FAQ</h1>
        </div>
        <div className="socialicons pb-4">
            <a href={linkfb} target="_blank" rel="noopener noreferrer"><img className='py-2' src={fb} alt="Logo" /></a>
            <a href={linkinsta} target="_blank" rel="noopener noreferrer"><img className='py-2' src={insta} alt="Logo" /></a>
            <a href={linktwitter} target="_blank" rel="noopener noreferrer"><img className='py-2' src={twitter} alt="Logo" /></a>
        </div>
    </div>
  )
}