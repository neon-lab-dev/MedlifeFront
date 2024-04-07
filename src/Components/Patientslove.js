import React, { useRef } from "react";
import "./styles/Patientslove.css";
import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import Caurosel from "./Caurosel";
const Patientslove = () => {
  const cardsContainerRef = useRef(null);
  const elementRef = useRef(null);
  const { pathname } = useLocation();
  const { scrollToTop } = useScrollToTop(pathname);

  const handleScroll = (direction) => {
    const width = elementRef?.current.getBoundingClientRect().width;

    const scrollAmount = width || 500;
    const container = cardsContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] md:w-[90%]">
        <div className="text-gray-800 mb-7 text-[32px] font-bold text-center font-lato">
          Our Patient Loves Us
        </div>

        <Caurosel></Caurosel>
        <div className="pl-cta-cont">
          <Link onClick={scrollToTop} to={"/review"} className="pl-va">
            View All Reviews
          </Link>
          <Link onClick={scrollToTop} to={"/review"} className="pl-wr">
            Write A Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Patientslove;
