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
  ];
  
  const ImageWithScroll = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
      const img = imgRef.current;
      const container = containerRef.current;
      if (!img || !container) return;

      const scrollImage = () => {
        const scrollHeight = img.scrollHeight - container.clientHeight;
        const targetScrollTop = isHovered ? scrollHeight : 0;
        const currentScrollTop = container.scrollTop;
        const step = (targetScrollTop - currentScrollTop) * 0.1;

        if (Math.abs(step) > 0.5) {
          container.scrollTop += step;
          requestAnimationFrame(scrollImage);
        } else {
          container.scrollTop = targetScrollTop;
        }
      };

      requestAnimationFrame(scrollImage);
    }, [isHovered]);

    return (
      <div 
        className="overflow-hidden h-64 relative group"
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
        <p className="absolute bottom-0 left-0 w-full text-center bg-opacity-75 bg-black text-white p-2">{item.title}</p>
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
        {data.map((item, index) => (
          <ImageWithScroll key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Websites;