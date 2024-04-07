import logo from "../Assests/logo.svg";
import DropdownMenu from "./DropdownMenu";
import Sidebar from "./Sidebar/Sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import SelectCitySidebar from "./Sidebar/SelectCitySidebar";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

 
  const btmMenus = [
    {
      name: "Proctology",
      list: [
        {
          name: "Piles Treatment",
          link : "piles"
        },
        {
          name: "Fistula Treatment",
          link : "fistula"
        },
        {
          name: "Fissure Treatment",
          link : "fissure"
        },
        {
          name: "Pilonidal Sinus Surgery",
          link : "pilonidal"
        },
        {
          name: "Rectal Prolapse",
          link : "rectal"
        },
      ],
      link: "proctology",
    },
    {
      name: "Laparoscopy",
      list : [
        { name: "Hernia Treatment", link: "hernia" },
        { name: "Appendicitis", link: "appendicitis" },
        { name: "Gallbladder Treatment", link: "gallbladder" },
        { name: "Inguinal Hernia Treatment", link: "inguinal" },
        { name: "Umbilical Hernia Treatment", link: "umbilical" },
      ],
      link: "laparoscopy",
    },

    {
      name: "Gynaecology",
      list: [
        { name: "Surgical Abortion", link: "surgical" },
        { name: "MTP", link: "mtp" },
        { name: "Ectopic Pregnancy Treatment", link: "ectopic" },
        { name: "Molar Pregnancy Treatment", link: "molar" },
        { name: "Uterus Removal", link: "uterus" },
        { name: "Ovarian Cyst", link: "ovarian" },
        { name: "Miscarriage Treatment", link: "miscarriage" },
        { name: "Bartholin Cyst Treatment", link: "bartholin" },
        { name: "Endometriosis Treatment", link: "endometriosis" },
        { name: "Adenomyosis Treatment", link: "adenomyosis" },
        { name: "PCOS-PCOD Treatment", link: "pcos-pcod" },
        { name: "Pregnancy Care Treatment", link: "pregnancy" },
        { name: "Laser Vaginal Tightening", link: "laser" },
        { name: "Hymenoplasty", link: "hymenoplasty" },
        { name: "Vaginoplasty", link: "vaginoplasty" },
        { name: "Labiaplasty", link: "labiaplasty" },
        { name: "Vaginal Wart Removal", link: "vaginal" },
      ],
      link: "gynaecology",
    },
    {
      name: "Urology",
      list: [
        { name: "Circumcision", link: "circumcision" },
        { name: "Stapler Circumcision", link: "stapler" },
        { name: "Kidney Stones Treatment", link: "kidney" },
        { name: "Hydrocele", link: "hydrocele" },
        { name: "ESWL", link: "eswl" },
        { name: "RIRS", link: "rirs" },
        { name: "PCNL", link: "pcnl" },
        { name: "URSL", link: "ursl" },
        { name: "Enlarged Prostate", link: "enlarged" },
        { name: "Frenuloplasty Surgery", link: "frenuloplasty" },
        { name: "Balanitis", link: "balanitis" },
        { name: "Balanoposthitis", link: "balanoposthitis" },
        { name: "Paraphimosis", link: "paraphimosis" },
        { name: "Foreskin Infection", link: "foreskin" },
        { name: "Prostatectomy", link: "prostatectomy" },
        { name: "Tight Foreskin", link: "tight" },
        { name: "Phimosis", link: "phimosis" },
        { name: "Swollen Penis", link: "swollen" },
        { name: "Corn Removal", link: "corn" },
        { name: "Vasectomy", link: "vasectomy" },
        { name: "Testicular Torsion", link: "testicular" },
        { name: "Epididymal cyst", link: "epididymal" },
        { name: "Toenail Removal", link: "toenail" },
      ],
      link: "urology",
    },
    {
      name: "ENT",
      list: [
        { name: "Tympanoplasty", link: "tympanoplasty" },
        { name: "Adenoidectomy", link: "adenoidectomy" },
        { name: "Sinus Treatment", link: "sinus" },
        { name: "Septoplasty", link: "septoplasty" },
        { name: "Mastoidectomy", link: "mastoidectomy" },
        { name: "FESS Surgery", link: "fess" },
        { name: "Thyroidectomy", link: "thyroidectomy" },
        { name: "Tonsillectomy", link: "tonsillectomy" },
        { name: "Stapedectomy", link: "stapedectomy" },
        { name: "Myringotomy", link: "myringotomy" },
        { name: "Throat Surgery", link: "throat" },
        { name: "Ear Surgery", link: "ear" },
        { name: "Vocal Cord Polyps", link: "vocal" },
        { name: "Nasal Polyps", link: "nasal" },
        { name: "Turbinate Reduction", link: "turbinate" },
      ],
      link: "ent",
    },
    {
      name: "Vascular",
      list: [
        { name: "Varicose Veins Treatment", link: "varicose" },
        { name: "Varicocele Treatment", link: "varicocele" },
        { name: "DVT Treatment", link: "dvt" },
        { name: "Diabetic Foot Ulcer Treatment", link: "diabetic" },
        { name: "Uterine Fibroids", link: "uterine" },
      ],
      link: "vascular",
    },
    {
      name: "Aesthetics",
      list: [
        { name: "Gynecomastia", link: "gynecomastia" },
        { name: "Liposuction", link: "liposuction" },
        { name: "Lipoma Surgery", link: "lipoma" },
        { name: "Breast Lift Surgery", link: "breast-lift" },
        { name: "Sebaceous Cyst Surgery", link: "sebaceous" },
        { name: "Rhinoplasty", link: "rhinoplasty" },
        { name: "Breast Augmentation Surgery", link: "breast-augmentation" },
        { name: "Axillary Breast", link: "axillary" },
        { name: "Tummy Tuck", link: "tummy" },
        { name: "Breast Lump", link: "breast-lump" },
        { name: "Breast Reduction", link: "breast-reduction" },
        { name: "Double Chin", link: "double" },
        { name: "Buccal Fat", link: "buccal" },
        { name: "Earlobe Repair", link: "earlobe" },
        { name: "Blepharoplasty", link: "blepharoplasty" },
        { name: "Beard Transplant", link: "beard" },
        { name: "Cleft Lip", link: "cleft" },
      ],
      link: "aesthetics",
    },
    {
      name: "Orthopedics",
      list: [
        { name: "Knee Replacement", link: "knee-replacement" },
        { name: "ACL Tear Treatment", link: "acl" },
        { name: "Hip Replacement Surgery", link: "hip" },
        { name: "Spine Surgery", link: "spine" },
        { name: "Shoulder Dislocation", link: "shoulder-dislocation" },
        { name: "Shoulder Replacement", link: "shoulder-replacement" },
        { name: "Rotator Cuff Repair", link: "rotator" },
        { name: "Arthroscopy Surgery", link: "arthroscopy" },
        { name: "Knee Arthroscopy", link: "knee-arthroscopy" },
        { name: "Shoulder Arthroscopy", link: "shoulder-arthroscopy" },
        { name: "Total Knee Replacement", link: "total" },
        { name: "Carpal Tunnel Syndrome", link: "carpal" },
        { name: "Meniscus Tear Treatment", link: "meniscus" },
      ],
      link: "orthopedics",
    },
    {
      name: "Ophthalmology",
      list: [
        { name: "Lasik Eye Surgery", link: "lasik" },
        { name: "Cataract Surgery", link: "cataract" },
        { name: "Retinal Detachment", link: "retinal" },
        { name: "Glaucoma Treatment", link: "glaucoma" },
        { name: "Squint Surgery", link: "squint" },
        { name: "Diabetic Retinopathy", link: "diabetic" },
        { name: "Vitrectomy", link: "vitrectomy" },
        { name: "PRK Lasik", link: "prk" },
        { name: "SMILE Lasik surgery", link: "smile" },
        { name: "FEMTO Lasik surgery", link: "femto" },
        { name: "ICL surgery", link: "icl" },
        { name: "Contoura Vision", link: "contoura" },
        { name: "Phaco Surgery", link: "phaco" },
      ],
      link: "ophthalmology",
    },
    {
      name: "Fertility",
      list: [
  { name: "IVF Treatment", link: "ivf" },
  { name: "IUI Treatment", link: "iui" }
],
      link: "fertility",
    },
    {
      name: "Dentistry",
      list: [
        { name: "Dental Implant Surgery", link: "dental" },
        { name: "Dental Braces", link: "dental" },
        { name: "Teeth Aligners", link: "teeth" }
      ],
      link: "dentistry",
    },
    {
      name: "Weight Loss",
      list: [
        { name: "Bariatric Surgery", link: "bariatric" },
        { name: "SPATZ Intragastric Balloon", link: "spatz" },
        { name: "Weightloss Surgery", link: "weightloss" }
      ],
      link: "weightloss",
    },
    {
      name: "Dermatology",
      list: [
        { name: "Botox", link: "botox" },
        { name: "Vampire Facial", link: "vampire" },
        { name: "Face Threadlift", link: "face" },
        { name: "Hair Transplant", link: "hair" },
        { name: "FUE", link: "fue" },
        { name: "FUT", link: "fut" },
        { name: "DHI Hair Transplant", link: "dhi" },
        { name: "GFC Hair Transplant", link: "gfc" }
      ],
      link: "dermatology",
    },
  ];
  const navigate = useNavigate();

  const searchValues = [
    { name: "Proctology", link: "/proctology" },
    { name: "Laparoscopy", link: "/laparoscopy" },
    { name: "Gynaecology", link: "/gynaecology" },
    { name: "ENT", link: "/ent" },
    { name: "Vascular", link: "/vascular" },
    { name: "Aesthetics", link: "/aesthetics" },
    { name: "Orthopedics", link: "/orthopedics" },
    { name: "Ophthalmology", link: "/ophthalmology" },
    { name: "Fertility", link: "/fertility" },
    { name: "Dentistry", link: "/dentistry" },
    { name: "Weight Loss", link: "/weight Loss" },
    { name: "Dermatology", link: "/dermatology" },

    // Sub disease
    { name: "Piles Treatment", link: "/treatment/piles" },
    { name: "Fistula Treatment", link: "/treatment/piles" },
    { name: "Fissure Treatment", link: "/treatment/piles" },
    { name: "Pilonidal Sinus Surgery", link: "/treatment/piles" },
    { name: "Rectal Prolapse", link: "/treatment/piles" },

    { name: "Hernia Treatment", link: "/treatment/hernia" },
    { name: "Appendicitis", link: "/treatment/appendicitis" },
    { name: "Gallbladder Treatment", link: "/treatment/gallbladder" },
    { name: "Inguinal Hernia Treatment", link: "/treatment/inguinal" },
    { name: "Umbilical Hernia Treatment", link: "/treatment/umbilical" },
    { name: "Rectal Prolapse Treatment", link: "/treatment/rectal" },

    { name: "Uterus Removal", link: "/treatment/uterus" },
    { name: "Ovarian Cyst", link: "/treatment/ovarian" },

    { name: "Tympanoplasty", link: "/treatment/tympanoplasty" },
    { name: "Adenoidectomy", link: "/treatment/adenoidectomy" },
    { name: "Sinus Treatment", link: "/treatment/sinus" },
    { name: "Septoplasty", link: "/treatment/septoplasty" },
    { name: "Mastoidectomy", link: "/treatment/mastoidectomy" },
    { name: "FESS Surgery", link: "/treatment/fess" },
    { name: "Thyroidectomy", link: "/treatment/thyroidectomy" },
    { name: "Tonsillectomy", link: "/treatment/tonsillectomy" },
    { name: "Stapedectomy", link: "/treatment/stapedectomy" },
    { name: "Myringotomy", link: "/treatment/myringotomy" },
    { name: "Throat Surgery", link: "/treatment/throat" },
    { name: "Ear Surgery", link: "/treatment/ear" },
    { name: "Vocal Cord Polyps", link: "/treatment/vocal" },
    { name: "Nasal Polyps", link: "/treatment/nasal" },
    { name: "Turbinate Reduction", link: "/treatment/turbinate" },

    { name: "Varicose Veins Treatment", link: "/treatment/varicose" },
    { name: "Varicocele Treatment", link: "/treatment/varicocele" },

    { name: "Gynecomastia", link: "/treatment/gynecomastia" },
    { name: "Liposuction", link: "/treatment/liposuction" },
    { name: "Hair Transplant", link: "/treatment/hair" },

    { name: "Knee Replacement", link: "/treatment/kneet" },
    { name: "ACL Tear Treatment", link: "/treatment/acl" },
    { name: "Hip Replacement Surgery", link: "/treatment/hip" },
    { name: "Spine Surgery", link: "/treatment/spine" },

    { name: "Lasik Eye Surgery", link: "/treatment/lasik" },
    { name: "Cataract Surgery", link: "/treatment/cataract" },
    { name: "Phaco Surgery", link: "/treatment/phaco" },

    { name: "IVF Treatment", link: "/treatment/ivf" },
    { name: "IUI Treatment", link: "/treatment/iui" },
    { name: "Dental Implant Surgery", link: "/treatment/dental" },
    { name: "Dental Braces", link: "/treatment/dental" },
    { name: "Teeth Aligners", link: "/treatment/teeth" },
    { name: "Bariatric Surgery", link: "/treatment/bariatric" },
    { name: "Intragastric Balloon", link: "/treatment/intragastric" },
    { name: "Botox", link: "/treatment/botox" },
    { name: "Vampire Facial", link: "/treatment/vampire" },
    { name: "Face Threadlift", link: "/treatment/face" },
    { name: "Hair Transplant", link: "/treatment/hair" },
    { name: "FUE", link: "/treatment/fue" },
    { name: "FUT", link: "/treatment/fut" },
    { name: "DHI Hair Transplant", link: "/treatment/dhi" },
    { name: "GFC Hair Transplant", link: "/treatment/gfc" },
  ];

  const [searchedResult, setSearchedResult] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const inputRef = useRef(null);
  const suggestionRef = useRef(null);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchedResult(query);

    const suggestions = searchValues
      .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);

    if (suggestions.length === 0) {
      suggestions.push({ name: "No Results Found !!!" });
    }

    setSuggestions(suggestions);
    if (query === "") {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log("suggestion.link", suggestion.link);
    navigate(suggestion.link);

    setSearchedResult("");
    setSuggestions([]);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <div className=" bg-[#00a79d] py-[12px] flex items-center justify-center">
        <div className="w-[95%] lg:w-[90%] flex justify-between items-center pr-[13px]">
          <Link to={"/"}>
            <img className="" src={logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:block relative">
              <input
                ref={inputRef}
                value={searchedResult}
                onChange={handleSearch}
                onClick={handleSearch}
                type="text"
                className="bg-white pl-9 py-2 rounded-lg w-80 focus:outline-none"
                placeholder="Search disease or treatment"
              />
              <IoSearchOutline className="text-2xl absolute top-2  left-2 text-gray-500"></IoSearchOutline>
              {suggestions.length > 0 && (
                <div
                  ref={suggestionRef}
                  className={`absolute mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-md z-40 `}
                >
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion?.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to={"/doctors"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Doctors
              </Link>
              <Link
                to={"/emergencyService"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Services
              </Link>
              <Link
                to={"/hospitals"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Hospitals
              </Link>
              <Link
                to={"/blogs"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Blogs
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SelectCitySidebar></SelectCitySidebar>

            <div className="flex xl:hidden">
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00a79d] p-2 flex justify-center md:hidden">
        <div className="relative w-full flex justify-center">
          <input
            value={searchedResult}
            onChange={handleSearch}
            type="text"
            className="bg-white pl-9 py-3 rounded-lg w-[90%] md:w-80 focus:outline-none"
            placeholder="Search disease, doctors, treatment"
          />
          <IoSearchOutline className="text-2xl absolute top-3 left-[6.5%] text-gray-500" />
          {suggestions.length > 0 && (
            <div className="absolute mt-14 w-[90%] bg-white border border-gray-300 rounded-md shadow-md z-40">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion?.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden xl:flex justify-center bg-white">
        <div className=" flex justify-between w-[90%]">
          {btmMenus.map((menu, ind) => (
            <DropdownMenu
              key={ind}
              st={"btm"}
              link={menu.link}
              name={menu.name}
              list={menu.list}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
