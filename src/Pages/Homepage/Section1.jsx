import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaImages, FaLaptop, FaGoogle } from "react-icons/fa";
import { FaChartColumn, FaIdCard } from "react-icons/fa6";
import vid1 from "../../assets/hero_video.mp4";
import VanillaTilt from 'vanilla-tilt';

const Section1 = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt-div'), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);
  // Variants for animating title words
  const titleWordVariant = {
    hidden: { opacity: 0, y: 50 }, // Adjusted to make the animation come from just below the h1
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const videoVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.5 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.7 } },
  };

  const titleWords = ["boutique", "creative", "agency"];

  return (
    <div className="section1-wrapper">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 pt-8 2xl:pt-24 text-white">
        <div className="flex flex-col items-center justify-center">
          {/* Animate each word in the title */}
          <div className="flex space-x-2">
            {titleWords.map((word, index) => (
              <motion.h1
                key={index}
                custom={index}
                variants={titleWordVariant}
                initial="hidden"
                animate="visible"
                className="text-[24px] font-semibold md:text-[45px]"
                style={{ display: 'inline-block' }} // Ensures each word appears inline
              >
                {word}
              </motion.h1>
            ))}
          </div>
          {/* Keep the p tag static, unaffected by the title animation */}
          <motion.p
            className="text-[15px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2 } }}
          >
            based in New York
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 px-10 md:grid-cols-3 md:flex-row md:px-20">
          {/* Animate the video */}
          <motion.div
            variants={videoVariant}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-lg tilt-div md:hidden md:w-[30%]"
          >
            <video
              src={vid1}
              autoPlay
              loop
              muted
              className="w-full rounded-lg"
            ></video>
          </motion.div>

          {/* Animate "Who we are" from the left */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center gap-10 rounded-lg tilt-div bg-[#dbd9d9] bg-opacity-20 px-10 py-12 text-center md:w-[35%] md:py-0"
          >
            <h1 className="text-[25px] font-medium">who we are</h1>
            <p className="text-[15px]">
              we are a ROI driven, creative media agency with a focus on CGI,
              content creation, motion graphics, branding, website development,
              ads management and Google SEO optimization.
            </p>
          </motion.div>

          {/* Video on larger screens */}
          <motion.div
            variants={videoVariant}
            initial="hidden"
            animate="visible"
            className="hidden overflow-hidden tilt-div rounded-lg md:block md:w-[30%]"
          >
            <video
              src={vid1}
              autoPlay
              loop
              muted
              className="w-full rounded-lg"
            ></video>
          </motion.div>

          {/* Animate "What we do" from the right */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center tilt-div justify-center gap-10 rounded-lg bg-[#dbd9d9] bg-opacity-20 px-10 py-12 md:w-[35%] md:py-0"
          >
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
          </motion.div>
        </div>
      </div>

      {/* SVG Section */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,192C384,181,480,171,576,192C672,213,768,267,864,266.7C960,267,1056,213,1152,181.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Section1;
