import React, { useState } from "react";
import piles from "../Assests/surgeries image/piles (2).png";
import analFistula from "../Assests/surgeries image/Anal Fistula.png";
import analFissure from "../Assests/surgeries image/Anal Fissure.png";
import gallstones from "../Assests/surgeries image/Gallstone.png";
import kidneyStones from "../Assests/surgeries image/Kidney Stones.png";
import cotaract from "../Assests/surgeries image/Cataract.png";
import lasikEye from "../Assests/surgeries image/Lasik eye surgery.png";
import hernia from "../Assests/surgeries image/Hernia (2).png";
import Enlarged from "../Assests/surgeries image/enlarged prostate.png";
import LaserCircumcisio from "../Assests/surgeries image/Laser Circumcision.png";
import UterineFibroid from "../Assests/surgeries image/Uterine Fibroid.png";
import Hymenoplasty from "../Assests/surgeries image/Hymenoplasty.png";
import IVF from "../Assests/surgeries image/IVF.png";
import IUI from "../Assests/surgeries image/IUI.png";
import Gynecomastia from "../Assests/surgeries image/Gynecomastia.png";
import Liposuction from "../Assests/surgeries image/Liposuction.png";
import Lipoma from "../Assests/surgeries image/Lipoma.png";
import AclTear from "../Assests/surgeries image/Acl Tear.png";
import SpineSurgery from "../Assests/surgeries image/Spine Surgery.png";
import VaricoseVeins from "../Assests/surgeries image/Varicose Veins.png";
import DeepVeinThrombosis from "../Assests/surgeries image/Deep Vein Thrombosis.png";
import DiabeticFootUlcer from "../Assests/surgeries image/Diabetic Foot Ulcer.png";
import Varicocele from "../Assests/surgeries image/Varicocele.png";
import ZSRCircumcision from "../Assests/surgeries image/ZSR Circumcision.png";
import PilonidalSinus from "../Assests/surgeries image/Pilonidal Sinus.png";
import KneeReplacement from "../Assests/surgeries image/KneeReplacement.png";
import HipReplacement from "../Assests/surgeries image/HipReplacement.png";
import Abortion from "../Assests/surgeries image/Abortion.png";
import Hysterectomy from "../Assests/surgeries image/Hysterectomy.png";
import Vaginoplasty from "../Assests/surgeries image/Vaginoplasty.png";
import BreastAugmentation from "../Assests/surgeries image/Breast Augmentation.png";
import BreastLift from "../Assests/surgeries image/Breast Lift.png";
import BreastLump from "../Assests/surgeries image/Breast Lump.png";
import BreastReduction from "../Assests/surgeries image/Breast Reduction.png";
import HairTransplant from "../Assests/surgeries image/Hair Transplant.png";
import Rhinoplasty from "../Assests/surgeries image/Rhinoplasty.png";
import MTP from "../Assests/surgeries image/MTP.png";
import Labiaplasty from "../Assests/surgeries image/Labiaplasty.png";
import Endometriosis from "../Assests/surgeries image/Endometriosis.png";
import EctopicPregnancy from "../Assests/surgeries image/Ectopic Pregnancy.png";
import UmbilicalHernia from "../Assests/surgeries image/Umbilical Hernia.png";
import InguinalHernia from "../Assests/surgeries image/Inguinal Hernia.png";
import ShoulderDislocation from "../Assests/surgeries image/Shoulder Dislocation.png";
import CarpalTunnelSyndrome from "../Assests/surgeries image/Carpal Tunnel Syndrome.png";
import SebaceousCyst from "../Assests/surgeries image/Sebaceous Cyst.png";
import DentalImplant from "../Assests/surgeries image/Dental Implant.png";
import TeethAligners from "../Assests/surgeries image/Teeth Aligners.png";
import DentalBraces from "../Assests/surgeries image/Dental-Braces 1.png";
import Mastoidectomy from "../Assests/surgeries image/Mastoidectomy 1.png";
import Hydrocelectomy from "../Assests/surgeries image/Hydrocelectomy 1.png";
import Appendectomy from "../Assests/surgeries image/Appendectomy 1.png";
import ShoulderReplacement from "../Assests/surgeries image/Shoulder-Replacement 1.png";
import MeniscusTear from "../Assests/surgeries image/Meniscus-Tear 1.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Surgeries = () => {
  const surgeriesData = [
    { image: piles, name: "Piles", link: "treatment/piles" },
    { image: analFistula, name: "Anal Fistula", link: "treatment/fistula" },
    { image: analFissure, name: "Anal Fissure", link: "treatment/fissure" },
    { image: gallstones, name: "Gallstones", link: "treatment/gallbladder" },
    { image: kidneyStones, name: "Kidney Stones", link: "treatment/kidney" },
    { image: cotaract, name: "Cataract", link: "treatment/cataract" },
    { image: lasikEye, name: "Lasik Eye Surgery", link: "treatment/lasik" },
    { image: hernia, name: "Hernia", link: "treatment/hernia" },
    {
      image: Enlarged,
      name: "Enlarged Prostate (BPH)",
      link: "treatment/enlarged",
    },
    //trying some changes
    {
      image: LaserCircumcisio,
      name: "Laser Circumcisio",
      link: "treatment/laser",
    },
    {
      image: UterineFibroid,
      name: "Uterine Fibroid",
      link: "treatment/uterine",
    },
    {
      image: Hymenoplasty,
      name: "Hymenoplasty",
      link: "treatment/hymenoplasty",
    },
    { image: IVF, name: "IVF", link: "treatment/ivf" },
    { image: IUI, name: "IUI", link: "treatment/iui" },
    {
      image: Gynecomastia,
      name: "Gynecomastia",
      link: "treatment/gynecomastia",
    },
    { image: Liposuction, name: "Liposuction", link: "treatment/liposuction" },
    { image: Lipoma, name: "Lipoma", link: "treatment/lipoma" },
    { image: AclTear, name: "AclTear", link: "treatment/acl" },

    { image: SpineSurgery, name: "Spine Surgery", link: "treatment/spine" },
    { image: VaricoseVeins, name: "VaricoseVeins", link: "treatment/varicose" },
    {
      image: DeepVeinThrombosis,
      name: "Deep Vein Thrombosis",
      link: "treatment/piles",
    }, // don't have
    {
      image: DiabeticFootUlcer,
      name: "Diabetic Foot Ulcer",
      link: "treatment/diabetic",
    },
    { image: Varicocele, name: "Varicocele", link: "treatment/varicocele" },
    {
      image: ZSRCircumcision,
      name: "ZSR Circumcision",
      link: "treatment/piles",
    }, // don't have
    {
      image: PilonidalSinus,
      name: "Pilonidal Sinus",
      link: "treatment/pilonidal",
    },
    {
      image: KneeReplacement,
      name: "Knee Replacement",
      link: "treatment/knee",
    },
    { image: HipReplacement, name: "Hip Replacement", link: "treatment/hip" },

    { image: Abortion, name: "Abortion", link: "treatment/abortion" },
    { image: Hysterectomy, name: "Hysterectomy", link: "treatment/piles" }, // don't have
    {
      image: Vaginoplasty,
      name: "Vaginoplasty",
      link: "treatment/vaginoplasty",
    },
    {
      image: BreastAugmentation,
      name: "Breast Augmentation",
      link: "treatment/breast",
    },
    { image: BreastLift, name: "Breast Lift", link: "treatment/breast" },
    { image: BreastLump, name: "Breast Lump", link: "treatment/breast" },
    {
      image: BreastReduction,
      name: "Breast Reduction",
      link: "treatment/breast",
    },
    { image: HairTransplant, name: "Hair Transplant", link: "treatment/hair" },
    { image: Rhinoplasty, name: "Rhinoplasty", link: "treatment/rhinoplasty" },

    { image: MTP, name: "MTP", link: "treatment/mtp" },
    { image: Labiaplasty, name: "Labiaplasty", link: "treatment/labiaplasty" },
    {
      image: Endometriosis,
      name: "Endometriosis",
      link: "treatment/endometriosis",
    },
    {
      image: EctopicPregnancy,
      name: "Ectopic Pregnancy",
      link: "treatment/ectopic",
    },
    {
      image: UmbilicalHernia,
      name: "Umbilical Hernia",
      link: "treatment/umbilical",
    },
    {
      image: InguinalHernia,
      name: "Inguinal Hernia",
      link: "treatment/inguinal",
    },
    {
      image: ShoulderDislocation,
      name: "Shoulder Dislocation",
      link: "treatment/shoulder",
    },
    {
      image: CarpalTunnelSyndrome,
      name: "Carpal Tunnel Syndrome",
      link: "treatment/carpal",
    },
    {
      image: SebaceousCyst,
      name: "Sebaceous Cyst",
      link: "treatment/sebaceous",
    },

    { image: DentalImplant, name: "Dental Implant", link: "treatment/dental" },
    { image: TeethAligners, name: "Teeth Aligners", link: "treatment/teeth" },
    { image: DentalBraces, name: "Dental Braces", link: "treatment/dental" },
    {
      image: Mastoidectomy,
      name: "Mastoidectomy",
      link: "treatment/mastoidectomy",
    },
    { image: Hydrocelectomy, name: "Hydrocelectomy", link: "treatment/piles" }, // don't have
    { image: Appendectomy, name: "Appendectomy", link: "treatment/piles" }, // don't have
    {
      image: ShoulderReplacement,
      name: "Shoulder Replacement",
      link: "treatment/shoulder",
    },
    { image: MeniscusTear, name: "Meniscus Tear", link: "treatment/meniscus" },
  ];

  const [showAllCards, setShowAllCards] = useState(false);

  const handleClick = () => {
    setShowAllCards(!showAllCards);
  };

  const displayedSurgeries = showAllCards
    ? surgeriesData
    : surgeriesData.slice(0, 8);

  return (
    <div className="py-10 flex justify-center">
      <div className="bg-white shadow-md w-[95%] md:w-[90%] rounded-xl p-5 md:p-10 border-t border-gray-100 flex flex-col gap-[50px] items-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800  text-center ">
          Surgeries We Perform
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8  w-full max-w-[90%] gap-9">
          {displayedSurgeries.map((surgery, index) => (
            <Link
              to={`/${surgery?.link}`}
              key={index}
              className="flex flex-col items-center"
            >
              <img
                className="mb-0.5 border border-[#E1E3E4] rounded-lg bg-[#FFF] w-20 p-2"
                src={surgery.image}
                alt={surgery.name}
              />
              <p className="text-gray-800 text-center">{surgery.name}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center text-lg px-3 py-2 rounded-lg border border-[#00A79D] text-[#00A79D]"
            onClick={handleClick}
          >
            {showAllCards ? "View Less" : "View More"} <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surgeries;
