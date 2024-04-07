import React from "react";
import hospital from "../../Assests/hospital.png";
import logo from "../../Assests/hospitals/orchid.png";
import cisro from "../../Assests/hospitals/cisro.jpg";
import harrison from "../../Assests/hospitals/harrison-hospital.jpg";
import mediversal from "../../Assests/hospitals/mediversal.jpg";
import pancardia from "../../Assests/hospitals/pancardia-hospital.jpg";
import shivaHospital from "../../Assests/hospitals/shiva-hospital.jpg";
import shriSai from "../../Assests/hospitals/shri-sai-hospital.jpg";

import { FaLocationDot } from "react-icons/fa6";

const OurHospitals = () => {
  return (
    <div className="py-7 w-full flex flex-col items-center">
      <div className="w-[95%] md:w-[90%]">
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
          Our Hospital Partners
        </h1>

        {/* Hospital cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={logo} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl font-bold font-lato w-full">
                Orchid Hospital
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`4th Cross Rd, opposite bank of India atm, Srinivasanagara, Hanumanthnagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560019, India`
                  .length > 170 ? (
                  <>
                    {`4th Cross Rd, opposite bank of India atm, Srinivasanagara, Hanumanthnagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560019, India`.slice(
                      0,
                      170
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_5" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={logo} alt="" />
                    </div>
                    <img
                      className="w-full h-96 mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Orchid Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      The Orchid Hospital is the first multi super specialty
                      hospital in Patna, Bihar, India, which has taken an
                      initiative to amalgamate and integrate the best in
                      healthcare be it manpower or technology. this hospital has
                      been set up with the vision of providing quality
                      healthcare at affordable cost and within the reach of
                      every individual. Equipped with “futuristic technology”
                      and truly “brilliant and dedicated professionals” with the
                      infrastructure, The Orchid Hospital team believes in
                      working as a team and offers high quality, value and
                      evidence based integrated healthcare.
                    </p>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Departments:
                    </h1>

                    <ul className="mb-3 font-lato text-gray-600">
                      <li>General Surgery</li>
                      <li>Laparoscopic Surgery</li>
                      <li>Obs & Gynae</li>
                      <li>Burn & Plastic Surgery</li>
                      <li>Vascular Surgery</li>
                      <li>General Medicine</li>
                      <li>Orthopaedic Surgery</li>
                      <li>Gastroenterology</li>
                    </ul>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Facilities:
                    </h1>

                    <ul className="font-lato mb-3 text-gray-600">
                      <li>24 hour Chemist Shop</li>
                      <li>24 Hour Pathology</li>
                      <li>24 hour Power back-up</li>
                      <li>24 hour Ambulance Service</li>
                      <li>Fully Air-conditioned</li>
                      <li>24 hour Emergency Services</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={cisro} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl  font-bold font-lato w-full">
                CISRO Hospital
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`
                  .length > 170 ? (
                  <>
                    {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`.slice(
                      0,
                      140
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_6").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_6" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={cisro} alt="" />
                    </div>
                    <img
                      className="w-full mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      CISRO Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      Located in the heart of Patna, CISRO is a super-specialty
                      hospital, dedicated to Ortho, Spine, Neuro, and
                      Rehabilitation. The hospital is equipped with
                      state-of-the-art technologies and several latest equipment
                      which make it a powerhouse of healthcare in Bihar. With
                      its commitment to invest in latest medical technology,
                      CISRO ensures that each one of its patients get the access
                      to supreme healthcare.
                    </p>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Specialties:
                    </h1>

                    <p className="mb-3 font-lato text-gray-600">
                      The hospital is equipped with state-of-the-art
                      technologies and several latest equipment which make it a
                      powerhouse of healthcare in Bihar. With its commitment to
                      invest in latest medical technology, CISRO ensures that
                      each one of its patients get the access to supreme
                      healthcare.
                    </p>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Specialities Includes:
                    </h1>

                    <ul className="font-lato mb-3 text-gray-600">
                      <li>Spine Surgery</li>
                      <li>Orthopedics Surgery</li>
                      <li>Neuro Surgery</li>
                      <li>Rehabilitation Surgery</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={harrison} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl  font-bold font-lato w-full">
                Harrison Hospital
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`
                  .length > 170 ? (
                  <>
                    {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`.slice(
                      0,
                      140
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_7").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_7" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={harrison} alt="" />
                    </div>
                    <img
                      className="w-full mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Orchid Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      The Orchid Hospital is the first multi super specialty
                      hospital in Patna, Bihar, India, which has taken an
                      initiative to amalgamate and integrate the best in
                      healthcare be it manpower or technology. this hospital has
                      been set up with the vision of providing quality
                      healthcare at affordable cost and within the reach of
                      every individual. Equipped with “futuristic technology”
                      and truly “brilliant and dedicated professionals” with the
                      infrastructure, The Orchid Hospital team believes in
                      working as a team and offers high quality, value and
                      evidence based integrated healthcare.
                    </p>
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Departments:
                    </h1>

                    <ul className="mb-3 font-lato text-gray-600">
                      <li>General Surgery</li>
                      <li>Laparoscopic Surgery</li>
                      <li>Obs & Gynae</li>
                      <li>Burn & Plastic Surgery</li>
                      <li>Vascular Surgery</li>
                      <li>General Medicine</li>
                      <li>Orthopaedic Surgery</li>
                      <li>Gastroenterology</li>
                    </ul>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Facilities:
                    </h1>

                    <ul className="font-lato text-gray-600">
                      <li>24 hour Chemist Shop</li>
                      <li>24 Hour Pathology</li>
                      <li>24 hour Power back-up</li>
                      <li>24 hour Ambulance Service</li>
                      <li>Fully Air-conditioned</li>
                      <li>24 hour Emergency Services</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={mediversal} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl  font-bold font-lato w-full">
                Mediversal Group
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`
                  .length > 170 ? (
                  <>
                    {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`.slice(
                      0,
                      140
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_8").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_8" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={mediversal} alt="" />
                    </div>
                    <img
                      className="w-full mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Orchid Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      The Orchid Hospital is the first multi super specialty
                      hospital in Patna, Bihar, India, which has taken an
                      initiative to amalgamate and integrate the best in
                      healthcare be it manpower or technology. this hospital has
                      been set up with the vision of providing quality
                      healthcare at affordable cost and within the reach of
                      every individual. Equipped with “futuristic technology”
                      and truly “brilliant and dedicated professionals” with the
                      infrastructure, The Orchid Hospital team believes in
                      working as a team and offers high quality, value and
                      evidence based integrated healthcare.
                    </p>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Departments:
                    </h1>

                    <ul className="mb-3 font-lato text-gray-600">
                      <li>General Surgery</li>
                      <li>Laparoscopic Surgery</li>
                      <li>Obs & Gynae</li>
                      <li>Burn & Plastic Surgery</li>
                      <li>Vascular Surgery</li>
                      <li>General Medicine</li>
                      <li>Orthopaedic Surgery</li>
                      <li>Gastroenterology</li>
                    </ul>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Facilities:
                    </h1>

                    <ul className="font-lato text-gray-600">
                      <li>24 hour Chemist Shop</li>
                      <li>24 Hour Pathology</li>
                      <li>24 hour Power back-up</li>
                      <li>24 hour Ambulance Service</li>
                      <li>Fully Air-conditioned</li>
                      <li>24 hour Emergency Services</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={pancardia} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl  font-bold font-lato w-full">
                Pancardia Hospital
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`
                  .length > 170 ? (
                  <>
                    {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`.slice(
                      0,
                      140
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_9").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_9" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={pancardia} alt="" />
                    </div>
                    <img
                      className="w-full mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Orchid Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      The Orchid Hospital is the first multi super specialty
                      hospital in Patna, Bihar, India, which has taken an
                      initiative to amalgamate and integrate the best in
                      healthcare be it manpower or technology. this hospital has
                      been set up with the vision of providing quality
                      healthcare at affordable cost and within the reach of
                      every individual. Equipped with “futuristic technology”
                      and truly “brilliant and dedicated professionals” with the
                      infrastructure, The Orchid Hospital team believes in
                      working as a team and offers high quality, value and
                      evidence based integrated healthcare.
                    </p>
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Departments:
                    </h1>

                    <ul className="mb-3 font-lato text-gray-600">
                      <li>General Surgery</li>
                      <li>Laparoscopic Surgery</li>
                      <li>Obs & Gynae</li>
                      <li>Burn & Plastic Surgery</li>
                      <li>Vascular Surgery</li>
                      <li>General Medicine</li>
                      <li>Orthopaedic Surgery</li>
                      <li>Gastroenterology</li>
                    </ul>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Facilities:
                    </h1>

                    <ul className="font-lato text-gray-600">
                      <li>24 hour Chemist Shop</li>
                      <li>24 Hour Pathology</li>
                      <li>24 hour Power back-up</li>
                      <li>24 hour Ambulance Service</li>
                      <li>Fully Air-conditioned</li>
                      <li>24 hour Emergency Services</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={shriSai} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl  font-bold font-lato w-full">
                Shri Sai...
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`
                  .length > 170 ? (
                  <>
                    {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`.slice(
                      0,
                      140
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_10").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_10" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={shriSai} alt="" />
                    </div>
                    <img
                      className="w-full mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Orchid Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      The Orchid Hospital is the first multi super specialty
                      hospital in Patna, Bihar, India, which has taken an
                      initiative to amalgamate and integrate the best in
                      healthcare be it manpower or technology. this hospital has
                      been set up with the vision of providing quality
                      healthcare at affordable cost and within the reach of
                      every individual. Equipped with “futuristic technology”
                      and truly “brilliant and dedicated professionals” with the
                      infrastructure, The Orchid Hospital team believes in
                      working as a team and offers high quality, value and
                      evidence based integrated healthcare.
                    </p>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Departments:
                    </h1>

                    <ul className="mb-3 font-lato text-gray-600">
                      <li>General Surgery</li>
                      <li>Laparoscopic Surgery</li>
                      <li>Obs & Gynae</li>
                      <li>Burn & Plastic Surgery</li>
                      <li>Vascular Surgery</li>
                      <li>General Medicine</li>
                      <li>Orthopaedic Surgery</li>
                      <li>Gastroenterology</li>
                    </ul>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Facilities:
                    </h1>

                    <ul className="font-lato text-gray-600">
                      <li>24 hour Chemist Shop</li>
                      <li>24 Hour Pathology</li>
                      <li>24 hour Power back-up</li>
                      <li>24 hour Ambulance Service</li>
                      <li>Fully Air-conditioned</li>
                      <li>24 hour Emergency Services</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="shadow-lg rounded-lg flex flex-col">
            <div className="relative">
              <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                <img className="w-32" src={shivaHospital} alt="" />
              </div>
              <img className="w-full rounded-t-lg" src={hospital} alt="" />
            </div>

            <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
              <h1 className="text-gray-600 text-xl  font-bold font-lato w-full">
                Shiva Hospital
                
              </h1>

              <p className="text-gray-500 text-justify flex gap-2 font-lato">
                <FaLocationDot className="text-3xl" />
                {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`
                  .length > 170 ? (
                  <>
                    {`Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar. With its commitment to invest in latest medical technology, CISRO ensures that each one of its patients get the access to supreme healthcare.`.slice(
                      0,
                      140
                    )}{" "}
                    ...
                  </>
                ) : (
                  <>
                    4th Cross Rd, opposite bank of India atm, Srinivasanagara,
                    Hanumanthnagar, Banashankari 1st Stage, Banashankari,
                    Bengaluru, Karnataka 560019, India
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  document.getElementById("my_modal_11").showModal()
                }
                className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
              >
                View Hospital
              </button>

              <dialog id="my_modal_11" className="modal">
                <div className="modal-box p-0 max-w-3xl bg-white ">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                      ✕
                    </button>
                  </form>
                  <div className="relative">
                    <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                      <img className="w-32" src={shivaHospital} alt="" />
                    </div>
                    <img
                      className="w-full mb-3 rounded-t-lg"
                      src={hospital}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Orchid Hospital
                    </h1>
                    <p className="text-gray-600 mb-3 text-justify font-lato">
                      The Orchid Hospital is the first multi super specialty
                      hospital in Patna, Bihar, India, which has taken an
                      initiative to amalgamate and integrate the best in
                      healthcare be it manpower or technology. this hospital has
                      been set up with the vision of providing quality
                      healthcare at affordable cost and within the reach of
                      every individual. Equipped with “futuristic technology”
                      and truly “brilliant and dedicated professionals” with the
                      infrastructure, The Orchid Hospital team believes in
                      working as a team and offers high quality, value and
                      evidence based integrated healthcare.
                    </p>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Departments:
                    </h1>

                    <ul className="mb-3 font-lato text-gray-600">
                      <li>General Surgery</li>
                      <li>Laparoscopic Surgery</li>
                      <li>Obs & Gynae</li>
                      <li>Burn & Plastic Surgery</li>
                      <li>Vascular Surgery</li>
                      <li>General Medicine</li>
                      <li>Orthopaedic Surgery</li>
                      <li>Gastroenterology</li>
                    </ul>

                    <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      Our Facilities:
                    </h1>

                    <ul className="font-lato text-gray-600">
                      <li>24 hour Chemist Shop</li>
                      <li>24 Hour Pathology</li>
                      <li>24 hour Power back-up</li>
                      <li>24 hour Ambulance Service</li>
                      <li>Fully Air-conditioned</li>
                      <li>24 hour Emergency Services</li>
                    </ul>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurHospitals;
