import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "../styles/Officeaddress.css";
import Footer from "../Footer";
import Form from "../Form";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

const ContactUs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Contact</title>
      </Helmet>
        <Navbar></Navbar>
      <div className="flex items-center flex-col mt-2 mb-10">

        <div className="w-[95%] lg:w-4/5">
        <div className="">
          <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-4 mt-5">
            Contact Us
          </h1>
          <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>

        <div className="">
          {/* <h1 className="text-2xl font-medium text-gray-700 text-center mb-10">Get in touch with us</h1> */}
          <div className="shadow-lg rounded-l-none md:rounded-l-lg py-3 flex gap-20 flex-wrap justify-center">
            <div className="mt-8">
              {/* <div className="bg-gray-200 w-0.5 h-full">

              </div> */}
              <h2 className="text-gray-700 font-lato text-xl font-bold mb-4">
                Corporate Office
              </h2>

              <div className="flex items-center gap-2 mb-7">
                <IoMdCall className="text-[#00A79D] text-3xl"></IoMdCall>
                <p className="flex flex-col font-lato">
                  <a href="tel:+91 995 599 2502">+91 995 599 2502</a>
                  <a href="tel:++91 995 599 2505">+91 995 599 2505</a>
                </p>
              </div>

              <div className="flex items-center gap-2 mb-7">
                <MdAccessTimeFilled className="text-[#00A79D] text-3xl"></MdAccessTimeFilled>
                <p className=" font-lato">10am to 10pm, all days</p>
              </div>

              <div className="flex items-center gap-2 mb-7">
                <MdEmail className="text-[#00A79D] text-3xl"></MdEmail>
                <p className=" font-lato">info@medlifeeasy.com</p>
              </div>

              <div className="flex items-center gap-2 mb-7">
                <FaLocationDot className="text-[#00A79D] text-3xl"></FaLocationDot>
                <p className=" font-lato">
                  H.NO. 2M/94, Bahadurpur Houshing Colony, <br /> Kankarbagh, Patna -
                  800 0026
                </p>
              </div>
            </div>

            
             {/* Right side form */}
          <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex justify-center box-border">
          <div className=" w-full flex justify-center max-w-[550px] ">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>


          </div>
        </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 mb-14">
        <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-5">
          View on map
        </h1>
        <div className="flex justify-center items-center">
          <div className="oa-right-card">
            {/* <img src={map} alt="map"></img> */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.3079224902253!2d85.16769397568636!3d25.594682277457196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59304941fea5%3A0xf9308c05b31a8b5a!2sMED%20LIFE%20EASY%20(Best%20medical%20Treatment)!5e0!3m2!1sen!2sin!4v1703695792300!5m2!1sen!2sin"
              width="90%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
