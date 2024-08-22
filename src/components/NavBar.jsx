import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/Logo1.png'
import cartimg from '../images/cart.png'
import navmenu from '../images/navmenu.png'
import { useContext } from 'react'
import { globalData } from '../App'
import cross from '../images/cross.png'

export default function NavBar() {
  const { cart } = useContext(globalData)
  const [visible, setvisible] = useState(false)

  const toggle = () => {
    setvisible(!visible)
  }

  return (
    <nav className="bg-[#1b212c] nav">
      <div className={`px-5 ${visible ? 'h-screen' : 'h-auto'}`}>
        <ul className='flex items-center justify-between px-4 py-4'>
          <li className='sm:hidden block'>
            <img onClick={toggle} src={navmenu} alt="menu" className="w-8 h-auto px-2" />
          </li>
          <li className={`logo ${visible ? 'hidden' : 'block'}`}>
            <img src={logo} alt="LOGO" className="w-24 h-auto" />
          </li>
          <li className='sm:block hidden'>
            <ul className='flex text-white'>
              <li className='px-4 font-bold font-poppins hover:text-[#FB4B29] cursor-pointer'>
                <NavLink to='/Men'>Men</NavLink>
              </li>
              <li className='px-4 font-bold font-poppins hover:text-[#FB4B29] cursor-pointer'>
                <NavLink to='/Women'>Women</NavLink>
              </li>
              <li className='px-4 font-bold font-poppins hover:text-[#FB4B29] cursor-pointer'>
                <NavLink to='/Kids'>Kids</NavLink>
              </li>
              <li className='px-4 font-bold font-poppins hover:text-[#FB4B29] cursor-pointer'>
                <NavLink to='/Collection'>Collection</NavLink>
              </li>
            </ul>
          </li>
          <li className={`sm:pr-20 cart flex relative ${visible ? 'hidden' : 'block'}`}>
            <div className='text-[#FB4B29] rounded-xl absolute top-[-14px] bg-white sm:right-[85px] font-poppins font-semibold px-[5px] right-[0px]'>
              {cart.length > 0 ? cart.length : ''}
            </div>
            <Link to={'/Cart'}>
              <img src={cartimg} alt="cart" className="w-8 box-content h-auto px-2" />
            </Link>
          </li>
        </ul>
      </div>

      {visible && (
        <div className="fixed inset-0 bg-[#1b212c] z-50 flex flex-col justify-center items-center sm:hidden">
  <ul className='flex-col w-[80%] text-white'>
    <button onClick={toggle} className="absolute top-4 right-4 text-white">
      <img width={32} src={cross} alt="Close" />
    </button>
    <button className='w-full px-6 font-bold font-poppins mx-auto my-3 bg-[#434F65] hover:scale-105 transition-transform py-4 flex justify-center hover:text-[#FB4B29] cursor-pointer rounded-md'>
      <NavLink to='/' onClick={toggle} className="w-full text-center">Home</NavLink>
    </button>
    <button className='w-full px-6 font-bold font-poppins mx-auto my-3 bg-[#434F65] hover:scale-105 transition-transform py-4 flex justify-center hover:text-[#FB4B29] cursor-pointer rounded-md'>
      <NavLink to='/Men' onClick={toggle} className="w-full text-center">Men</NavLink>
    </button>
    <button className='w-full px-6 font-bold font-poppins mx-auto my-3 bg-[#434F65] hover:scale-105 transition-transform py-4 flex justify-center hover:text-[#FB4B29] cursor-pointer rounded-md'>
      <NavLink to='/Women' onClick={toggle} className="w-full text-center">Women</NavLink>
    </button>
    <button className='w-full px-6 font-bold font-poppins mx-auto my-3 bg-[#434F65] hover:scale-105 transition-transform py-4 flex justify-center hover:text-[#FB4B29] cursor-pointer rounded-md'>
      <NavLink to='/Kids' onClick={toggle} className="w-full text-center">Kids</NavLink>
    </button>
    <button className='w-full px-6 font-bold font-poppins mx-auto my-3 bg-[#434F65] hover:scale-105 transition-transform py-4 flex justify-center hover:text-[#FB4B29] cursor-pointer rounded-md'>
      <NavLink to='/Collection' onClick={toggle} className="w-full text-center">Collection</NavLink>
    </button>
  </ul>
</div>
      )}
    </nav>
  )
}















