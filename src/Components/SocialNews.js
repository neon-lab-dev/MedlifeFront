import React from "react";
import "./styles/SocialNews.css";
import instagramVideon from "../Assests/instagramVideo.mp4"
const SocialNews = () => {
  return (
    <div className="sn-cont">
      <div className="hero-btm-head">Some Social News From Our Patients</div>
      <div className="sn-vid-cont">
        <div className="sn-vid">
        {/* <div className="w-96">

        <video controls>
            <source src={instagramVideon} type="video/mp4" />
            
          </video>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default SocialNews;
