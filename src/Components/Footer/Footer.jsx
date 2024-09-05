import React from 'react'; 
import { MdEmail } from "react-icons/md"; 
import { IoCall } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className='px-5 py-8 md:py-16 flex flex-col md:flex-row md:justify-between md:px-16 gap-10 bg-black'>
        <div className='flex flex-col gap-2 items-start'>
            <p className='text-[16px] text-primary'>let's talk</p>
            <h1 className='text-[50px] md:text-[75px] font-semibold text-white'><span className='text-transparent stroke-white stroke-2'>about your</span> next project <span className='text-transparent stroke-white stroke-2'>.</span></h1>
            <button className='border text-[13px] text-white px-14 py-5 mt-5 hover:bg-white hover:text-black'>get in touch</button>
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[30px] font-semibold text-white'>contact <span className='text-primary'>us</span></h1>
            <div className='footer-links text-white flex flex-col gap-3'>
                <a href="mailto:info@groundwork.com"><span><MdEmail /></span> info@groundwork.com</a>
                <a href="tel:+00000000"><span><IoCall /></span> +1000000000</a>
                <a href="tel:+00000000"><span><IoCall /></span> +1000000000</a>
                <p><span><FaLocationArrow /></span> 613 The metropolis Tower Business Bay, Dublin</p>
            </div>
        </div>
    </div>
  )
}

export default Footer