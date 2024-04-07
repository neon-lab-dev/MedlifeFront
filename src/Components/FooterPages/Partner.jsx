import React, { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import handshake from "../../Assests/handshake-businessmen 1.png";
import { IoIosArrowDown } from "react-icons/io";
import Form from "../Form";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

const Partner = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Our Partner</title>
      </Helmet>
        <Navbar></Navbar>
<div className="flex items-center flex-col mt-2 mb-10">

        {/* Breadcrumbs menu */}
        <div className="text-sm breadcrumbs w-[89.5%]">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Partner With Us</li>
          </ul>
        </div>


        <div className="w-[95%] lg:w-4/5 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-lato font-semibold text-gray-700 text-center mt-5 lg:mt-0 mb-4">
            Partner With Us
          </h1>
          <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>

          <h1 className="text-2xl font-semibold text-gray-700 text-center mb-3">
            Looking for Partnership with MEDLIFEEASY?
          </h1>
          <p className="text-gray-600 font-lato mb-6 text-center">
          MedLifeEasy private limited is a leading company as an online healthcare service provider. We enable our user to book treatments, choose doctors, hospitals & wellness centers. We also have empanelled with various hospitals, clinics, wellness center, diagnostic center & labs. To give your business a boost.
          </p>
        </div>

         {/* Right side form */}
        <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex justify-center mt-3 box-border">
          <div className=" w-full flex justify-center max-w-[550px]">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>


      </div>
</div>

      <Footer></Footer>
    </div>
  );
};

export default Partner;
