import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import css from '../images/skills/css-icon.png'

type Props = {
    directionLeft?:boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            x: directionLeft? -200:200,
            opacity:0,
        }}
        transition={{
            duration:1,
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{
            once:true
        }}
        className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-23 md:h-23 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out'
        >
            <Image className='rounded-full w-20 h-20 md:w-23 md:h-23 xl:w-26 xl:h-26' src={css} alt=''/>
        </motion.div>
        {/* <motion.img
        initial={{
            x: directionLeft? -200:200,
            opacity:0,
        }}
        transition={{
            duration:1,
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{
            once:true
        }}

        src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
        className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-23 md:h-23 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out'

    /> */}

    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 w-20 h-20 md:w-23 md:h-23 xl:w-26 xl:h-26'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>90%</p>
        </div>
    </div>
        
    
    </div>
    
    
  )
}