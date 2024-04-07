import React, { useEffect } from "react";
import ReactGA from 'react-ga';

const DiseaseInfo = ({ content, disease }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="py-12 w-full flex justify-center bg-[#ECF7FC]">
      <div className="w-[95%] md:w-[90%]">
        <h1 className="text-[32px] text-gray-600 font-semibold mb-4 font-lato">
          What is <span className="capitalize">{disease}</span>?
        </h1>
        <p className="text-justify text-gray-600 leading-7 font-lato">
          {content?.diseaseInfo.para1}
        </p>
        <p className="text-justify  text-gray-600 leading-7 mb-5 font-lato">
          {content?.diseaseInfo.para2}
        </p>
        <p className="text-justify text-gray-600 leading-7 font-lato">
          {content?.diseaseInfo.para3}
        </p>
        <p className="text-justify text-gray-600 leading-7 font-lato">
          {content?.diseaseInfo.para4}
        </p>
      </div>
    </div>
  );
};

export default DiseaseInfo;
