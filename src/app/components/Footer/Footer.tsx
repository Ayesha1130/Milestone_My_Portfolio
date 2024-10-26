import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypewriterClass } from 'typewriter-effect';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 bg-background p-5 '>
      <h1 className='text-xl animate-bounce '>
    
        Follow Me</h1>
      <div className="flex flex-row gap-5 justify-center items-center mt-4">
          <Link
            href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
            target="-blank"
          >
            <FaLinkedin className="size-10 hover:text-[#1b1b68]  transition-transform transform hover:scale-105 " />
          </Link>
          <Link href="https://github.com/Ayesha1130" target="-blank">
            <FaGithub className="size-10 hover:text-[#1b1b68]  transition-transform transform hover:scale-105 " />
          </Link>
        </div>
        <p className='mt-4'>My Portfolio</p>
        <p className="text-sm text-gray-600">�� 2024  All rights reserved.</p>

      
    </div>
  )
}

export default Footer
