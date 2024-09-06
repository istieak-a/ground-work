import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-8 md:flex-row md:justify-between md:px-16 md:py-16">
        <div className="flex flex-col items-start gap-2">
          <p className="text-[16px] text-primary">let's talk</p>
          <h1 className="text-[50px] font-semibold text-white md:text-[75px]">
            <span className="stroke-white stroke-2 text-transparent">
              about your
            </span>{" "}
            next project{" "}
            <span className="stroke-white stroke-2 text-transparent">.</span>
          </h1>
          <button className="mt-5 border px-14 py-5 text-[13px] text-white hover:bg-white hover:text-black">
            get in touch
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[30px] font-semibold text-white">
            contact <span className="text-primary">us</span>
          </h1>
          <div className="footer-links flex flex-col gap-3 text-white">
            <a href="mailto:info@groundwork.com">
              <span>
                <MdEmail />
              </span>{" "}
              info@groundwork.com
            </a>
            <a href="tel:+00000000">
              <span>
                <IoCall />
              </span>{" "}
              +1000000000
            </a>
            <a href="tel:+00000000">
              <span>
                <IoCall />
              </span>{" "}
              +1000000000
            </a>
            <p>
              <span>
                <FaLocationArrow />
              </span>{" "}
              613 The metropolis Tower Business Bay, Dublin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
