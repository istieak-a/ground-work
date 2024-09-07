import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section4 = () => {
  const { scroll } = useLocomotiveScroll();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile devices
    };

    // Initial check
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  useEffect(() => {
    if (scroll && !isMobile) {
      scroll.on("scroll", ({ limit, scroll }) => {
        const progress = scroll.y / limit.y;
        titleRef.current.style.transform = `translateX(${100 - progress * 200}%)`;
      });
    } else if (isMobile && titleRef.current) {
      titleRef.current.style.transform = "translateX(0)"; // Reset transform on mobile
    }
  }, [scroll, isMobile]);

  const data = [
    {
      img: "https://groundwork.ae/wp-content/uploads/Sephora-emblem-removebg-preview.png",
      vid: "https://groundwork.ae/wp-content/uploads/Untitled-design-3.mp4",
    },
    {
      img: "https://groundwork.ae/wp-content/uploads/jordan-logo-wy5n6mg094axmhwk-removebg-preview-1.png",
      vid: "https://groundwork.ae/wp-content/uploads/Untitled-design.mp4",
    },
    {
      img: "https://groundwork.ae/wp-content/uploads/warehouse.svg",
      vid: "https://groundwork.ae/wp-content/uploads/Untitled-design-1-2.mp4",
    },
    {
      img: "https://groundwork.ae/wp-content/uploads/Layer-30.png",
      vid: "https://groundwork.ae/wp-content/uploads/mawkini.mp4",
    },
    {
      img: "https://groundwork.ae/wp-content/uploads/Screenshot-2023-12-15-at-12.38.24%E2%80%AFPM.png",
      vid: "https://groundwork.ae/wp-content/uploads/Blue-Phone-Text-Message-Instagram-Reel-Video-1-4.mp4",
    },
    {
      img: "https://groundwork.ae/wp-content/uploads/Link_100x@2x.svg",
      vid: "https://groundwork.ae/wp-content/uploads/caeli-1.mp4",
    },
  ];

  return (
    <div className="bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-10 px-8 md:px-16 flex flex-col gap-10">
        {!isMobile ? (
          <motion.h1
            ref={titleRef}
            className="text-right text-[64px] font-semibold text-primary whitespace-nowrap"
            style={{ x: titleX }}
          >
            <span className="stroke-white stroke-2 text-transparent">
              glimpse of our
            </span>{" "}
            work
          </motion.h1>
        ) : (
          <h1
            className="text-center text-[55px] font-semibold text-primary"
          >
            <span className="stroke-white stroke-2 text-transparent">
              glimpse of our
            </span> work
          </h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Videonlogo key={index} img={item.img} vid={item.vid} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Videonlogo = ({ img, vid }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <img className="h-[150px] w-[100px] object-contain" src={img} alt="logo" />
      <video src={vid} autoPlay loop muted></video>
    </div>
  );
};

export default Section4;
