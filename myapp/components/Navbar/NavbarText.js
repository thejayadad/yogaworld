'use client'

import React from 'react'
import { motion } from 'framer-motion';
import ShopBtn from './ShopBtn';


const NavbarText = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className='text-white text-center flex flex-col items-center'
  >
    <h1 className='text-8xl text-pink-500'>Welcome To </h1>
    <p className='text-5xl text-yellow-400'>Sweets Dreams Delight</p>
    <ShopBtn />
  </motion.section>
  )
}

export default NavbarText