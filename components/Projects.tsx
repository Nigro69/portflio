import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Project4 from './projects/Project4'


type Props = {}

export default function Projects({}: Props) { 
   
  const projects=[1,2,3,4,5]
  
   
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
    
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-screen px-10 justify-center min-h-screen xl:space-y-0 mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        projects
      </h3>
      <div className='relative w-full scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 flex overflow-x-scroll overflow-y-hidden snap-x  snap-mandatory z-20'>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <Project1/>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <Project2/>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <Project3/>
        </div>
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <Project4/>
        </div>
      
      
      
      
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>

    </motion.div>
  )
}