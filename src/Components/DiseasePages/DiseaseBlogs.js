import React, { useEffect } from "react";
import kidney from "../../Assests/db1.png";
import "./styles/DiseaseBlogs.css";
import ReactGA from 'react-ga';
const DiseaseBlogs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="blogs-cont">
      <div className="db-btm-head">
       <b className="db-btm-head-col"> Med Life Easy</b> बिहार में आपके स्वास्थय का भरोसेमंद साथी
      </div>
      <div className="blogs-inner-cont">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="blog-card">
            <img src={kidney} alt="kidney"></img>
            <div className="blog-card-inner-cont">
              <div className="blog-card-head">हर्निया (Hernia) का ईलाज</div>
              <div className="dblog-card-text">
                <ul>
                  <li>
                    जटिल और गंभीर रूप ले चुके हर्निया का इलाज पाएं बिहार के टॉप
                    और अनुभवी डॉक्टर्स द्वारा।
                  </li>
                  <li>पाएं एडवांस और दर्दरहित हर्निया सर्जरी उचित मूल्य पर </li>
                </ul>
                <div>
                  सही परामर्श एवं सही उपचार के लिए संपर्क करें Med Life Easy को
                </div>
              </div>
              <div className="dblog-card-cta">Contact Now</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseBlogs;
