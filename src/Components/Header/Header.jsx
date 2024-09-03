import React from 'react'; 
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";


const Header = () => {
  return (
    <div className='bg-black flex md:flex-col md:gap-5 items-center justify-between py-6 px-5'>
        <h1 className='md:hidden'></h1>
        <img className='w-[110px]' src={logo} alt="logo" />
        <div className='text-white gap-8 text-[16px] font-sans hidden md:flex'>
          <a href="#" className='hover:text-[#78b6b2] duration-300'>websites</a>
          <a href="#" className='hover:text-[#78b6b2] duration-300'>CGI/VFX</a>
          <a href="#" className='hover:text-[#78b6b2] duration-300'>social media</a>
        </div>
        <button className='text-white text-2xl md:hidden'><RxHamburgerMenu /></button>
    </div>
  )
}

export default Header