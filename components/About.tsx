import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img from './images/img.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '
    >   
        <div className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl '>
            <h3 >
                About
            </h3>
        </div>

        <motion.div
        initial={{
            x:-200,
            opacity:0,

        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{
            once:true
        }}

        className='xl:h-full xl:w-full xl:mt-24'
        >
            
        <Image src={img} className='mt-20 mb-0 sm:mb-0  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 xl:w-[400px] xl:h-[450px]' alt=''/>

        </motion.div>

        
        {/* <motion.img
            initial={{
                x:-200,
                opacity:0,

            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            viewport={{
                once:true
            }}
            src='https://media-exp1.licdn.com/dms/image/D5603AQGvMGb_TXMo3w/profile-displayphoto-shrink_800_800/0/1669416142841?e=1674691200&v=beta&t=1kQuOkPx-lKyo6NqF1YvQyCiQd2X1tbau1rUklHMPk8'
            className='mt-20 mb-0 sm:mb-0  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 xl:w-[400px] xl:h-[450px]'
        /> */}
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl xl:text-4xl font-semibold'> 
                Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50' >little about me</span>{" "}
            </h4>
            <p className='text-sm xl:text-lg'>
                I'm Yash. I am SDE intern at Kreeti Technologies PVT. LTD. And I am a Fullstack Developer who specializes in in frontend development using NextJs (ReactJs) with experience in frontend as well as backend development. Apart from development, I am a competitive programmer and I have a comprehensive understanding of C++ and Javascript and I am skilled in DSA and Core subjects like DBMS, OS and CN.
            </p>
        </div>
    </motion.div>
  )
}