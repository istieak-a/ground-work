import React from "react";

import vid1 from "../../assets/videos/3.mp4";
import vid2 from "../../assets/videos/reel-4-new.mp4";
import vid3 from "../../assets/videos/green-hill22.mp4";
import vid4 from "../../assets/videos/Revision-.mov";
import vid5 from "../../assets/videos/Vhs-reel.mov";
import vid6 from "../../assets/videos/Reel-1.mov";

const SocialMedia = () => {
  const data = {
    videos: [vid1, vid2, vid3, vid4, vid5, vid6],
  };

  return (
    <div className="bg-black text-white">
      <div className="px-8 md:px-16 py-12 max-w-7xl mx-auto">
        <p className="line-before text-[13px]">recent work</p>
        <h1 className="text-[36px] font-semibold">
          social <span className="text-primary">media</span>
        </h1>
        <p className="text-[15.4px] text-[#C0C0C0] pt-3">
          we analyse your data and create a customised strategy just for you.
        </p>
        <p className="text-[15.4px] text-[#C0C0C0]">
          we are the key to your social media success.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-8 pb-12 md:grid-cols-2 md:px-16 lg:grid-cols-3">
        {data.videos.map((video, index) => (
          <VideosCon key={index} vid={video} />
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;

const VideosCon = ({ vid }) => {
  return (
    <div>
      <video className="overflow-hidden rounded-lg" src={vid} controls></video>
    </div>
  );
};
