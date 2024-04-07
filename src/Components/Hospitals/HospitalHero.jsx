import React from "react";
import { Link } from "react-router-dom";
import ellipse from "../../Assests/Ellipse 21.png";

const HospitalHero = () => {
  return (
    <div className="bg-[#fcf8ff] flex flex-col items-center">
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[95%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Hospitals</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row w-[95%] lg:w-[90%] justify-between">
        <div className="flex flex-col gap-3 lg:gap-5 w-[95%] lg:w-[55%] xl:w-[60%] justify-center">
          <h1 className="text-center lg:text-start text-[28px] md:text-6xl lg:text-[clamp(28px, 3vw, 64px)] font-semibold text-[#344E5F]">
            Explore Our Partner Hospitals
          </h1>

          <p className="text-center lg:text-start text-gray-500 lg:text-[clamp(18px,1.5vw,28px)]">
            Experience the expertise of our accomplished doctors, facilitating
            over 200,000 successful appointments within our extensive network.
          </p>

          {/* Card */}
          <div className="w-full md:w-[70%] lg:w-[65%] 2xl:w-[60%] hidden lg:block">
            <div className="bg-[#FCFCFF] py-3 px-3 flex justify-between rounded-2xl shadow-lg">
              <div className="border-r-2 pr-12">
                <h1 className="text-[20px] lg:text-[clamp(25px,2vw,30px)] font-bold text-[#5854a8]">
                  1000+
                </h1>
                <p className="text-[8px] lg:text-[clamp(14px,2vw,16px)] md:text-base">DOCTORS</p>
              </div>
              <div className="border-r-2 pr-12">
                <h1 className="text-[20px] lg:text-[clamp(14px,2vw,30px)] font-bold text-[#5854a8]">
                  2000+
                </h1>
                <p className="text-[8px] lg:text-[clamp(14px,2vw,16px)] md:text-base">HOSPITALS</p>
              </div>
              <div>
                <h1 className="text-[20px] lg:text-[clamp(25px,2vw,30px)] font-bold text-[#5854a8]">
                  500+
                </h1>
                <p className="text-[8px] lg:text-[clamp(14px,2vw,16px)] md:text-base">TREATMENTS</p>
              </div>
            </div>
          </div>

        </div>

        <div className="w-[95%] md:w-[45%] xl:w-[35%] flex justify-center mt-6 lg:-mt-4 box-border">
          <div className="w-full flex justify-center">
            <img className="" src={ellipse} alt="" />
          </div>
        </div>
          {/* Card */}
          <div className="block lg:hidden w-[99%] sm:w-[50%] md:w-[70%] lg:w-[65%] 2xl:w-[60%]">
            <div className="bg-[#FCFCFF] py-3 px-3 flex justify-between rounded-2xl shadow-lg">
              <div className="border-r-2 pr-12">
                <h1 className="text-[20px] lg:text-[clamp(25px,2vw,30px)] font-bold text-[#5854a8]">
                  1000+
                </h1>
                <p className="text-[8px] lg:text-[clamp(14px,2vw,16px)] md:text-base">DOCTORS</p>
              </div>
              <div className="border-r-2 pr-12">
                <h1 className="text-[20px] lg:text-[clamp(14px,2vw,30px)] font-bold text-[#5854a8]">
                  2000+
                </h1>
                <p className="text-[8px] lg:text-[clamp(14px,2vw,16px)] md:text-base">HOSPITALS</p>
              </div>
              <div>
                <h1 className="text-[20px] lg:text-[clamp(25px,2vw,30px)] font-bold text-[#5854a8]">
                  500+
                </h1>
                <p className="text-[8px] lg:text-[clamp(14px,2vw,16px)] md:text-base">TREATMENTS</p>
              </div>
            </div>
          </div>


      </div>
    </div>
  );
};

export default HospitalHero;
