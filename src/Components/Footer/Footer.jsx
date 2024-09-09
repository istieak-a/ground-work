import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true, threshold: 0.2 });
  const isContactInView = useInView(contactRef, { once: true, threshold: 0.2 });

  // Animation variants for word-by-word animation with increased duration and delay
  const wordVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.3 }, // Slower animation with more delay between words
    }),
  };

  const projectTitleWords = ["about", "your", "next", "project"];
  const contactTitleWords = ["contact"];

  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-8 md:flex-row md:justify-between md:px-16 md:py-16">
        {/* Project Section */}
        <div className="flex flex-col items-start gap-2" ref={projectRef}>
          <p className="text-[16px] text-primary">let's talk</p>
          <h1 className="text-[50px] font-semibold text-white md:text-[75px]">
            {projectTitleWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariant}
                initial="hidden"
                animate={isProjectInView ? "visible" : "hidden"}
                className={`inline-block mr-2 ${index < 2 ? "stroke-white stroke-2 text-transparent" : ""}`} // Applying stroke style to "about your"
              >
                {word}
              </motion.span>
            ))}{" "}
            <motion.span
              variants={wordVariant}
              initial="hidden"
              animate={isProjectInView ? "visible" : "hidden"}
              custom={projectTitleWords.length}
              className="stroke-white stroke-2 text-transparent"
            >
              .
            </motion.span>
          </h1>
          <a href="mailto:info@brandingcovered.com" className="mt-5 border px-14 py-5 text-[13px] text-white hover:bg-white hover:text-black">
            get in touch
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-5" ref={contactRef}>
          <h1 className="text-[30px] font-semibold text-white">
            {contactTitleWords.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariant}
                initial="hidden"
                animate={isContactInView ? "visible" : "hidden"}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}{" "}
            <motion.span
              variants={wordVariant}
              initial="hidden"
              animate={isContactInView ? "visible" : "hidden"}
              custom={contactTitleWords.length}
              className="inline-block text-primary"
            >
              us
            </motion.span>
          </h1>

          <div className="footer-links flex flex-col gap-3 text-white">
            <a href="mailto:info@groundwork.com">
              <span>
                <MdEmail />
              </span>{" "}
              info@brandingcovered.com
            </a>
            {/* <a href="tel:+00000000">
              <span>
                <IoCall />
              </span>{" "}
              +1000000000
            </a> */}
            {/* <a href="tel:+00000000">
              <span>
                <IoCall />
              </span>{" "}
              +1000000000
            </a> */}
            <p>
              <span>
                <FaLocationArrow />
              </span>{" "}
              178 Columbus Ave, New York, NY 10023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
