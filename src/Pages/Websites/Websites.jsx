import React, { useState, useEffect, useRef } from 'react';

const Websites = () => {
  const data = [
    {
      title: "Caeli",
      img: "https://groundwork.ae/wp-content/uploads/caeli.png"
    },
    {
      title: "Everybody's Collection",
      img: "https://groundwork.ae/wp-content/uploads/everybodies.png"
    },
    {
      title: "Mawkini Brand",
      img: "https://groundwork.ae/wp-content/uploads/mawkini.png"
    },
    {
      title: "Hala Collection",
      img: "https://groundwork.ae/wp-content/uploads/hala.png"
    },
    {
      title: "Homepage Showcase",
      img: "https://groundwork.ae/wp-content/uploads/homepage.png"
    },
    {
      title: "Mister Baker Display",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-misterbaker-2023-12-12-16_35_39.png"
    },
    {
      title: "Furry Friends",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-furryfriends-ae-2023-08-28-21_33_19.png"
    },
    {
      title: "Aetrex Footwear",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-aetrex-ae-2023-12-12-16_45_59.png"
    },
    {
      title: "Polyafric Textiles",
      img: "https://groundwork.ae/wp-content/uploads/polyafric.png"
    },
    {
      title: "Head Arena",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-headarena-2023-12-12-15_46_42.png"
    },
    {
      title: "Drip Therapy",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-driptherapy-ae-2023-12-12-17_42_09.png"
    },
    {
      title: "Nitty Gritty",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-nittygritty-ae-2023-12-12-17_41_03.png"
    },
    {
      title: "Wild Camel",
      img: "https://groundwork.ae/wp-content/uploads/wildcamel.png"
    },
    {
      title: "Plush Tan",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-plushtan-ae-2023-12-12-15_44_33.png"
    },
    {
      title: "Upward Realtor",
      img: "https://groundwork.ae/wp-content/uploads/screencapture-upwardrealtor-2023-08-29-17_06_34.png"
    }
  ];
  
  
  const ImageWithScroll = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
      const img = imgRef.current;
      const container = containerRef.current;
      if (!img || !container) return;

      let animationFrameId;

      const slowScroll = () => {
        const scrollHeight = img.scrollHeight - container.clientHeight;
        const targetScrollTop = isHovered ? scrollHeight : 0;
        const currentScrollTop = container.scrollTop;
        const scrollSpeed = 0.02; // Reduce scroll speed for slower scrolling
        const step = (targetScrollTop - currentScrollTop) * scrollSpeed;

        if (Math.abs(step) > 0.5) {
          container.scrollTop += step;
          animationFrameId = requestAnimationFrame(slowScroll);
        } else {
          container.scrollTop = targetScrollTop;
        }
      };

      slowScroll();
      return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return (
      <div className="overflow-hidden relative group">
        {/* Scrollable image container */}
        <div
          className="h-64 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={containerRef}
        >
          <img
            ref={imgRef}
            src={item.img}
            alt={item.title}
            className="w-full h-auto"
          />
        </div>
        {/* Title container (non-scrolling) */}
        <div className="text-center bg-black text-[#C0C0C0] py-4">
          <p className='text-[15.4px]'>{item.title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='bg-black text-white'>
      <div className='px-8 md:px-16 py-12'>
        <p className='line-before text-[13px]'>recent work</p>
        <h1 className='text-[36px] font-semibold'>
          web<span className='text-primary'>sites</span>
        </h1>
        <p className='text-[15.4px] text-[#C0C0C0] pt-3'>
          we love making you stand out from the endless crowd of websites!
        </p>
        <p className='text-[15.4px] text-[#C0C0C0]'>
          Being like everyone else is boring.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-16">
        {data.map((item, index) => (
          <ImageWithScroll key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Websites;
