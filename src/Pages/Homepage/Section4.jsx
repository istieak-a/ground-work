import React from "react";

const Section4 = () => {
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
    <div className="bg-black py-10 px-8 md:px-16 flex flex-col gap-10">
      <h1 className="text-center text-[64px] font-semibold text-primary">
        <span className="stroke-white stroke-2 text-transparent">
          glimpse of our
        </span>{" "}
        work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Videonlogo key={index} img={item.img} vid={item.vid} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
const Videonlogo = ({ img, vid }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <img className="h-[150px] w-[100px]  object-contain" src={img} alt="logo" />
      <video src={vid} autoPlay loop muted></video>
    </div>
  );
};
