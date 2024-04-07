import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import logo from "../../Assests/logo.svg";
import ReactGA from 'react-ga';

const Sidebar = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
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

  // Dropdown functionality
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeDrawer = () => {
    const isSidebarOpen = document.getElementById("my-drawer-4");
    if (isSidebarOpen) {
      isSidebarOpen.checked = false;
    }
  };

  const handleLinkClick = () => {
    closeDrawer();
    setOpenDropdown(null);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button text-3xl cursor-pointer text-white"
        >
          <IoMdMenu></IoMdMenu>
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="w-80 min-h-full bg-white text-base-content">
          <div className="bg-teal-500 p-3">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img className="" src={logo} alt="logo" />
              </Link>

              <RxCross2
                onClick={closeDrawer}
                className="text-white text-3xl cursor-pointer"
              ></RxCross2>
            </div>

            <div className="flex justify-between items-center mt-3">
              <Link
                onClick={handleLinkClick}
                to={"/doctors"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Doctors
              </Link>
              <Link
                onClick={handleLinkClick}
                to={"/emergencyService"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Services
              </Link>
              <Link
                onClick={handleLinkClick}
                to={"/hospitals"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Hospitals
              </Link>
              <Link
                onClick={handleLinkClick}
                to={"/blogs"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Blogs
              </Link>
            </div>
          </div>

          <div className="p-4">
            {btmMenus.map((menu, id) => (
              <div key={id} className="text-left">
                <div className="flex">
                  <div
                    // to={`/${menu.link}`}
                    type="button"
                    onClick={() => toggleDropdown(id)}
                    className="cursor-pointer flex items-center justify-between w-full text-base font-medium text-gray-700 mb-5"
                  >
                    {menu.name}
                    <IoIosArrowDown></IoIosArrowDown>
                  </div>
                </div>

                {openDropdown === id && (
                  <div className={`origin-top-right absolute right-20 w-56 -mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 h-40 overflow-y-scroll ${menu?.list?.length.length > 5 ? 'h-52 overflow-y-scroll' : ''}`}>
                    <div
                      className="flex flex-col gap-2 p-3"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {menu?.list && menu?.list?.length > 0 ? (
                        menu?.list?.map((listItem, index) => (
                          <Link
                            onClick={handleLinkClick}
                            className="hover:bg-gray-100 transition duration-300 p-2 rounded-md"
                            to={`/treatment/${listItem?.link}`}
                            key={index}
                          >
                            <li className="text-gray-700">{listItem?.name}</li>
                          </Link>
                        ))
                      ) : (
                        <li>No items in the list</li>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
