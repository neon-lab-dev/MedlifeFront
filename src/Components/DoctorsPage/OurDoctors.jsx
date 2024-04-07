import React, { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import AppointmentModal from "../AppointmentModal";

const OurDoctors = () => {
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);

  // Data fetch from API

  const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/doctors")
      .then((res) => res.data)
      .then((data) => {
        setAllDoctors(data.doctors);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);



  // to={`/doctorsDetails/${doctor._id}`}
  return (
    <div className="py-7 w-full flex flex-col  items-center">
      <div className="w-[90%] md:w-[95%]">
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-bold text-center mb-10">
          Our Doctors
        </h1>

        {/* Cards */}

        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="">
            <div className="flex flex-col justify-center items-center gap-14">
            {allDoctors.length > 0
              ? allDoctors.map((doctor) => (
                  <div className="w-full lg:w-5/6">
                    <div
                      key={doctor._id}
                      className="bg-white shadow-md shadow-md-top shadow-md-bottom border-t-2 border-gray-100 px-2 py-5 rounded-md grid grid-cols-1 lg:grid-cols-3 items-center" 
                    >
                      {/* grid grid-cols-3 mb-2 lg:mb-4 */}
                      <div className="col-span-2">

                        <div className="flex gap-2">
                        
                        <div className="flex justify-center md:justify-start lg:justify-end mr-2 md:mr-0 lg:mr-4 border rounded-md p-2">
                        <img
                          className="w-full md:w-40 lg:w-32 aspect-video rounded-lg border-teal-500"
                          src={doctor.avatar.url}
                          alt=""
                        />
                        </div>
                        
                        {/* ml-2 sm:ml-0 md:-ml-10 lg:-ml-9 */}
                        <div className="">
                          <div className="">
                            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                              {doctor?.doctorName}
                            </h1>
                            <p className="text-[#17324A] mb-1">
                              {" "}
                              MBBS, MS-{" "}
                              <span className="text-teal-500">
                                {doctor?.diseaseHandle}
                              </span>
                            </p>

                            <div className="w-44 h-[1px] bg-gray-700"></div>
                          </div>

                          <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                            Specialization
                          </h3>

                          <div className="flex  gap-2 items-center mb-3">
                            <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                              <p className="text-[8px] sm:text-sm text-gray-800">
                                {doctor?.specialization1}
                              </p>
                            </div>
                            <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                              <p className="text-[8px] sm:text-sm text-gray-800">
                                {doctor?.specialization2}
                              </p>
                            </div>
                            <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                              <p className="text-[8px] sm:text-sm text-gray-800">
                                {doctor?.specialization3}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3 md:gap-6 items-center">
                            <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                              {" "}
                              <IoBagAdd></IoBagAdd>
                              <p className="text-gray-600 capitalize">{doctor?.experience}</p>
                            </h2>

                            <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                              {" "}
                              <HiLocationMarker></HiLocationMarker>{" "}
                              <p className="text-gray-600 capitalize">{doctor?.location}</p>
                            </h2>
                          </div>
                        </div>
                        </div>

                      </div>

                     <div className="flex justify-start md:justify-end pr-0 lg:pr-16 w-full">
                     <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 w-full lg:w-80">

                        <a href="tel:+9876543210" >
          <div className="w-full border border-[#00a0aa] px-4 py-3 rounded-lg text-[#00a0aa] text-[9px] md:text-sm flex items-center justify-center">
            Call now +98 765 432 10
           </div>
           </a>

                        
                        <AppointmentModal className="w-full bg-[#00a0aa] px-4 py-3 rounded-lg text-white border border-[#00a0aa] text-[9px] md:text-sm" text={"Book Your Appointment"}></AppointmentModal>
                        {/* <button className="w-full bg-[#00a0aa] px-4 py-3 rounded-lg text-white border border-[#00a0aa] text-xs md:text-sm">
                          Book Your Appoinment
                        </button> */}
                      </div>
                     </div>
                    </div>
                  </div>
                ))
              : "No content here"}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurDoctors;
