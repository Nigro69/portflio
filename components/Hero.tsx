import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import dp from './images/dp.png'

type Props = {}

export default function Hero({}: Props) {

    const [text, count]=useTypewriter({
        words: [
            "Hi, The Name's Yash Barman",
            "FullStack-Developer.tsx",
            "<CompetitiveProgrammer/>"
        ],
        loop: true,
        delaySpeed: 2000,

    })

  return (
    <div className='h-screen flex  flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

        <BackgroundCircles/>

        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={dp} alt='' />

        {/* <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://media-exp1.licdn.com/dms/image/D5603AQHvoxHwdLYnnQ/profile-displayphoto-shrink_200_200/0/1667737658939?e=1674691200&v=beta&t=bsS-ClxsmhinE0_iwgOmSD5A6Y8gbYcQi9v8kZUjMWs'
            alt=''
        />  */}

        <div >
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-20'>
                Software Enginner
            </h2>
        </div>

        <h1 className='text-3xl lg:text-5xl font-semibold px-10 z-20'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className='z-20'>
            <Link href='#about' >
                <button className='heroButton' >About</button>
            </Link>
            <Link href='#experience' >
                <button className='heroButton' >Experience</button>
            </Link>
            <Link href='#skills' >
                <button className='heroButton' >Skills</button>
            </Link>
            <Link href='#projects' >
                <button className='heroButton' >Project</button>
            </Link>
        </div>

    </div>
  )
}