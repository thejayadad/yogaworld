'use client'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  return (
    <header
     className='h-screen z-20 stucky top-0 transition-transofmr duration-300 
     border-b border-gray-200'
     style={{
        backgroundImage: `url('/header.png')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
     >  
    <div className='max-w-screen-2xl mx-auto'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}>
            <img 
                src='/sweetslogo.png'
            />
        </Link>
        <div className='flex justify-around bg-white w-full px-4 py-8 rounded-lg'>
        <NavLink href='/menu'>HOME</NavLink>
            <NavLink href='/gallery'>GALLERY</NavLink>
            <NavLink href='/about'>ABOUT</NavLink>
            <NavLink href='/contact'>CONTACT</NavLink>
            <Link href='/cart'>
            <span 
            className='text-3xl flex items-center'>
                <FaShoppingCart className='mr-2' />
           
              </span>
            </Link>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Navbar