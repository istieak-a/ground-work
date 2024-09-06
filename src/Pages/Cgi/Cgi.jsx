import React from "react";
import { DiVim } from "react-icons/di";

const Cgi = () => {
  const data = [
    {
      title: "Fable & Mane",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/08/Snapinsta.app_video_An8FBKjhyyJAacMNa4zzMVfoW0-rCKpYY0wm-iYszfejG0xTugCwcX0qJQmnWGnIW8RWX713jBNk_d5InQqDULkH.mp4",
    },
    {
      title: "L’Occitane Dubai",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/08/Snapinsta.app_video_An9hoBP9rtpC7vryYb81LO4G5DnZKXRlJlMgbX8xNctvfWzEqU9ZKc5OvWr0X6tnUYDyK5GlPcCIpkHKzmsKxr0.mp4",
    },
    {
      title: "Steve Madden",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/08/Snapinsta.app_video_An_7YtXUqykTUX8bbE_1cakfG-LHGDXVtBdHnYInk-tgugW3bNF8qGVic7vSq27tXUpcV4aTwH1Ep3YuVeFAFPap.mp4",
    },
    {
      title: "Centrepoint",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/08/Snapinsta.app_video_ED4FF53FCDE153AE37D9D7906823EDB8_video_dashinit.mp4",
    },
    {
      title: "Doctor M eyewear",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/08/Snapinsta.app_video_F445E76197B1D040B170D9EAA687C2B7_video_dashinit.mp4",
    },
    {
      title: "Plushtan",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/08/Snapinsta.app_video_An-aZu-uh3WxzPdX2NJRnng6O229Ug2p-2PjKSLYkPbkVGzqsYCjJDl9BwfZkdB3AE3s5UbDAThrMQJbeIDy8KWa.mp4",
    },
    {
      title: "Lovin Dubai",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/05/Lovin_Dubai_v3_Final_1_with_logo.mp4",
    },
    {
      title: "Centrepoint Holiday Campaign",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/06/CP_Final_Edit_Fixed_Sound.mp4",
    },
    {
      title: "Emirates Islamic",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/06/EL_Final_w_Outro_v1.mov",
    },
    {
      title: "Sephora - Great hair day challenge",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/sephora.mp4",
    },
    {
      title: "Nike Jordan - Union X Jordan collaboration",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/nike-jordan.mp4",
    },
    {
      title: "L’Occitane Dubai",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Loccitane_Dubai_Final_V2.mp4",
    },
    {
      title: "Xiaomi - 13T Series collaboration with LEICA",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Xiaomi_Sound_without_Zoom_v7_CC_1.mp4",
    },
    {
      title: "Emirates NBD Christmas’23",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/emirates-nbd.mp4",
    },
    {
      title: "Sun & Sand Sports - Dubai fitness challenge",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/SSS.mp4",
    },
    {
      title: "6th street",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/6th-street-saudi-Final.mp4",
    },
    {
      title: "Emirates NBD Diwali campaign’23",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/diwali-CGI-ENBD-02.mp4",
    },
    {
      title: "L’Occitane",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Generic-SFX-2.mp4",
    },
    {
      title: "the warehouse gym - new location launch",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/CGI-WH-Extension-final.mov",
    },
    {
      title: "Vego cafe - Diwali campaign’23",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/with-sound-2.mp4",
    },
    {
      title: "L’Occitane Saudi arabia",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Loccitane-Final-Saudi-29-th.mp4",
    },
    {
      title: "6th street",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/6thStreet-Final-Revised-2.mp4",
    },
    {
      title: "3 kicks",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/3KICKS-Lottery-CGI.mp4",
    },
    {
      title: "Royal donuts - Dubai brand launch",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Royal-Donuts-CGI.mp4",
    },
    {
      title: "3 kicks",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/3KICKS-Lean-Back-CGI.mp4",
    },
    {
      title: "pop",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Pop-Up-2-1.mp4",
    },
    {
      title: "groundwork",
      vid: "https://cgi.groundwork.ae/wp-content/uploads/2024/03/Groundwork-CGI.mp4",
    },
  ];

  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-8 py-12 text-white md:py-16">
        <h1 className="text-[30px] font-semibold">
          computer <span className="text-primary">generated imagery</span>
        </h1>
        <p className="text-[17px] text-[#7A7A7A]">
          we help businesses establish a strong and distinctive brand identity
          with our compelling CGI videos!
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-8 pb-12 md:grid-cols-2 md:px-16 lg:grid-cols-3">
        {data.map((item, index) => (
          <VideosCon key={index} title={item.title} vid={item.vid} />
        ))}
      </div>
    </div>
  );
};

export default Cgi;

const VideosCon = ({ title, vid }) => {
  return (
    <div>
      <video className="overflow-hidden rounded-lg" src={vid} controls></video>
      <p className="text-[16px] text-[#7A7A7A]">{title}</p>
    </div>
  );
};
