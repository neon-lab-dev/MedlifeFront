import React from "react";
import "./styles/Specialities.css";
import "./styles/Specialities.css";
import proctospe from "../Assests/proctospe.png";
import Swipperbtn from "./Swipperbtn";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";


const OurSpecialities = () => {

  const specialitiesInfo = [
    {
      img: proctospe,
      name: "Proctology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "proctology"
    },
    {
      img: proctospe,
      name: "Laparoscopy",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "laparoscopy"
    },
    {
      img: proctospe,
      name: "Gynaecology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "gynaecology"
    },
    {
      img: proctospe,
      name: "ENT",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "ent"
    },
    {
      img: proctospe,
      name: "Vascular",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "vascular"
    },
    {
      img: proctospe,
      name: "Aesthetics",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "aesthetics"
    },
    {
      img: proctospe,
      name: "Orthopedics",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "orthopedics"
    },
    {
      img: proctospe,
      name: "Ophthalmology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "ophthalmology"
    },
    {
      img: proctospe,
      name: "Fertility",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "fertility"
    },
    {
      img: proctospe,
      name: "Dentistry",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "dentistry"
    },
    {
      img: proctospe,
      name: "Weight Loss",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "weightloss"
    },
    {
      img: proctospe,
      name: "Dermatology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "dermatology"
    },
  ]
  return (
    <div className="bg-[#f6fafb] w-full flex flex-col items-center mt-10">
      <div className="w-[95%] md:w-[90%]">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800  text-center mb-3">
        Our Specialities
        </h1>
        <div className="flex justify-center relative  ">
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
                slidesPerView: 3,
              },
              1366: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="carousel"
          >
            {
                <div className="spe-card-cont">
                {
          specialitiesInfo.map((info, index) => {
            return (
              <SwiperSlide key={index} className="spe-card">
                <img src={info.img} alt="procto" />
                <div className="spe-card-inner-cont">
                  <div className="spe-card-head">{info.name}</div>
                  <div className="spe-card-text">
                    {info.details}
                  </div>
                  <Link to={`/${info.link}`} className="spe-card-det">
                    View Details
                  </Link>
                </div>
              </SwiperSlide>
            );
          })
        }
        
                </div>
            }

            <div className="absolute top-44 w-full z-10 hidden md:block">
              <Swipperbtn></Swipperbtn>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialities;
