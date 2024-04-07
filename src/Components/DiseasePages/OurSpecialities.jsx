import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";

const OurSpecialities = ({ content }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="w-full flex bg-[#F2F4F5] justify-center py-16 my-10">
      <div className=" w-[95%] md:w-[90%]">
        <h1 className="text-2xl font-semibold mb-4 text-center font-lato">
          Our Specialities
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
          {/* card */}
          {content?.ourSpecialities &&
            content?.ourSpecialities?.map((speciality, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md">
                <img
                  className="border-b border-gray-300 mb-4 rounded-t-2xl h-[160px] w-full"
                  src={speciality.img}
                  alt=""
                />
                <div className="px-4">
                  <h1 className="text-sm md:text-lg font-semibold mb-1 font-lato">
                    {speciality.title}
                  </h1>
                  <p className="mb-2 font-lato text-xs md:text-base">
                    {speciality.details}
                  </p>
                  <Link to={`/${speciality.link}`} className="flex justify-end mb-2 text-2xl text-[#5854A8]">
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default OurSpecialities;
