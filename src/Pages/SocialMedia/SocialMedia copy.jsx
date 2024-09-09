import React from "react";

const ImageStack = ({ images }) => {
  return (
    <div className="relative h-[130px] w-[160px] group mx-auto">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Stack image ${index + 1}`}
          className={`absolute w-[150px] p-[10px] border border-gray-800 box-shadow-md transition-all duration-500 ease-in-out transform group-hover:${
            index === 0
              ? "top-0 left-0 w-[200px]"
              : index === 1
              ? "top-0 left-[210px] w-[200px]"
              : "top-[45px] left-[-140px] w-[200px]"
          }`}
          style={{ zIndex: images.length - index }}
        />
      ))}
    </div>
  );
};

const SocialMedia = () => {
  const data = [
    {
      video1: "https://groundwork.ae/wp-content/uploads/3.mp4",
      images: [
        [
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-15-at-5.12.55-PM-2.jpeg",
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-15-at-5.12.55-PM-1.jpeg",
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-15-at-5.12.55-PM.jpeg",
        ],
      ],
      video2: "https://groundwork.ae/wp-content/uploads/Revision-.mov",
    },
    {
      video1: "https://groundwork.ae/wp-content/uploads/reel-4-new.mp4",
      images: [
        [
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-15-at-5.12.56-PM.jpeg",
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-15-at-5.12.56-PM-2.jpeg",
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-15-at-5.12.57-PM.jpeg",
        ],
      ],
      video2: "https://groundwork.ae/wp-content/uploads/Vhs-reel.mov",
    },
    {
      video1: "https://groundwork.ae/wp-content/uploads/green-hill22.mp4",
      images: [
        [
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-26-at-5.20.58-PM.jpeg",
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-26-at-5.20.56-PM.jpeg",
          "https://groundwork.ae/wp-content/uploads/WhatsApp-Image-2023-12-26-at-5.20.53-PM.jpeg",
        ],
      ],
      video2: "https://groundwork.ae/wp-content/uploads/Reel-1.mov",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-12 md:px-16">
        <p className="line-before text-[13px]">recent work</p>
        <h1 className="text-[36px] font-semibold">
          social <span className="text-primary">media</span>
        </h1>
        <p className="pt-3 text-[15.4px] text-[#C0C0C0]">
          we analyse your data and create a customised strategy just for you.
        </p>
        <p className="text-[15.4px] text-[#C0C0C0]">
          we are the key to your social media success.
        </p>
      </div>
      <div className="space-y-4 px-16 py-10">
        {data.map((row, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-[30%]">
              <video
                className="h-full w-full overflow-hidden rounded-lg object-cover"
                src={row.video1}
                controls
              ></video>
            </div>
            <div className="w-[40%] object-contain">
              <ImageStack images={row.images[0]} />
            </div>
            <div className="w-[30%]">
              <video
                className="h-full w-full overflow-hidden rounded-lg object-cover"
                src={row.video2}
                controls
              ></video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
