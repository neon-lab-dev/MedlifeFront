import { useEffect } from "react";
import DiseaseHero from "../Components/DiseasePages/DiseaseHero";
import Patientslove from "../Components/Patientslove";
import Faqs from "../Components/Faq";
import Getintouch from "../Components/Getintouch";
import Officeaddress from "../Components/Officeaddress";
import Footer from "../Components/Footer";
import ChangingLives from "../Components/ChangingLives";
import DiseaseDoc from "../Components/DiseasePages/DiseaseDoc";
import { useNavigate, useParams } from "react-router-dom";
import mainDiseaseContent from "../mainDiseaseContent.json";
import DiseaseInfo from "../Components/DiseasePages/DiseaseInfo";
import OurSpecialities from "../Components/DiseasePages/OurSpecialities";
import SafeDiseaseRemoval from "../Components/DiseasePages/AllSections/SafeDiseaseRemoval";
import Navbar from "../Components/Navbar";
import ReactGA from "react-ga";

const DiseasePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  const { disease } = useParams();
  const naviagate = useNavigate();
  const pages = [
    "proctology",
    "laparoscopy",
    "gynaecology",
    "urology",
    "ent",
    "vascular",
    "aesthetics",
    "orthopedics",
    "ophthalmology",
    "fertility",
    "dentistry",
    "weightloss",
    "dermatology",
  ];

  useEffect(() => {
    if (!pages.includes(disease)) {
      naviagate("/error");
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <DiseaseHero disease={disease} content={mainDiseaseContent[disease]} />
      <DiseaseInfo
        disease={disease}
        content={mainDiseaseContent[disease]}
      ></DiseaseInfo>
      <OurSpecialities content={mainDiseaseContent[disease]}></OurSpecialities>

      <DiseaseDoc docHeading={"Meet Our Doctors"} diseaseName={disease} />
      <SafeDiseaseRemoval
        content={mainDiseaseContent[disease]}
      ></SafeDiseaseRemoval>
      <Patientslove />
      <ChangingLives />
      <Faqs />
      <Getintouch />
      <Officeaddress />
      <Footer />
    </div>
  );
};

export default DiseasePage;
