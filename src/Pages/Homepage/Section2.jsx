import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import video from "../../assets/company-profile.mp4";

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Variants for animating the video and text
  const videoVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const titleVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } },
  };

  return (
    <div
      ref={ref} // Attaching the ref to monitor visibility
      className="flex items-end justify-start bg-black max-w-7xl mx-auto ps-10 py-10"
    >
      {/* Animate the video */}
      {/* <motion.div
        variants={videoVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="rounded-tr-3xl rounded-br-3xl overflow-hidden md:w-[65%]"
      >
        <video src={video} autoPlay loop muted></video>
      </motion.div> */}

      {/* Animate the text */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-white px-10 justify-center flex flex-col gap-3 md:w-[35%]"
      >
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[13px] line-before"
        >
          a success solution to your digital success
        </motion.p>

        {/* Animate the title with the same animation */}
        <motion.h1
          variants={titleVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[36px] font-semibold"
        >
          our <span className="text-primary">story</span>
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[15.4px] text-[#C0C0C0]"
        >
          groundwork is a complete digital solutions agency that has been in
          operation since 2019 and is dedicated to helping brands build their
          online presence and achieve their online goals.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Section2;
