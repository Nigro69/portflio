import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

export default function ContactMe({}: Props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
      window.location.href=`mailto:yashbarman3010@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
    };

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-screen px-10 justify-center min-h-screen xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        contact
      </h3> 

      <div className=' flex flex-col space-y-5 '>
        <h4 className='text-2xl font-semibold text-center mt-20'>
            I have got just what you need.{" "}
            <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
        </h4>

        <div className='space-y-5'>
            <div className='flex items-center space-x-5 justify-center'>
                <BsTelephone className='text-[#F7AB0A] h-5 w-5 animate-pulse'/>
                <div className='text-1xl'><span className=' text-[#F7AB0A]/80'>+91</span>6261630049</div>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <AiOutlineMail className='text-[#F7AB0A] h-5 w-5 animate-pulse'/>
                <p className='text-1xl'>yashbarman3010@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <FiMapPin className='text-[#F7AB0A] h-5 w-5 animate-pulse'/>
                <div className='text-1xl'>belgaon naka sausar, dist chhindwara{" "} 
                <span className=' text-[#F7AB0A]/80'>480106</span>
                </div>
            </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
            <button className='bg-[#F7AB0A] py-2 px-6 rounded-md text-black font-bold uppercase'>submit</button>
        </form>

      </div>
    </div>
  )
}