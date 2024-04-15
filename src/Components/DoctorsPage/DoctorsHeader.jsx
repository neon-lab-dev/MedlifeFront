import React, { useEffect } from "react";
import Form from "../Form";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';


const DoctorsHeader = () => {
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
          <li>
            <Link>Doctors</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-[95%] lg:w-[90%] lg:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-4 w-[95%] lg:w-[55%] xl:w-[60%] items-center lg:items-start lg:justify-start justify-center">
          <h1 className="text-center lg:text-start text-[28px] md:text-5xl lg:text-[clamp(28px, 3vw, 64px)] font-bold text-[#17324A]">
            Consult with Top Rated Experienced Doctors Online!
          </h1>

          <h3 className="text-center lg:text-start text-gray-500 text-2xl lg:text-[clamp(28px, 2vw, 48px)] font-semibold">
            Get Free Quotation on Your <br /> Planned Surgery
          </h3>

          {/* <button className="w-[70%] md:w-[60%] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +91 995 599 2502
          </button> */}

          <a href="tel:+9876543210" className="w-full flex justify-center lg:justify-start">
          <div className="w-[70%] md:w-[60%] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa] flex items-center justify-center">
            Call now +91 995 599 2502
           </div>
           </a>


        </div>

         {/* Right side form */}
        <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex justify-center lg:-mt-6 box-border ">
          <div className=" w-full flex justify-center max-w-[550px] ">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DoctorsHeader;
