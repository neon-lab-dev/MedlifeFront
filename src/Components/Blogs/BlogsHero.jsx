/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import roundShape from "../../Assests/rounded-shape.png";
import Form from "../Form";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';
import CallNowButton from "../ReusableComponents/CallNowButton";


const BlogsHero = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="bg-[#fcf8ff] flex flex-col items-center">
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[95%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Blogs</li>
        </ul>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-5 max-w-[83vw] mx-auto lg:gap-10"> */}
      <div className="flex flex-col lg:flex-row w-[99%] lg:w-[90%] justify-center items-center relative">
        <div className="flex flex-col gap-3 lg:gap-7 w-[95%] lg:w-[55%] xl:w-[59%] items-center lg:items-start lg:justify-start justify-center z-10">
          {/* Main heading */}
          <h1 className="text-center lg:text-start text-[28px] md:text-5xl lg:text-5xl lg:text-[clamp(28px, 3vw, 64px)] font-semibold text-[#344E5F]">
            Stay Informed with MedLifeEasy's Health Blog.
          </h1>
          {/* Description */}
          <p className="text-center lg:text-start text-gray-500 lg:text-[clamp(18px,1.5vw,28px)]">
            Your Source for Expert Insights, Latest Medical <br /> Discoveries,
            and Wellness Tips.
          </p>

          <CallNowButton className="w-[70%] md:w-[60%]"/>
        </div>

        <img
          className="hidden lg:block absolute bottom-0 lg:left-[400px] left-[600px]  2xl:left-[600px]  w-[350px]"
          src={roundShape}
          alt=""
        />

        {/* Right side form */}
        <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex justify-center mt-6 lg:-mt-6 mb-2 box-border z-10">
          <div className=" w-full flex justify-center max-w-[550px] ">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
