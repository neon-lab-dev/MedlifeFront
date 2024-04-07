import React from "react";
import ambulance from "../../../Assests/ambulance-1.png";
import AppointmentModal from "../../AppointmentModal";

const AmbulanceService = () => {
  return (
    <div className="bg-[#FFF] flex flex-col items-center py-9">
      <div className="flex flex-col-reverse  lg:flex-row items-center gap-10 py-4 border-b w-[95%] lg:w-[90%] font-lato">
        <img className="w-full lg:w-[40%] " src={ambulance} alt="" />
        <div className="w-4/5">
          <h1 className="text-2xl font-semibold text-[#17324A] mb-6">
            Ambulance Services
          </h1>
          <ul className=" mb-10">
            <p className="text-[#17324A] font-lato text-lg mb-3">
              Our fleet of ambulances is equipped with advanced life support to
              ensure comprehensive care during emergencies.
            </p>
            <li className="mb-3 text-[#17324A] font-lato text-lg">
              Our highly trained emergency medical staff is ready to provide
              immediate and expert care en route to the hospital.
            </li>
            <li className="mb-3 text-[#17324A] font-lato text-lg">
              To request our advanced life support ambulance services, simply
            </li>
          </ul>

          <div className="flex flex-col xl:flex-row gap-3 w-full">
            <a
              href="tel:+9876543210"
              className="w-full md:w-4/5 h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa] flex items-center justify-center"
            >
              <div>Call now +98 765 432 10</div>
            </a>
            <div className="w-full">
              <AppointmentModal
                className="w-full md:w-4/5 h-[64px]"
                text={"Book Your Appointment"}
              ></AppointmentModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceService;
