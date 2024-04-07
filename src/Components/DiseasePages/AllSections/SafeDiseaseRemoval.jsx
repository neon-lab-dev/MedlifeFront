import React, { useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";
import ReactGA from 'react-ga';

const SafeDiseaseRemoval = ({ content,subDisease }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  const treatments = [
    "Excellence in Healthcare",
    "Patient-Centric Care",
    " Personalized Approach",
    "State-of-the-Art Facilities",
    "Accepting All Insurance Plans",
    "Zero-Cost EMI Options Available"
  ]
  return (
    <div className="py-10">
    <div className="py-10 bg-[#f6fcff] w-full flex justify-center mb-5">
      <div className="w-[95%] md:w-[90%]">
        <h1 className="text-2xl text-start md:text-center font-semibold mb-9 text-gray-600 font-lato capitalize">
        Safe {subDisease} Surgery With {""}
          <span className="text-teal-600">
          Med Life Easy
          </span>
        </h1>

        {/* Bullet points (Tick icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {treatments.length > 0
            ? treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-center gap-2 ">
                  <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                    <MdOutlineDone></MdOutlineDone>
                  </div>
                  <p className="font-semibold text-gray-800 font-lato">{treatment}</p>
                </div>
              ))
            : "No content here"}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SafeDiseaseRemoval;
