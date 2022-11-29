import React from 'react'
import {motion} from 'framer-motion'
import Skill1 from './skills/Skill1'
import Skill2 from './skills/Skill2'
import Skill3 from './skills/Skill3'
import Skill4 from './skills/Skill4'
import Skill5 from './skills/Skill5'
import Skill6 from './skills/Skill6'
import Skill7 from './skills/Skill7'
import Skill8 from './skills/Skill8'
import Skill9 from './skills/Skill9'
import Skill10 from './skills/Skill10'



type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center min-h-screen xl:space-y-0 mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >skills</h3>
        <h1 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>hover over for current proficiency</h1>
        <div className='grid grid-cols-4 gap-4'>
            <Skill1/>
            <Skill2/>
            <Skill3/>
            <Skill4/>
            <Skill5/>
            <Skill6/>
            <Skill7/>
            <Skill8/>
            <Skill9/>
            <Skill10/>
        </div>
    </motion.div>
  )
}