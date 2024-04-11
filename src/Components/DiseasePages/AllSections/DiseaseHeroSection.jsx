import { MdOutlineDone } from "react-icons/md";
import roundedShape from "../../../Assests/rounded-shape.png";
import { Link } from "react-router-dom";
import AppointmentModal from "../../AppointmentModal";
import { Helmet } from "react-helmet-async";
import Form from "../../Form";
import { useEffect } from "react";
import ReactGA from "react-ga";

const DiseaseHeroSection = ({ content, subDisease, diseaseName }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="bg-[#fcf8ff] flex flex-col items-center">
      <Helmet>
  <title>
    {diseaseName} | {subDisease.charAt(0).toUpperCase() + subDisease.slice(1)}
  </title>
</Helmet>

      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[94%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={`/${diseaseName.toLowerCase()}`}>{diseaseName}</Link>
          </li>
          <li className="capitalize">{subDisease}</li>
        </ul>
      </div>

      <div className="w-[94%] lg:w-[90%] xl:w-[90%] grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-10 relative">
        <div className="pt-4 pb-10 z-10 col-span-3">
          {/* Main heading */}
          <h1 className="text-5xl text-gray-600 font-semibold mb-3 font-lato capitalize leading-[55px]">
            {content ? content?.heroHeader : ""}
          </h1>
          {/* Sub heading */}
          <h2 className="text-4xl text-[#2ca9e1] font-semibold mb-3 font-lato">
            {content ? content?.subHeading : ""}
          </h2>
          {/* Description */}
          <p className="text-gray-600 mb-5 font-lato">
            {content ? content?.details : ""}
          </p>

          <h2 className="text-xl text-[#2ca9e1] font-bold mb-3 font-lato">
            {content ? content?.overviewHeading : ""}
          </h2>

          <p className="text-gray-600 mb-5 font-lato">
            {content ? content?.overviewDetails : ""}
          </p>

          <h2 className="text-xl text-[#2ca9e1] font-bold mb-3 font-lato">
            {content ? content?.listHeading : ""}
          </h2>

          {/* Bullet points (Tick icons) */}
          <div className="mb-2 grid grid-cols-1 md:grid-cols-2">
            {content?.subLists?.length > 0
              ? content?.subLists?.map((list, idx) => (
                  <div key={idx} className="flex  gap-2 mb-4">
                    <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-semibold text-gray-800 font-lato -mt-[2px]">
                      {list}
                    </p>
                  </div>
                ))
              : ""}
          </div>

          <div className="flex flex-col lg:flex-row gap-3 w-full">
            <a
              href="tel:+9876543210"
              className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa] flex justify-center items-center"
            >
              Call now +98 765 432 10
            </a>

            <div className="w-full">
              <AppointmentModal
                className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16"
                text={"Book Your Appointment"}
              ></AppointmentModal>
            </div>
          </div>
        </div>

        <img
          className="hidden lg:block absolute bottom-0 lg:left-[400px] left-[600px]  2xl:left-[600px]  w-[350px]"
          src={roundedShape}
          alt=""
        />

        {/* Right side image and bottom card */}
        <div className="relative col-span-2">
          <div className="mt-1 lg:-mt-4 flex justify-center lg:justify-end">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseHeroSection;
