import { useEffect } from "react";
import "./Landingpage.css";
import Hero from "../Components/Hero";
import Specialities from "../Components/Specialities";
import SocialNews from "../Components/SocialNews";
import ChangingLives from "../Components/ChangingLives";
import Doctors from "../Components/Doctors";
import Whyus from "../Components/Whyus";
import Patientslove from "../Components/Patientslove";
import Blogs from "../Components/Blogs";
import Faqs from "../Components/Faq";
import Getintouch from "../Components/Getintouch";
import Officeaddress from "../Components/Officeaddress";
import Footer from "../Components/Footer";
import Modal from "../Components/Modal";
import { Helmet } from "react-helmet-async";
import Surgeries from "./Surgeries";
import FbReviews from "../Components/FbReviews";
import Navbar from "../Components/Navbar";
import ReactGA from 'react-ga';
const Landingpage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="lp-cont">
      <Helmet>
        <title>Medlife Easy | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Modal></Modal>
      <Hero />
      <Surgeries></Surgeries>
      <Specialities />
      <SocialNews />
      <FbReviews></FbReviews>
      {/* <Reviews /> */}
      <ChangingLives />
      <Doctors />
      <Whyus />
      <Patientslove />
      <Blogs />
      <Faqs />
      <Getintouch />
      <Officeaddress />
      <Footer />
    </div>
  );
};

export default Landingpage;
