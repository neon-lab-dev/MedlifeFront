import React from "react";
import heroDoc from "../Assests/heroDoc.png";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="mb-10 bg-[#fcf8ff] w-full flex justify-center">
      <div className="flex justify-center items-center flex-col xl:flex-row w-[95%] md:w-[90%]">
        <div className="relative mt-3 flex justify-center flex-col items-center xl:items-start w-full gap-[10px]">
          <h1 className="text-[28px] md:text-5xl lg:text-[clamp(28px,3vw,64px)] font-lato font-extrabold text-[#2CA9E1] text-center lg:text-start">
            Welcome to Med Life Easy
          </h1>
          <h2 className="text-gray-500 text-xl md:text-3xl lg:text-[clamp(18px,1.8vw,36px)] font-semibold text-center lg:text-start">
            Your Path to Health and Happiness
          </h2>
          <div className="flex xl:justify-start w-[100%] justify-center">
            <img className="w-full lg:w-[60%]" src={heroDoc} alt="" />

            {/* Bottom Card */}
            <div className="w-[90%] flex justify-center xl:justify-start absolute bottom-0">
              <div className="bg-[#FCFCFF] shadow py-1 xl:py-3 px-6 flex justify-evenly items-center rounded-xl w-full lg:w-[80%]">
                <div className="">
                  <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                    1000+
                  </h1>
                  <p className="text-xs md:text-base">DOCTORS</p>
                </div>
                <div className="w-[1px] h-[35px] bg-[rgb(166,173,187)]"></div>
                <div className=" pl-2 md:pl-0">
                  <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                    2000+
                  </h1>
                  <p className="text-xs md:text-base">HOSPITALS</p>
                </div>
                <div className="w-[1px] h-[35px] bg-[rgb(166,173,187)]"></div>
                <div className="pl-2 md:pl-0">
                  <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                    500+
                  </h1>
                  <p className="text-xs md:text-base">TREATMENTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center xl:justify-end mb-0 xl:mb-2">
          <div className="w-full lg:w-[70%] mt-5 flex justify-center xl:justify-end">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
