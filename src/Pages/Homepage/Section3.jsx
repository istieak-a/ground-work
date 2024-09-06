import React, { useState, useEffect } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';

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
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
} from "../../assets/logos/logos";

const Section3 = () => {
  const [activeSlideIndex1, setActiveSlideIndex1] = useState(0);
  const [activeSlideIndex2, setActiveSlideIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex1((prevIndex) => (prevIndex + 1) % 16);
      setActiveSlideIndex2((prevIndex) => (prevIndex - 1 + 16) % 16);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
    <div className=" py-6 text-white max-w-7xl mx-auto">
      <div className="px-8 md:px-20">
        <p className="line-before text-[13px]">our clients</p>
        <h1 className="text-[36px] font-semibold">
          trusted by <span className="text-primary">the best</span>
        </h1>
      </div>
      <div className="md:px-16">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex1}
          onRequestChange={setActiveSlideIndex1}
          itemsToShow={3} // Show 3 items on mobile view
          itemsToScroll={1}
          speed={400}
          easing="linear"
          infinite={true}
          forwardBtnProps={{ style: { display: 'none' } }}
          backwardBtnProps={{ style: { display: 'none' } }}
          responsiveProps={[
            {
              itemsToShow: 10,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
        >
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo24, logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32,].map((logo, index) => (
            <div key={index} className="carousel-item">
              <img src={logo} alt={`Logo ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </ReactSimplyCarousel>
      </div>
      <div className="md:px-16 mt-0">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex2}
          onRequestChange={setActiveSlideIndex2}
          itemsToShow={3} // Show 3 items on mobile view
          itemsToScroll={1}
          speed={400}
          easing="linear"
          infinite={true}
          forwardBtnProps={{ style: { display: 'none' } }}
          backwardBtnProps={{ style: { display: 'none' } }}
          responsiveProps={[
            {
              itemsToShow: 10,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
        >
          {[logo17, logo18, logo19, logo20, logo21, logo22, logo24, logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16].map((logo, index) => (
            <div key={index} className="carousel-item">
              <img src={logo} alt={`Logo ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </ReactSimplyCarousel>
      </div>
    </div>
    </div>
  );
};

export default Section3;