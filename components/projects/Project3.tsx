import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import p1 from '../images/projects/p3.png'

type Props = {}

export default function Project3({}: Props) { 
   
  
   
  return (
    
      <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
        <motion.div
            initial={{
                y:-300,
                opacity:0
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:1
            }}
            viewport={{once:true}}
            
            style={{height:300 , width:420}}
            className='mt-24'
        >
            <Image src={p1} alt=''/>
        </motion.div>
           
            
            <div>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Project No: 3
                </span>{" "}
                The DOJO App
              </h4>
              
              <div className='mt-5 text-center space-x-3 '>
                <Link href='https://github.com/Nigro69/the-dojo.git'>
                <button className='heroButton  border-white text-white'>github link</button>
                </Link>
                <Link href='https://the-dojo-3010.web.app/'>
                <button className='heroButton  border-white text-white'>live link</button>
                </Link>
              </div>
            </div>
          </div>
        

  )
}