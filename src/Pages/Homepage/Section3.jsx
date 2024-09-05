import React from "react";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
} from "../../assets/logos/logos";

const Section3 = () => {
  return (
    <div className="bg-black py-6 text-white">
      <div className="px-8 md:px-20">
        <p className="line-before text-[13px]">our clients</p>
        <h1 className="text-[36px] font-semibold">
          trusted by <span className="text-primary">the best</span>
        </h1>
      </div>
      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
      <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
        <img className="mx-4 inline h-16" src={logo1} alt="logo" />
        <img className="mx-4 inline h-16" src={logo2} alt="logo" />
        <img className="mx-4 inline h-16" src={logo3} alt="logo" />
        <img className="mx-4 inline h-16" src={logo4} alt="logo" />
        <img className="mx-4 inline h-16" src={logo5} alt="logo" />
        <img className="mx-4 inline h-16" src={logo6} alt="logo" />
        <img className="mx-4 inline h-16" src={logo7} alt="logo" />
        <img className="mx-4 inline h-16" src={logo8} alt="logo" />
        <img className="mx-4 inline h-16" src={logo9} alt="logo" />
        <img className="mx-4 inline h-16" src={logo10} alt="logo" />
        <img className="mx-4 inline h-16" src={logo11} alt="logo" />
        <img className="mx-4 inline h-16" src={logo12} alt="logo" />
        <img className="mx-4 inline h-16" src={logo13} alt="logo" />
        <img className="mx-4 inline h-16" src={logo14} alt="logo" />
        <img className="mx-4 inline h-16" src={logo15} alt="logo" />
      </div>
      </div>
    </div>
  );
};

export default Section3;
