import React from "react";

import vid1 from "../../assets/videos/3KICKS-Lean-Back-CGI.mp4";
import vid2 from "../../assets/videos/6th-street-saudi-Final.mp4";
import vid3 from "../../assets/videos/diwali-CGI-ENBD-02.mp4";
import vid4 from "../../assets/videos/Generic-SFX-2.mp4";
import vid5 from "../../assets/videos/Loccitane-Final-Saudi-29-th.mp4";
import vid6 from "../../assets/videos/Pop-Up-2-1.mp4";
import vid7 from "../../assets/videos/Snapinsta.app_video_An_7YtXUqykTUX8bbE_1cakfG-LHGDXVtBdHnYInk-tgugW3bNF8qGVic7vSq27tXUpcV4aTwH1Ep3YuVeFAFPap.mp4";
import vid8 from "../../assets/videos/Snapinsta.app_video_An-aZu-uh3WxzPdX2NJRnng6O229Ug2p-2PjKSLYkPbkVGzqsYCjJDl9BwfZkdB3AE3s5UbDAThrMQJbeIDy8KWa.mp4";
import vid9 from "../../assets/videos/SSS.mp4";
import vid10 from "../../assets/videos/3KICKS-Lottery-CGI.mp4";
import vid11 from "../../assets/videos/CGI-WH-Extension-final.mov";
import vid12 from "../../assets/videos/EL_Final_w_Outro_v1.mov";
import vid13 from "../../assets/videos/Groundwork-CGI.mp4";
import vid14 from "../../assets/videos/Lovin_Dubai_v3_Final_1_with_logo.mp4";
import vid15 from "../../assets/videos/Royal-Donuts-CGI.mp4";
import vid16 from "../../assets/videos/Snapinsta.app_video_An9hoBP9rtpC7vryYb81LO4G5DnZKXRlJlMgbX8xNctvfWzEqU9ZKc5OvWr0X6tnUYDyK5GlPcCIpkHKzmsKxr0.mp4";
import vid17 from "../../assets/videos/Snapinsta.app_video_ED4FF53FCDE153AE37D9D7906823EDB8_video_dashinit.mp4";
import vid18 from "../../assets/videos/Snapinsta.app_video_F445E76197B1D040B170D9EAA687C2B7_video_dashinit.mp4";
import vid19 from "../../assets/videos/Xiaomi_Sound_without_Zoom_v7_CC_1.mp4";
import vid20 from "../../assets/videos/emirates-nbd.mp4";
import vid21 from "../../assets/videos/Loccitane_Dubai_Final_V2.mp4";
import vid22 from "../../assets/videos/nike-jordan.mp4";
import vid23 from "../../assets/videos/sephora.mp4";
import vid24 from "../../assets/videos/6thStreet-Final-Revised-2.mp4";
import vid25 from "../../assets/videos/with-sound-2.mp4";
import vid26 from "../../assets/videos/CP_Final_Edit_Fixed_Sound.mp4";
import vid27 from "../../assets/videos/Snapinsta.app_video_An8FBKjhyyJAacMNa4zzMVfoW0-rCKpYY0wm-iYszfejG0xTugCwcX0qJQmnWGnIW8RWX713jBNk_d5InQqDULkH.mp4";

const data = [
  { title: "3 KICKS - Lean Back CGI", vid: vid1 },
  { title: "6th Street Saudi Final", vid: vid2 },
  { title: "Diwali CGI ENBD", vid: vid3 },
  { title: "Generic SFX", vid: vid4 },
  { title: "L'Occitane Final Saudi", vid: vid5 },
  { title: "Pop-Up 2", vid: vid6 },
  { title: "Snapinsta Video 7", vid: vid7 },
  { title: "Snapinsta Video 8", vid: vid8 },
  { title: "SSS", vid: vid9 },
  { title: "3 KICKS - Lottery CGI", vid: vid10 },
  { title: "CGI WH Extension Final", vid: vid11 },
  { title: "EL Final w Outro", vid: vid12 },
  { title: "Groundwork CGI", vid: vid13 },
  { title: "Lovin Dubai Final", vid: vid14 },
  { title: "Royal Donuts CGI", vid: vid15 },
  { title: "Snapinsta Video 16", vid: vid16 },
  { title: "Snapinsta Video 17", vid: vid17 },
  { title: "Snapinsta Video 18", vid: vid18 },
  { title: "Xiaomi Sound Without Zoom", vid: vid19 },
  { title: "Emirates NBD", vid: vid20 },
  { title: "L'Occitane Dubai Final", vid: vid21 },
  { title: "Nike Jordan", vid: vid22 },
  { title: "Sephora", vid: vid23 },
  { title: "6th Street Final Revised", vid: vid24 },
  { title: "With Sound 2", vid: vid25 },
  { title: "CP Final Edit Fixed", vid: vid26 },
  { title: "Snapinsta Video 27", vid: vid27 },
];

const Cgi = () => {
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

const VideosCon = ({ title, vid }) => {
  return (
    <div>
      <video className="overflow-hidden rounded-lg" src={vid} controls></video>
      <p className="text-[16px] text-[#7A7A7A]">{title}</p>
    </div>
  );
};

export default Cgi;
