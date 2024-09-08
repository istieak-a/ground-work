import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../assets/branding_covered_logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLinkClick = () => {
    setIsMobileNavOpen(false); // Close the mobile nav after a link is clicked
  };

  return (
    <div className="flex items-center justify-between bg-black px-5 py-6 md:flex-col md:gap-5">
      <h1 className="md:hidden"></h1>
      <Link to={"/"}>
        <img className="w-[110px]" src={logo} alt="logo" />
      </Link>
      <div className="hidden gap-8 font-sans text-[16px] text-white md:flex">
        <Link
          to={"/website-projects"}
          className="duration-300 hover:text-[#78b6b2]"
        >
          websites
        </Link>
        <Link to={"/cgi"} className="duration-300 hover:text-[#78b6b2]">
          CGI/VFX
        </Link>
        <Link
          to={"/social-media"}
          className="duration-300 hover:text-[#78b6b2]"
        >
          social media
        </Link>
      </div>

      <button
        className="text-2xl text-white md:hidden"
        onClick={toggleMobileNav}
      >
        <RxHamburgerMenu />
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
        <button
          className="close-btn text-2xl text-white"
          onClick={toggleMobileNav}
        >
          <RxCross1 />
        </button>
        <div className="flex flex-col gap-10">
          <h1 className="line-before text-[24px] font-semibold text-white">
            our recent <span className="text-primary">works</span>
          </h1>
          <div className="flex flex-col gap-3 text-[15px] text-white">
            <Link
              to={"/website-projects"}
              onClick={handleLinkClick}
              className="duration-300 hover:text-[#78b6b2]"
            >
              websites
            </Link>
            <Link
              to={"/cgi"}
              onClick={handleLinkClick}
              className="duration-300 hover:text-[#78b6b2]"
            >
              CGI/VFX
            </Link>
            <Link
              to={"/social-media"}
              onClick={handleLinkClick}
              className="duration-300 hover:text-[#78b6b2]"
            >
              social media
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
