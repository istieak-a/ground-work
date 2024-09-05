import React from 'react'; 
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='bg-black flex md:flex-col md:gap-5 items-center justify-between py-6 px-5'>
        <h1 className='md:hidden'></h1>
        <Link to={'/'}><img className='w-[110px]' src={logo} alt="logo" /></Link>
        <div className='text-white gap-8 text-[16px] font-sans hidden md:flex'>
          <Link to={'/website-projects'} className='hover:text-[#78b6b2] duration-300'>websites</Link>
          <Link to={'/cgi'} className='hover:text-[#78b6b2] duration-300'>CGI/VFX</Link>
          <Link to={'/social-media'} className='hover:text-[#78b6b2] duration-300'>social media</Link>
        </div>
        <button className='text-white text-2xl md:hidden'><RxHamburgerMenu /></button>
    </div>
  )
}

export default Header