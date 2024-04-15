import { useEffect } from "react";
import Navbar from "../Navbar";
import aboutUs from "../../Assests/aboutUs.png";
import patient from "../../Assests/About us page icons/patient.png"
import clinics from "../../Assests/About us page icons/clinics.png"
import cities from "../../Assests/About us page icons/cities.png"
import surgeries from "../../Assests/About us page icons/surgeries.png"
import doctors from "../../Assests/About us page icons/doctors.png"
import hospitals from "../../Assests/About us page icons/hospitals.png"
import drVivekKumer from "../../Assests/dr-vivek-kumar 1.png"
import { MdOutlineDone } from "react-icons/md";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

const AboutUs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div className="">
      <Helmet>
        <title>Medlife Easy | About Us</title>
      </Helmet>
      <Navbar></Navbar>



<div className="flex flex-col items-center">
        {/* Breadcrumbs menu */}
        <div className="text-sm breadcrumbs px-5 md:px-10 mt-5 w-[95%]">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            About Us
          </li>
        </ul>
      </div>

<div className="mt-5 w-[95%] lg:w-4/5">
        <div className="">
        <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-4">
          About Us
        </h1>

        <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                Over view of MedLifeEasy
              </h2>
             


              <p className="text-gray-600 font-lato text-justify">
              Medlife Easy acts as a wonderful platform to help the patient or Clients to choose doctors/Hospitals & Wellness Centers etc.

Medlife Easy aims to provide a reliable & seamless connection b/w healthcare provider across various disciplines and the Patients or Clients who requires genuine & valued services for their treatments.
              </p>
            </div>

            <div className="w-full">
            <img className="w-full rounded" src={aboutUs} alt="" />
            </div>
          </div>

          {/* Achievements Section */}
          <div className="px-8 py-4 bg-[#F1F9F8] rounded-xl">
          <h2 className="text-2xl font-medium text-gray-700 mb-7 text-center">
          Unveiling Our Achievements
              </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p className="text-gray-800">Happy Patients</p>
                </div>
                <img src={patient} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p className="text-gray-800">Clinics</p>
                </div>
                <img src={clinics} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p className="text-gray-800">Cities</p>
                </div>
                <img src={cities} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p className="text-gray-800">Surgeries</p>
                </div>
                <img src={surgeries} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p className="text-gray-800">Doctors</p>
                </div>
                <img src={doctors} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p className="text-gray-800">Hospitals</p>
                </div>
                <img src={hospitals} alt="" />
              </div>
          </div>
          </div>


         { /* Meet or Team */}
         <h2 className="text-2xl font-medium text-gray-700 text-center mt-10 mb-3 lg:mb-5">
         Meet Our Team
              </h2>
         <div className="flex justify-center items-center px-5 lg:px-0">
            <div className="shadow-lg p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center gap-5 w-full lg:w-2/3">
                <img className="border-2 border-blue-600 rounded-lg" src={drVivekKumer} alt="" />
                <div>
                    <h1 className="text-2xl font-bold text-gray-700 mb-3 font-lato">Dr. Vivek Kumar</h1>
                    <p className="text-gray-700 font-lato">Managing Director</p>
                    <p className="text-gray-700 font-lato">MedLifeEasy Private Limited</p>
                    <p className="text-gray-700 font-lato mb-4">Ex MD Apollo Trauma Center, Patna</p>

                    <p className="text-gray-700 font-lato text-justify">He is a well known public figure in medical as well as sociopolitical arena.He has more than 15 years of experience in public relations and healthcare management.</p>
                </div>
            </div>
         </div>

        

        {/* Benefits section */}
         <div className="py-16">
      <div className="p-8 bg-[#F6FCFF] rounded-xl">
        <h1 className="text-2xl text-start md:text-center font-semibold font-lato mb-9 text-gray-600">
        Your Benefits With
          <span className="text-teal-600 ml-2">Med Life Easy</span>
        </h1>

        {/* Bullet points (Tick icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20">
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold font-lato text-gray-800">Low Cost Treatment</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold font-lato text-gray-800">Top Rated Doctors</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold font-lato text-gray-800"> Premium Hospital Networks</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold font-lato text-gray-800">Free Post Treatment Consultation</p>
          </div>
          
        </div>
      </div>
        </div>

   

      </div>
      <Footer></Footer>
</div>
    </div>
  );
};

export default AboutUs;
