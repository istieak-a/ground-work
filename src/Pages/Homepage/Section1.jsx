import React from "react";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaImages } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import vid1 from "../../assets/video.mp4";

const Section1 = () => {
  return (
    <div className="section1-wrapper flex flex-col gap-8 pt-8 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[24px] font-semibold md:text-[45px]">
          boutique creative agency
        </h1>
        <p className="text-[15px]">based in Dubai, UAE</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 px-10 md:grid-cols-3 md:px-20">
      <div className="overflow-hidden rounded-lg md:w-[30%] md:hidden">
          <video
            src={vid1}
            autoPlay
            loop
            muted
            className="w-full rounded-lg"
          ></video>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg bg-[#dbd9d9] bg-opacity-20 px-10 text-center md:w-[35%] py-12 md:py-0">
          <h1 className="text-[25px] font-medium">who we are</h1>
          <p className="text-[15px]">
            we are a ROI driven, creative media agency with a focus on CGI,
            content creation, motion graphics, branding, website development,
            ads management and Google SEO optimization.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg md:w-[30%] hidden md:block">
          <video
            src={vid1}
            autoPlay
            loop
            muted
            className="w-full rounded-lg"
          ></video>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg bg-[#dbd9d9] bg-opacity-20 px-10 md:w-[35%] py-12 md:py-0">
          <h1 className="text-[25px] font-medium">what we do</h1>
          <ul className="li-icon flex flex-col gap-2 text-[15px]">
            <li>
              <HiMiniWrenchScrewdriver /> branding & content creation
            </li>
            <li>
              <FaImages /> computer generated imagery (CGI)
            </li>
            <li>
              <FaLaptop /> website design & development
            </li>
            <li>
              <FaChartColumn /> performance marketing
            </li>
            <li>
              <FaIdCard /> social media management
            </li>
            <li>
              <FaGoogle /> search engine optimisation
            </li>
          </ul>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,192C672,213,768,267,864,266.7C960,267,1056,213,1152,181.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};

export default Section1;
