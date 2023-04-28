import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';


const Footer = () => {
  return (
    <div className='h-auto w-full md:hidden lg:hidden bg-[#330a11] border-t border-opacity-40 border-pink-900 '>
        <div className='py-8 px-4  text-gray-500'>
            <p className='text-2xl font-bold inline'>Social</p>
            <div className='flex w-[100px] py-6 justify-between px-0'>
                <a href="https://www.linkedin.com/in/anju-shrestha-37a1a5244"><FaGithub size={20}/></a>
                <a href="https://github.com/qaalikh"><FaLinkedin size={20}/></a> 
                <a href="https://mail.google.com/mail/anjushresth1111"><HiOutlineMail size={20}/></a>
            </div>
            <p className='text-xl font-bold inline '>Anju Shrestha</p>
            <p className='text-sm pb-2'>Frontend focused Web Developer.</p>
            <div className='border-b border-opacity-20 border-pink-900'/>
        </div>
        <p className='text-[12px] pb-1 text-center text-gray-600'>&#169; Copyright 2023. Made by <span className='text-gray-400'>Anju Shrestha</span></p>
      
    </div>
  )
}

export default Footer
