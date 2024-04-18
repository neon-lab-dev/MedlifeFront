import { useEffect, useRef, useState } from "react";
import phone from "../../Assests/Modal images and icons/phone.png";
import doctor from "../../Assests/Modal images and icons/doctor.png";
import customer from "../../Assests/Modal images and icons/customer-care 1.png";
import doctor1 from "../../Assests/Modal images and icons/doctor 1.png";
import "../styles/Form.css";
import { IoIosArrowDown } from "react-icons/io";
import { Toaster, toast } from "sonner";
import { twMerge } from "tailwind-merge";
import ReactGA from 'react-ga';
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import CityDropdown from "../CityDropdown";

const Modal = ({ text, className }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

  const districts = [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Khagaria",
    "Kishanganj",
    "Kaimur",
    "Katihar",
    "Lakhisarai",
    "Madhubani",
    "Munger",
    "Madhepura",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Sheohar",
    "Sheikhpura",
    "Saran",
    "Sitamarhi",
    "Supaul",
    "Siwan",
    "Vaishali",
    "West Champaran",
  ];

  // All the disease names
  const disease = [
    "Select Disease",
    "Proctology",
    "Piles Treatment",
    "Fistula Treatment",
    "Pilonidal Sinus Treatment",
    "Rectal Prolapse",

    "Laparoscopy",
    "Hernia Treatment",
    "Gallbladder Treatment",
    "Inguinal Hernia Treatment",
    "Umbilical Hernia Treatment",

    "Gynaecology",
    "Uterus Removal",
    "Ovarian Cyst",

    "ENT",
    "Tympanoplasty",
    "Adenoidectomy",
    "Sinus Treatment",
    "Septoplasty",
    "Mastoidectomy",
    "FESS Surgery",
    "Thyroidectomy",
    "Tonsillectomy",
    "Stapedectomy",
    "Myringotomy",
    "Throat Surgery",
    "Ear Surgery",
    "Vocal Cord Polyps",
    "Nasal Polyps",
    "Turbinate Reduction",

    "Vascular",
    "Varicose Veins Treatment",
    "Varicocele Treatment",

    "Aesthetics",
    "Gynecomastia",
    "Liposuction",
    "Hair Transplant",

    "Orthopedics",
    "Knee Replacement",
    "ACL Tear Treatment",
    "Hip Replacement Surgery",
    "Spine Surgery",

    "Ophthalmology",
    "Lasik Eye Surgery",
    "Cataract Surgery",
    "Phaco Surgery",

    "Fertility",
    "IVF Treatment",
    "IUI Treatment",

    "Dentistry",
    "Dental Implant Surgery",
    "Dental Braces",
    "Teeth Aligners",

    "Weight Loss",
    "Bariatric Surgery",
    "Intragastric Balloon",
    "Weightloss Surgery",

    "Dermatology",
    "Botox",
    "Vampire Facial",
    "Face Threadlift",
    "Hair Transplant",
    "FUE",
    "FUT",
    "DHI Hair Transplant",
    "GFC Hair Transplant",
  ];

  const axiosBaseUrl = useAxiosBaseUrl();

  const handleSubmit = (e) => {
    e.preventDefault();
    const patientName = e.target.patientName.value;
    const mobileNumber = e.target.mobileNumber.value;
    if (
      !patientName ||
      !mobileNumber ||
      !selectedCity ||
      !selectedDisease ||
      selectedCity === "Select City" ||
      selectedCity === "Select Disease"
    ) {
      toast.error("Please fill all the fields");

      return;
    }
    axiosBaseUrl
      .post("/api/v1/createlead", {
        name: patientName,
        mobileNumber: mobileNumber,
        city: selectedCity,
        disease: selectedDisease,
      })
      .then((response) => {
        if (response.data.message) {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({}), 3000)
          );
          toast.promise(promise, {
            loading: "Loading...",
            success: () => {
              return "Your consultation has been booked and we will get back to you soon.";
            },
            error: "Error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  useEffect(() => {
    let modalInterval;

    const startModalInterval = () => {
      modalInterval = setInterval(() => {
        openModal();
      }, 60000);
    };

    const resetModalInterval = () => {
      clearInterval(modalInterval);
      startModalInterval();
    };

    startModalInterval();

    return () => clearInterval(modalInterval);

  }, []);

  return (
    <div className="">
      <button
        className={twMerge(
          "border border-[#00a0aa] bg-[#00a0aa] rounded-lg text-white",
          className
        )}
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        {text}
      </button>
      <dialog ref={modalRef} id="my_modal_4" className="modal">
        <div className="modal-box bg-white w-11/12 md:w-5/6 max-w-6xl p-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-1 lg:right-2 top-[10px] lg:top-4 text-white">
              ✕
            </button>
          </form>
          <div className="bg-[#00a79d] p-4 mb-3">
            <h1 className="md:text-2xl font-semibold text-white text-center text-sm">
              Book Your Complimentary Consultation Now
            </h1>
          </div>

          <div>
            <div className="mb-3 px-2">
              <h1 className="text-gray-700 font-semibold text-xl mb-1 text-center lg:text-start">
                Elevating Your Surgical Experience
              </h1>
              <p className="text-gray-700 text-center lg:text-start">
                Connect with our expert surgeon to discuss over 50+ medical
                conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pr-3">
              <div className="lg:grid grid-cols-2 gap-5 col-span-2 relative hidden border-gray-300 pr-5 border-r-2 border-dotted">
                <div className="">
                  <div className="bg-[#50dbcf] pt-5 pr-5 h-[350px]">
                    <div className="bg-[#cfe5ff] h-[330px]">
                      <img className="h-[330px]" src={doctor1} alt="" />
                    </div>
                  </div>

                  <div className="bg-gray-200 w-0.5 h-32 absolute right-[350px] bottom-[200px]"></div>
                  {/* Bottom card */}
                  <div className="w-[70%] absolute bottom-2">
                    <div className="bg-[#FCFCFF] shadow py-3 px-6 flex justify-between items-center">
                      <div className="border-r-2 pr-12">
                        <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                          1000+
                        </h1>
                        <p className="text-sm md:text-base">DOCTORS</p>
                      </div>
                      <div className="border-r-2 pr-12">
                        <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                          2000+
                        </h1>
                        <p className="text-sm md:text-base">HOSPITALS</p>
                      </div>
                      <div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                          500+
                        </h1>
                        <p className="text-sm md:text-base">TREATMENTS</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-7 z-10">
                  <div className="flex items-center gap-3">
                    <div className="timeline-middle shadow bg-white w-10 h-10 rounded-full p-2">
                      <img src={phone} alt="" />
                    </div>
                    <div className="timeline-end">
                      Share details for prompt contact.
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="timeline-middle shadow bg-white w-10 h-10 rounded-full p-2">
                      <img src={customer} alt="" />
                    </div>
                    <div className="timeline-end">
                      Understand your symptoms thoroughly
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="timeline-middle shadow bg-white w-10 h-10 rounded-full p-2">
                      <img src={doctor} alt="" />
                    </div>
                    <div className="timeline-end">
                      Swiftly schedule your consultation.
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="-mt-0 lg:-mt-[75px] px-2">
                <div className="w-full shadow-lg rounded-3xl mb-3 border-t border-gray-100">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center gap-3 bg-white p-3 rounded-3xl w-full"
                  >
                    <div className="text-[#5854a8] text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-1">
                      Book Free Consultation
                    </div>
                    <input
                      type="text"
                      id="patientName"
                      value={patientName}
                      name="patientName"
                      placeholder="Patient Name "
                      className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                    <input
                      type="tel"
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      name="mobileNumber"
                      value={mobileNumber}
                      className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />

                    <div className="relative inline-block text-left w-full">
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full h-12 rounded-lg"
                      >
                        {districts.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <IoIosArrowDown></IoIosArrowDown>
                      </div>
                    </div>

                    <CityDropdown onCityChange={setSelectedCity} type="city" />

                    <div className="relative inline-block text-left w-full">
                      <select
                        value={selectedDisease}
                        onChange={(e) => {
                          setSelectedDisease(e.target.value);
                        }}
                        className="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full h-12 rounded-lg"
                      >
                        {disease.map((disease, index) => (
                          <option key={index} value={disease}>
                            {disease}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <IoIosArrowDown></IoIosArrowDown>
                      </div>
                    </div>

                    <button
                      className="bg-[#00a79d] px-4 w-full h-12 rounded-lg text-white"
                      type="submit"
                    >
                      Book Now
                    </button>
                    <Toaster position="top-center" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
