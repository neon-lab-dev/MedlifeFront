import React, { useEffect } from "react";
import "./styles/DiseaseConsult.css";
import dcr from "../../Assests/dcr.svg";
import ReactGA from 'react-ga';
const DiseaseConsult = ({content}) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="dc-cont">
      <div className="dc-inner-cont">
        <div className="dc-left">
          <div className="dc-left-det-cont">
            <div className="dc-left-head">
              {content.consult.consultHeader}
            </div>
            <div className="dc-left-text">
            {content.consult.consultDetails}
            </div>
            <div className="dc-left-sub-det">
            {content.consult.consultSubDetails}
            </div>
          </div>
          <div className="dc-cta">Consult Now</div>
        </div>
        <div className="dc-right">
          <img src={dcr} alt="dcr" />
        </div>
      </div>
    </div>
  );
};

export default DiseaseConsult;
