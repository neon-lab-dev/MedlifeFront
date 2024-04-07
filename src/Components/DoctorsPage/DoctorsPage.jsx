import React, { useEffect } from "react";
import Navbar from "../Navbar";
import DoctorsHeader from "./DoctorsHeader";
import OurDoctors from "./OurDoctors";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

const DoctorsPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Doctors</title>
      </Helmet>
      <Navbar></Navbar>
      <DoctorsHeader></DoctorsHeader>
    <OurDoctors></OurDoctors>
      <Footer></Footer>
    </div>
  );
};

export default DoctorsPage;
