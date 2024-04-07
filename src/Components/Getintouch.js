import React, { useState } from "react";
import "./styles/Getintouch.css";
import { IoIosArrowDown } from "react-icons/io";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import { toast } from "sonner";

const cities = [
  "Select City / शहर चुनें",
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",
  "Purnia",
  "Darbhanga",
];
const disease = [
  "Select Disease / रोग का चयन करें",
  "Hernia",
  "Gynacology",
  "Fever",
];

const Getintouch = () => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleChange1 = (e) => {
    setSelectedDisease(e.target.value);
  };

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
            setTimeout(() => resolve({  }), 3000)
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
    <div className="git-cont">
      <div className="git-inner-cont">
        <div className="wu-btm-head">Get in touch</div>
        <div className="git-text">
          चिकित्सा उपचार परामर्श के लिए, फॉर्म भरें
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
            name="patientName"
              type="text"
              className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg 2xl:h-16 mb-4"
              placeholder="Patient Name / रोगी का नाम"
            />

            <input
            name="mobileNumber"
              type="number"
              className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg 2xl:h-16 mb-4"
              placeholder="Mobile No. / मोबाइल नंबर"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative inline-block text-left w-full mb-4">
              <select
                id="city"
                value={selectedCity}
                onChange={handleChange}
                className="block appearance-none cursor-pointer bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg 2xl:h-16"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <IoIosArrowDown></IoIosArrowDown>
              </div>
            </div>

            <div className="relative inline-block text-left w-full mb-4">
              <select
                id="city"
                value={selectedDisease}
                onChange={handleChange1}
                className="block appearance-none cursor-pointer bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg 2xl:h-16"
              >
                {disease.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <IoIosArrowDown></IoIosArrowDown>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="border border-[#00a0aa] bg-[#00a0aa] rounded-lg w-full md:w-1/2 lg:w-1/2 xl:w-[40%] h-12 2xl:h-16 text-white">Book Free Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Getintouch;
