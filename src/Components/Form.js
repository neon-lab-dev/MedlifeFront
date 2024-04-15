import { useState } from "react";
import CityDropdown from "./CityDropdown.js";
import "./styles/Form.css";
import { IoIosArrowDown } from "react-icons/io";
import useAxiosBaseUrl from "../hooks/useBaseUrl.jsx";
import { Toaster, toast } from "sonner";

const Form = ({ header }) => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState();
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
    "West Champaran"
]

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
    if (mobileNumber.length < 10) {
      toast.error("Mobile number should be 10 digits");
      return;
    } else if (mobileNumber.length > 10) {
      toast.error("Mobile number should not be over 10 digits");
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

  return (
    <div
      style={{ maxWidth: "550px" }}
      className="w-full shadow-lg rounded-3xl mb-3 h-full"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 bg-white p-7 rounded-3xl w-full h-full justify-evenly"
      >
        <div
          className="text-center text-2xl font-bold text-[#5854a8] mb-1"
          style={{ fontSize: "clamp(24px, 2vw, 48px)" }}
        >
          {header}
        </div>
        <input
          type="text"
          id="patientName"
          value={patientName}
          name="patientName"
          placeholder="Patient Name"
          className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 2xl:h-16 rounded-lg"
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="number"
          id="mobileNumber"
          placeholder="Mobile Number"
          name="mobileNumber"
          value={mobileNumber}
          className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg 2xl:h-16"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        {/* <p className="text-gray-700">{cityName}</p> */}
        <div className="relative inline-block text-left w-full">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 transition 2xl:h-16 duration-300 ease-in-out cursor-pointer w-full h-12 rounded-lg"
          >
            {districts.map((city, ind) => (
              <option key={ind} value={city}>
                {city}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
            <IoIosArrowDown></IoIosArrowDown>
          </div>
        </div>

        <CityDropdown
          onCityChange={setSelectedCity}
          setCityName={setSelectedCity}
          type="city"
        />

        <div className="relative inline-block text-left w-full">
          <select
            value={selectedDisease}
            onChange={(e) => {
              setSelectedDisease(e.target.value);
            }}
            className="block appearance-none bg-white border 2xl:h-16 border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out cursor-pointer w-full h-12 rounded-lg"
          >
            {disease.map((disease, ind) => (
              <option key={ind} value={disease}>
                {disease}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
            <IoIosArrowDown></IoIosArrowDown>
          </div>
        </div>

        <button
          className="bg-[#00a79d] hover:bg-teal-600 transition duration-300 px-4 w-full h-12 2xl:h-16 rounded-lg text-white"
          type="submit"
        >
          Book Now
        </button>
        <Toaster position="top-center" />
      </form>
    </div>
  );
};

export default Form;
