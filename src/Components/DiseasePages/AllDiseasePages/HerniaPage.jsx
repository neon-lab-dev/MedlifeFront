import Navbar from "../../Navbar";
import { useParams } from "react-router-dom";
import DiseaseHeroSection from "../AllSections/DiseaseHeroSection";
import DiseaseDoc from "../DiseaseDoc";
import ExploreMedLife from "../AllSections/ExploreMedLife";
import Patientslove from "../../Patientslove";
import Blogs from "../../Blogs";
import Faqs from "../../Faq";
import Getintouch from "../../Getintouch";
import Officeaddress from "../../Officeaddress";
import Footer from "../../Footer";
import SafeDiseaseRemoval from "../AllSections/SafeDiseaseRemoval";
import AboutDisease from "../AllSections/AboutDisease";
import diseaseContent from "../../../diseaseContent.json";
import Experience from "../AllSections/Experience";
import { useEffect } from "react";
import ReactGA from 'react-ga';

const HerniaPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  const { subDisease } = useParams();

  const pages = [
    "surgical",
    "mtp",
    "ectopic",
    "molar",
    "miscarriage",
    "bartholin",
    "endometriosis",
    "adenomyosis",
    "pcosPcod",
    "pregnancy",
    "laser",
    "hymenoplasty",
    "vaginoplasty",
    "labiaplasty",
    "vaginal",


    "circumcision",
    "stapler",
    "kidney",
    "hydrocele",
    "eswl",
    "rirs",
    "pcnl",
    "ursl",
    "enlarged",
    "frenuloplasty",
    "balanitis",
    "balanoposthitis",
    "paraphimosis",
    "foreskin",
    "prostatectomy",
    "tight",
    "phimosis",
    "swollen",
    "corn",
    "vasectomy",
    "testicular",
    "epididymal",
    "toenail",


    "hernia",
    "gallbladder",
    "laparoscopy",
    "appendicitis",
    "inguinal",
    "umbilical",


    "piles",
    "fistula",
    "fissure",
    "pilonidal",
    "rectal",


    "uterus",
    "ovarian",
    "tympanoplasty",
    "adenoidectomy",
    "sinus",
    "septoplasty",
    "mastoidectomy",
    "fess",
    "thyroidectomy",
    "tonsillectomy",
    "stapedectomy",
    "myringotomy",
    "throat",
    "ear",
    "vocal",
    "nasal",
    "turbinate",


    "varicose",
    "varicocele",
    "dvt",
    "diabetic",
    "uterine",


    "gynecomastia",
    "liposuction",
    "lipoma",
    "breast-lift",
    "sebaceous",
    "rhinoplasty",
    "breast-augmentation",
    "axillary",
    "tummy",
    "breast-lump",
    "breast-reduction",
    "double",
    "buccal",
    "earlobe",
    "blepharoplasty",
    "beard",
    "cleft",



    "knee-replacement",
    "carpal",
    "acl",
    "meniscus",
    "hip",
    "spine",
    "shoulder-dislocation",
    "shoulder-replacement",
    "rotator",
    "arthroscopy",
    "knee-arthroscopy",
    "shoulder-arthroscopy",
    "total",



    "lasik",
    "cataract",
    "retinal",
    "glaucoma",
    "squint",
    "diabetic-retinopathy",
    "vitrectomy",
    "prk",
    "smile",
    "femto",
    "icl",
    "contoura",
    "phaco",



    "ivf",
    "iui",
    "dental",
    "dentalbraces",
    "teeth",


    "bariatric",
    "spatz",
    "weightloss",


    "botox",
    "vampire",
    "face",
    "hairtransplant",
    "fue",
    "fut",
    "dhi",
    "gfc",
  ];

  if (!pages.includes(subDisease)) {
    alert("wrong URL!!!");
    window.location.href = "/";
  }

  return (
    <div>
      <Navbar></Navbar>
      <DiseaseHeroSection
        subDisease={subDisease}
        content={diseaseContent[subDisease]}
        diseaseName={diseaseContent[subDisease].parentDisease}
      ></DiseaseHeroSection>
      <SafeDiseaseRemoval
        subDisease={subDisease}
        content={diseaseContent[subDisease]}
      ></SafeDiseaseRemoval>
      <DiseaseDoc
        docHeading={`Our ${diseaseContent[subDisease].parentDisease} Doctors`}
        diseaseName={diseaseContent[subDisease].parentDisease}
      ></DiseaseDoc>
      <ExploreMedLife content={diseaseContent[subDisease]}></ExploreMedLife>
      <Experience></Experience>
      <Patientslove></Patientslove>
      <AboutDisease content={diseaseContent[subDisease]}></AboutDisease>
      <Blogs></Blogs>
      <Faqs></Faqs>
      <Getintouch></Getintouch>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
    </div>
  );
};

export default HerniaPage;
