import React from 'react'; 
import video from '../../assets/company-profile.mp4'; 


const Section2 = () => {
  return (
    <div className='flex flex-col-reverse gap-20 md:flex-row bg-black py-10'>
        <div className='rounded-tr-3xl rounded-br-3xl overflow-hidden md:w-[65%]'>
            <video src={video} autoPlay loop muted></video>
        </div>
        <div className='text-white px-10 justify-center flex flex-col gap-3 md:w-[35%]'>
            <p className='text-[13px] line-before'> a success solution to your digital success</p>
            <h1 className='text-[36px] font-semibold'>our <span className='text-primary'>story</span></h1>
            <p className='text-[15.4px] text-[#C0C0C0]'>groundwork is a complete digital solutions agency that has been in operation since 2019 and is dedicated to helping brands build their online presence and achieve their online goals.</p>
        </div>
    </div>
  )
}

export default Section2