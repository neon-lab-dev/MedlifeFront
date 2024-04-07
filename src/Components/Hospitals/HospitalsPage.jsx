import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import OurHospitals from "./OurHospitals";
import HospitalHero from "./HospitalHero";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

const HospitalsPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Hospitals</title>
      </Helmet>
      <Navbar></Navbar>
      <HospitalHero></HospitalHero>
      <OurHospitals></OurHospitals>
      <Footer></Footer>
    </div>
  );
};

export default HospitalsPage;
