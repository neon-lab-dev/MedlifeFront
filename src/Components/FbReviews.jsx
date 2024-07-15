 import revstars from "../Assests/revstars.png";
import Swipperbtn from "./Swipperbtn";
import "swiper/css/pagination";
import instagramLogo from "../Assests/instagramLogo.png";
import logo from "../Assests/logo.svg";

// import required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
import "../Components/styles/Reviews.css"
// import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
// import { useSwiper } from "swiper/react";

const FbReviews = () => {
  // const swipper = useSwiper();
  const [instagramPost, setInstagramPost] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,thumbnail_url,media_url,timestamp,permalink,username&access_token=${import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN}&limit=6`
        )
        .then((res) => {
          setInstagramPost(res.data.data);
          setIsloading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  

  return (
    <div className="bg-[#f6fafb] w-full flex flex-col items-center">
      <div className="w-[95%] md:w-[90%] py-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800  text-center mb-10">
          Our Patient Loves us
        </h1>
      <div className="flex justify-center relative">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1366: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={10}
            modules={[Pagination]}
            className="carousel"
          >
            {isLoading ? (
              <Loader />
            ) : (
              instagramPost?.map((post, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={post.permalink}
                    target="_blank"
                    className="rev-card mb-9"
                  >
                    <div className="rev-card-img-cont">
                      <div className="rev-card-img">
                        <div className="w-10 h-10 rounded-full">
                          <img className="" src={logo} alt="review" />
                        </div>
                        <div className="rev-name-cont">
                          <div className="rev-name font-bold">Medlife Easy</div>
                          <div className="star-cont">
                            <img src={revstars} alt="" />
                          </div>
                        </div>
                      </div>
                      <img className="w-10" src={instagramLogo} alt="" />
                    </div>
                    <div className="rev-place">
                      <img
                        className="w-full h-full object-cover object-center rounded-lg"
                        src={post.thumbnail_url || post.media_url}
                        alt=""
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            )}
           <div className="absolute top-36 w-full z-10">
              <Swipperbtn></Swipperbtn>
            </div>



            
            {/* <button className="z-20" onClick={() => swipper.slidePrev()}>
        <IoIosArrowDropleftCircle className="text-[#5854a8] text-5xl "></IoIosArrowDropleftCircle>
      </button>
      
             <button className="z-20" onClick={() => swipper.slideNext()}>
        <IoIosArrowDroprightCircle className="text-[#5854a8] text-5xl"></IoIosArrowDroprightCircle>
      </button> */}
          </Swiper>
         
        </div>
      </div>
    </div>
  );
};

export default FbReviews;
