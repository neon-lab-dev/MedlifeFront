import { useRef } from "react";
import "./styles/Specialities.css";
import { Link } from "react-router-dom";
import proctology from "../Assests/Our specialities image/PROCTOLOGY.jpg";
import laparoscopy from "../Assests/Our specialities image/Laparoscopy.jpg";
import gynaecology from "../Assests/Our specialities image/Gynaecology.jpg";
import urology from "../Assests/Our specialities image/urology-1.jpg";
import ent from "../Assests/Our specialities image/ent.jpg";
import vascular from "../Assests/Our specialities image/vascular.jpg";
import aesthetics from "../Assests/Our specialities image/Aesthetics.jpg";
import ophthalmology from "../Assests/Our specialities image/Ophthalmology.jpg";
import fertility from "../Assests/Our specialities image/Fertility.jpg";
import dentistry from "../Assests/Our specialities image/Dentistry.jpg";
import weightLoss from "../Assests/Our specialities image/Weight Loss.jpg";
import dermatology from "../Assests/Our specialities image/Dermatology.jpg";

const Specialities = () => {
  const cardsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 235;
    const container = cardsContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  const specialitiesInfo = [
    
    {
      img: proctology,
      name: "Proctology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "proctology",
    },
    {
      img: laparoscopy,
      name: "Laparoscopy",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "laparoscopy",
    },
    {
      img: gynaecology,
      name: "Gynaecology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "gynaecology",
    },
    {
      img: urology,
      name: "Urology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "urology",
    },
    {
      img: ent,
      name: "ENT",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "ent",
    },
    {
      img: vascular,
      name: "Vascular",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "vascular",
    },
    {
      img: aesthetics,
      name: "Aesthetics",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "aesthetics",
    },
    {
      img: ophthalmology,
      name: "Ophthalmology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "ophthalmology",
    },
    {
      img: fertility,
      name: "Fertility",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "fertility",
    },
    {
      img: dentistry,
      name: "Dentistry",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "dentistry",
    },
    {
      img: weightLoss,
      name: "Weight Loss",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "weightloss",
    },
    {
      img: dermatology,
      name: "Dermatology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link: "dermatology",
    },
  ];
  
  return (
    <div className="spe-cont">
      <div className="spe-inner-cont">
        <div className="hero-btm-head">Our Specialities</div>

        <div className="spe-card-cont">
          {specialitiesInfo.map((info, index) => {
            return (
              <div key={index} className="spe-card">
                <img className="spe-img" src={info.img} alt="procto" />
                <div className="spe-card-inner-cont">
                  <div className="spe-card-head">{info.name}</div>
                  <div className="spe-card-text">{info.details}</div>
                  {/* <div className="spe-card-det">
            View Details
            <img src={ext} alt="external"></img>
          </div> */}
                  <Link to={`/${info.link}`} className="spe-card-det">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rev-car-cont revv">
          <div className="arrow-div" onClick={() => handleScroll("left")}>
            &lt;
          </div>

          <div ref={cardsContainerRef} className="rev-cards-cont">
            {/* {Array.from({ length: 10 }, (_, i) => (
              <div className="spe-card" key={i}>
                <img src={proctospe} alt="procto" />
                <div className="spe-card-inner-cont">
                  <div className="spe-card-head">Proctology</div>
                  <div className="spe-card-text">
                    Specialised & advanced treatment for Anorectal Disease…
                  </div>
                  <div className="spe-card-det">
                    View Details
                    <img src={ext} alt="external"></img>
                  </div>
                </div>
              </div>
            ))} */}
            {specialitiesInfo.map((info, index) => {
              return (
                <div key={index} className="spe-card">
                  <img className="spe-img" src={info.img} alt="procto" />
                  <div className="spe-card-inner-cont">
                    <div className="spe-card-head">{info.name}</div>
                    <div className="spe-card-text">{info.details}</div>
                    {/* <div className="spe-card-det">
            View Details
            <img src={ext} alt="external"></img>
          </div> */}
                    <Link to={`/${info.link}`} className="spe-card-det">
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="arrow-div" onClick={() => handleScroll("right")}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
