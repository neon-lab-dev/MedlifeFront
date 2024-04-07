import revstars from "../Assests/revstars.png";
import revrec from "../Assests/revrec.png";
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

const FbReviews = () => {
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
      <div className="w-[95%] md:w-[90%]">
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
                            {/* <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div> */}
                          </div>
                        </div>
                      </div>
                      {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1763)">
                  <path
                    d="M28 0H4C1.794 0 0 1.794 0 4V28C0 30.206 1.794 32 4 32H28C30.206 32 32 30.206 32 28V4C32 1.794 30.206 0 28 0Z"
                    fill="#1976D2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8008 16.4004H18.8008V12.4004C18.8008 11.2964 19.6968 11.4004 20.8008 11.4004H22.8008V6.40039H18.8008C17.2095 6.40039 15.6834 7.03253 14.5581 8.15775C13.4329 9.28297 12.8008 10.8091 12.8008 12.4004V16.4004H8.80078V21.4004H12.8008V32.4004H18.8008V21.4004H21.8008L23.8008 16.4004Z"
                    fill="#FAFAFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1763">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
                      <img className="w-10" src={instagramLogo} alt="" />
                    </div>

                    {/* <div className="rev-rec-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div> */}

                    <div className="rev-place">
                      <img
                        className="w-full h-full object-cover object-center rounded-lg"
                        src={post.thumbnail_url || post.media_url}
                        alt=""
                      />
                    </div>

                    <div className="rev-divider"></div>
                    <div className="rev-card-img-cont">
                      <div className="rev-reac">
                        <img src={revrec} alt="revrec" />
                        <span>501</span>
                      </div>
                      <div className="rev-comm">54 comments</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            )}

            <div className="absolute top-52 w-full z-10">
              <Swipperbtn></Swipperbtn>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FbReviews;
