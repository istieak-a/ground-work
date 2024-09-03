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
    <div className="section1-wrapper text-white py-8 flex flex-col gap-8">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[24px] md:text-[45px] font-semibold">boutique creative agency</h1>
        <p className="md:text-[15px] text-[12px]">based in Dubai, UAE</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 md:px-20 gap-10">
        <div className="bg-[#dbd9d9] bg-opacity-20 rounded-lg flex flex-col items-center justify-center px-10 gap-10 text-center">
          <h1 className="text-[25px] font-medium">who we are</h1>
          <p className="text-[15px]">
            we are a ROI driven, creative media agency with a focus on CGI,
            content creation, motion graphics, branding, website development,
            ads management and Google SEO optimization.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
        <video src={vid1} autoPlay loop muted className="w-full h-[450px] rounded-lg"></video>
        </div>
        <div className="bg-[#dbd9d9] bg-opacity-20 rounded-lg flex flex-col items-center justify-center px-10 gap-10 ">
          <h1 className="text-[25px] font-medium">what we do</h1>
          <ul className="text-[15px] li-icon flex flex-col gap-2">
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
    </div>
  );
};

export default Section1;
