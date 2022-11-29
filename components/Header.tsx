import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex justify-between max-w-6xl mx-auto xl:items-center z-20 items-start'>
        <motion.div
            initial={{
                x:-500,
                opacity:0,
                scale:0.5,
            }}

            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
        >
            <SocialIcon
                url='https://github.com/Nigro69'
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon
                url='https://instagram.com/'
                fgColor='gray'
                bgColor='transparent'
            />
            <SocialIcon
                url='https://linkedin.com/'
                fgColor='gray'
                bgColor='transparent'
            />
        </motion.div>
        
        <Link href='#contact' >
        <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0.5,
            }}

            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
            className='flex flex-row items-center text-gray-400 cursor-pointer'>
            <AiOutlineMail className='h-12 w-12 p-3' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
        </motion.div>
        </Link>
        
        
    </header>
  )
}