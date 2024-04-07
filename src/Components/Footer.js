import React from "react";
import "./styles/Footer.css";
import fb from "../Assests/fb.png";
import ig from "../Assests/ig.png";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import useScrollToTop from "../hooks/useScrollToTop";


const Footer = () => {
  const { pathname } = useLocation();
  const { scrollToTop } = useScrollToTop(pathname);
  return (
    <div className="foot-cont flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 lg:gap-0 items-center ">
        <Link onClick={scrollToTop} to={"/aboutUs"} className="foot-text">About us</Link>
        <Link onClick={scrollToTop} to={"/partner"} className="foot-text">Partner with us</Link>
        <Link onClick={scrollToTop} to={"/payments"} className="foot-text">Payments</Link>
        <Link onClick={scrollToTop} to={"/termsConditions"} className="foot-text">Terms & Conditions</Link>
        <Link onClick={scrollToTop} to={"/privacyPolicy"} className="foot-text">Privacy Policy</Link>
        <Link onClick={scrollToTop} to={"/refundPolicy"} className="foot-text">Refund Policy</Link>
        <Link onClick={scrollToTop} to={"/contactUs"} className="foot-text">Contact</Link>
        <Link target="_blank" to={"https://www.facebook.com/medlifeeasy"}><FaFacebookF className="text-white"></FaFacebookF></Link>
        <Link target="_blank" to={"https://www.instagram.com/medlifeeasy/"}><CiInstagram className="text-white -ml-0 md:-ml-12"></CiInstagram></Link>
      </div>
    </div>
  );
};

export default Footer;
