import { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import AppointmentModal from "../AppointmentModal";
import CallNowButton from "../ReusableComponents/CallNowButton";

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
                    <div key={doctor._id} className="w-full lg:w-5/6">
                      <div className="bg-white shadow-md shadow-md-top shadow-md-bottom border-t-2 border-gray-100 px-2 py-5 rounded-md grid grid-cols-1 lg:grid-cols-3 items-center">
                        {/* grid grid-cols-3 mb-2 lg:mb-4 */}
                        <div className="col-span-2">
                          <div className="flex gap-2">
                            <div className="flex justify-center md:justify-start lg:justify-end mr-2 md:mr-0 lg:mr-4 border rounded-md p-2">
                              <img
                                className="w-[100px] sm:w-28 md:w-32 lg:w-32 aspect-video rounded-lg border-teal-500"
                                src={doctor.avatar.url}
                                alt=""
                              />
                            </div>

                            {/* ml-2 sm:ml-0 md:-ml-10 lg:-ml-9 */}
                            <div className="">
                              <div className="">
                                <h1 className="text-[#17324A] text-[22px] md:text-[28px] font-semibold mb-1">
                                  {doctor?.doctorName}
                                </h1>
                                <p className="text-[#17324A] text-xs md:text-base mb-1">
                                  {" "}
                                  {doctor?.education}-{" "}
                                  <span className="text-teal-500">
                                    {doctor?.diseaseHandle}
                                  </span>
                                </p>

                                <div className="w-44 h-[1px] bg-gray-700"></div>
                              </div>

                              <h3 className="text-[#17324A] text-sm md:text-[22px] font-semibold mb-2 mt-3">
                                Specialization
                              </h3>

                              <div className="flex flex-wrap gap-2 items-center mb-3">
                                <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                                  <p className="text-[10px] sm:text-sm text-gray-800">
                                    {doctor?.specialization1}
                                  </p>
                                </div>
                                <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                                  <p className="text-[10px] sm:text-sm text-gray-800">
                                    {doctor?.specialization2}
                                  </p>
                                </div>
                                <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                                  <p className="text-[10px] sm:text-sm text-gray-800">
                                    {doctor?.specialization3}
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-3 md:gap-6 items-center">
                                <h2 className="text-base sm:text-lg font-bold text-gray-700 flex items-center gap-2">
                                  {" "}
                                  <IoBagAdd></IoBagAdd>
                                  <p className="text-gray-600 capitalize">
                                    {doctor?.experience} Years
                                  </p>
                                </h2>

                                <h2 className="ttext-base sm:text-lg font-bold text-gray-700 flex items-center gap-2">
                                  {" "}
                                  <HiLocationMarker></HiLocationMarker>{" "}
                                  <p className="text-gray-600 capitalize">
                                    {doctor?.location}
                                  </p>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-start md:justify-end pr-0 lg:pr-16 w-full mt-4">
                          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 w-full lg:w-80">

                            <CallNowButton className="text-[9px] md:text-sm flex items-center justify-center"/>
                            
                            <AppointmentModal
                              className="w-full bg-[#00a0aa] px-2 md:px-4 py-3 rounded-lg text-white border border-[#00a0aa] text-[9px] md:text-sm"
                              text={"Book Your Appointment"}
                            ></AppointmentModal>
                            {/* <button className="w-full bg-[#00a0aa] px-4 py-3 rounded-lg text-white border border-[#00a0aa] text-xs md:text-sm">
                          Book Your Appoinment
                        </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "No doctors available"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurDoctors;
