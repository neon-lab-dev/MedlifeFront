import accident from "../../../Assests/Emergency type/accident 1.png";
import cardiac from "../../../Assests/Emergency type/cardiac.png";
import lungs from "../../../Assests/Emergency type/lungs 1.png";
import brain from "../../../Assests/Emergency type/brain 1.png";
import obstetrics from "../../../Assests/Emergency type/obstetrics 1.png";
import pediatrics from "../../../Assests/Emergency type/pediatrics 1.png";
import gynecology from "../../../Assests/Emergency type/gynecology 1.png";

const EmergencyType = () => {
  return (
    <div className="pb-16 flex flex-col items-center justify-center">
      <div className="w-[95%] lg:w-[90%] flex flex-col gap-16 items-center font-lato">
        <h1 className="text-[32px] font-semibold text-[#17324A] text-center mt-10">
          Types of Emergencies Handled
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-9">
          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={accident} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Accidents <br /> emergencies
            </h3>
          </div>

          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={cardiac} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Cardiac <br /> emergencies
            </h3>
          </div>

          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={lungs} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Respiratory <br /> distress
            </h3>
          </div>

          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={brain} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Neurological <br /> emergencies
            </h3>
          </div>

          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={obstetrics} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Obstetric <br /> emergencies
            </h3>
          </div>

          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={pediatrics} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Pediatric <br /> emergencies
            </h3>
          </div>

          {/* Accident card */}
          <div className="flex flex-col gap-3 w-32">
            <div className="shadow-lg p-2 rounded-md flex justify-center items-center w-32">
              <img src={gynecology} alt="" />
            </div>
            <h3 className="text-base md:text-[22px] text-[#47617A] text-center">
              Gynecological <br /> emergencies
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyType;
