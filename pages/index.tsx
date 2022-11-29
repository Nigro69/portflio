import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Image from 'next/image'
import dp from '../components/images/dp.png'

export default function Home() {

  const router = useRouter();

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0' >

      <Head>
        <title>
          Yash&apos;s Portfolio 
        </title>
      </Head>

      <Header/>

      <section id='hero' className='snap-start'>
          <Hero/>
      </section>

      <section id='about' className='snap-center'>
          <About/>
      </section>

      <section id='skills' className='snap-start'>
          <Skills/>
      </section>

      <section id='projects' className='snap-start' >
        <Projects/>
      </section>

      <section id='contact' className='snap-center'>
        <ContactMe/>
      </section>
      
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>

            <Image 
              className='h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer'
              src={dp}
              alt=''/>
          
          </div>
        </footer>
      </Link>
    </div>
  )
}
