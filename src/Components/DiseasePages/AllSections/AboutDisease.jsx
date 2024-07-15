import { useEffect } from "react";
import herniasurgery from "../../../Assests/herniasurgery.png";
import AppointmentModal from "../../AppointmentModal";
import ReactGA from "react-ga";
import { MdOutlineDone } from "react-icons/md";
import PropTypes from "prop-types";
import CallNowButton from "../../ReusableComponents/CallNowButton";

const AboutDisease = ({ content }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className=" bg-teal-70 w-full flex justify-center my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 w-[95%] lg:w-[90%] items-center">
        {/* Left side details */}
        <div className="py-6  ">
          {content?.aboutDisease?.diagnosis?.diagnosisHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.diagnosisHeader}
            </h3>
          )}

<div className="mt-5">
{content?.aboutDisease?.diagnosis?.symptoms?.length > 0
              ? content?.aboutDisease?.diagnosis?.symptoms?.map((symptom, index) => (
                  <div key={index} className="flex gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-semibold text-gray-800 font-lato -mt-[2px]">
                      {symptom}
                    </p>
                  </div>
                ))
              : ""}
</div>



          {
            content?.aboutDisease?.diagnosis?.detailList &&
            content?.aboutDisease?.diagnosis?.detailList.map((detail, index) => 
              <p key={index} className="text-sm text-justify mb-2 font-lato font-normal">
            {detail}
          </p>
            )
          }


          {
            content?.aboutDisease?.diagnosis?.advantages &&
            content?.aboutDisease?.diagnosis?.advantages?.map((advantage, index) => 
            <div key={index}>
                <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {advantage?.advantageHeader}
            </h3>
            <p className="text-sm text-justify mb-2 font-lato font-normal">
            {advantage?.advantageDetails}
          </p>

          <div className="mt-6 flex flex-col gap-2">
            {advantage?.advantageList.length > 0
              ? advantage?.advantageList.map((list, index) => (
                  <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-normal text-sm text-gray-800 font-lato">
                      {list}
                    </p>
                  </div>
                ))
              : ""}
          </div>

            </div>
            )
          }

          



{content?.aboutDisease?.diagnosis?.details && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.details}
            </p>
          )}

{content?.aboutDisease?.diagnosis?.details3 && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.details3}
            </p>
          )}


          {content?.aboutDisease?.diagnosis?.featureHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.featureHeader}
            </h3>
          )}


          




<div className="mb-2 flex flex-col gap-2">
            {content?.aboutDisease?.diagnosis?.features?.length > 0
              ? content?.aboutDisease?.diagnosis?.features?.map((list, index) => (
                  <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-semibold text-gray-800 font-lato -mt-[2px]">
                      {list}
                    </p>
                  </div>
                ))
              : ""}
          </div>

          

          {content?.aboutDisease?.diagnosis?.details2 &&
            content?.aboutDisease?.diagnosis?.details2?.map((detail, index) => (
              <p
                key={index}
                className="text-sm text-justify mb-2 font-lato font-normal"
              >
                {detail}
              </p>
            ))}

            

          {content?.aboutDisease?.diagnosis?.diagnosisSubHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.diagnosisSubHeader}
            </h3>
          )}

          {content?.aboutDisease?.diagnosis?.diagnosisSubDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.diagnosisSubDetails}
            </p>
          )}

          
{content?.aboutDisease?.diagnosis?.subheader3 && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.subheader3}
            </h3>
          )}



          {content?.aboutDisease?.diagnosis?.diagnosisLists &&
            content.aboutDisease.diagnosis.diagnosisLists.map(
              (diagnosis, index) => {
                const [title, description] = diagnosis.split(":");
                return (
                  <p
                    className="text-sm text-justify mb-2 font-lato font-normal"
                    key={index}
                  >
                    <strong>{title}</strong>: {description}
                  </p>
                );
              }
            )}

{
            content?.aboutDisease?.diagnosis?.subDetails &&
            content?.aboutDisease?.diagnosis?.subDetails.map((detail, index) => 
              <p key={index} className="text-sm text-justify mb-2 font-lato font-normal">
            {detail}
          </p>
            )
          }

{content?.aboutDisease?.diagnosis?.ProcedureHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.ProcedureHeader}
            </h3>
          )}

          {
            content?.aboutDisease?.diagnosis?.ProcedureList &&
            content?.aboutDisease?.diagnosis?.ProcedureList?.map((list, index) => 
              <p key={index} className="text-sm text-justify mb-3 font-lato font-normal">
            {list}
          </p>
            )
          }

                {content?.aboutDisease?.diagnosis?.benefitsHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.benefitsHeader}
            </h3>
          )}

          {
            content?.aboutDisease?.diagnosis?.benefitsList &&
            content?.aboutDisease?.diagnosis?.benefitsList?.map((list, index) => 
              <p key={index} className="text-sm text-justify mb-3 font-lato font-normal">
            {list}
          </p>
            )
          }


          {content?.aboutDisease?.diagnosis?.occureHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.occureHeader}
            </h3>
          )}

          {content?.aboutDisease?.diagnosis?.occureDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.occureDetails}
            </p>
          )}


          
{content?.aboutDisease?.diagnosis?.occureListSubHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.occureListSubHeader}
            </h3>
          )}

{content?.aboutDisease?.diagnosis?.occureListSubDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.occureListSubDetails}
            </p>
          )}

{content?.aboutDisease?.diagnosis?.occureSubDetailsLists &&
            content.aboutDisease.diagnosis.occureSubDetailsLists.map(
              (list, index) => {
                const [title, description] = list.split(":");
                return (
                  <p
                    className="text-sm text-justify mb-2 font-lato font-normal"
                    key={index}
                  >
                    <strong>{title}</strong>: {description}
                  </p>
                );
              }
            )}

{content?.aboutDisease?.diagnosis?.occureSubHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.occureSubHeader}
            </h3>
          )}

          {content?.aboutDisease?.diagnosis?.occureSubDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.occureSubDetails}
            </p>
          )}


{content?.aboutDisease?.diagnosis?.occureSubDetailsLists2 &&
            content.aboutDisease.diagnosis.occureSubDetailsLists2.map(
              (list, index) => {
                const [title, description] = list.split(":");
                return (
                  <p
                    className="text-sm text-justify mb-2 font-lato font-normal"
                    key={index}
                  >
                    <strong>{title}</strong>: {description}
                  </p>
                );
              }
            )}

          {content?.aboutDisease?.diagnosis?.occureSubHeader2 && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.occureSubHeader2}
            </h3>
          )}

          {content?.aboutDisease?.diagnosis?.occureSubDetails2 && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.occureSubDetails2}
            </p>
          )}

          <div className="mb-2 flex flex-col gap-2">
            {content?.aboutDisease?.diagnosis?.occureTreatment?.length > 0
              ? content?.aboutDisease?.diagnosis?.occureTreatment?.map(
                  (treatment, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold mb-3 text-gray-600">
                        {treatment?.occureHeader}
                      </h3>

                      {treatment?.occureTreatmentLists?.map((list, index) => (
                        <div key={index} className="flex  gap-2 mb-4">
                          <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                            <MdOutlineDone></MdOutlineDone>
                          </div>
                          <p className="font-normal text-gray-800 font-lato -mt-[2px]">
                            {list}
                          </p>
                        </div>
                      ))}
                    </div>
                  )
                )
              : ""}
          </div>




                <div>
                {
                content?.aboutDisease?.diagnosis?.occureGuidelines?.guidelinesHeadingsDetails && 
                
                content?.aboutDisease?.diagnosis?.occureGuidelines?.guidelinesHeadingsDetails?.map((detail, index) => 
                <p key={index} className="text-sm text-justify mb-2 font-lato font-normal">
                {detail}
              </p>
                ) 
                }

                {
                content?.aboutDisease?.diagnosis?.occureGuidelines?.guidelinesHeadingsList && 
                
                content?.aboutDisease?.diagnosis?.occureGuidelines?.guidelinesHeadingsList?.map((detail, index) => 
                  <div key={index} className="flex  gap-2 mb-4">
                <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-normal text-gray-800 font-lato -mt-[2px]">
                  {detail}
                </p>
              </div>
                ) 
                }


                {
                  content?.aboutDisease?.diagnosis?.occureGuidelines?.heading1 &&
                  <h3 className="text-2xl font-bold mb-3 text-gray-600">
                  {content?.aboutDisease?.diagnosis?.occureGuidelines?.heading1}
                </h3>
                }


<div className="mb-2 flex flex-col gap-2">
            {content?.aboutDisease?.diagnosis?.occureGuidelines?.dietTips?.length > 0
              ? content?.aboutDisease?.diagnosis?.occureGuidelines?.dietTips?.map(
                  (tips, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold mb-3 text-gray-600">
                        {tips?.tipsHeading}
                      </h3>

                      {tips?.tipsList?.map((list, index) => (
                          <p key={index} className="font-normal text-gray-800 font-lato -mt-[2px]">
                            {list}
                          </p>
                      ))}
                    </div>
                  )
                )
              : ""}
          </div>


                {/* Supplements */}
                <div>
                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.supplementsHeading &&
                    <h3 className="text-2xl font-bold mb-3 text-gray-600">
                  {content?.aboutDisease?.diagnosis?.occureGuidelines?.supplementsHeading}
                </h3>
                  }

                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.supplementsList &&
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.supplementsList?.map((list, index) => 
                      <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-normal text-gray-800 font-lato -mt-[2px]">
                      {list}
                    </p>
                  </div>
                    )
                  }

                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.supplementFooter &&
                    <p className="font-normal text-gray-800 font-lato -mt-[2px]">
                      {content?.aboutDisease?.diagnosis?.occureGuidelines?.supplementFooter}
                    </p>
                  }




                {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.foodsToAvoidHeading &&
                    <h3 className="text-2xl font-bold mt-3 mb-3 text-gray-600">
                  {content?.aboutDisease?.diagnosis?.occureGuidelines?.foodsToAvoidHeading}
                </h3>
                  }

                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.foodsToAvoidDetail &&
                    <p className="font-normal text-gray-800 font-lato mb-2">
                      {content?.aboutDisease?.diagnosis?.occureGuidelines?.foodsToAvoidDetail}
                    </p>
                  }

                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.foodsToAvoidList &&
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.foodsToAvoidList?.map((list, index) => 
                      <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-normal text-gray-800 font-lato">
                      {list}
                    </p>
                  </div>
                    )
                  }


                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.sleepingPositionsHeading &&
                    <h3 className="text-2xl font-bold mt-3 mb-3 text-gray-600">
                  {content?.aboutDisease?.diagnosis?.occureGuidelines?.sleepingPositionsHeading}
                </h3>
                  }


                  {
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.sleepingPositionsList &&
                    content?.aboutDisease?.diagnosis?.occureGuidelines?.sleepingPositionsList.map((list, index) => 
                      <p key={index} className="font-normal text-gray-800 font-lato mb-3">
                    {list}
                  </p>
                    )
                  }
                </div>


                </div>

                


                {
                    content?.aboutDisease?.diagnosis?.occurePoints &&
                    content?.aboutDisease?.diagnosis?.occurePoints.map((list, index) => 
                      <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-normal text-gray-800 font-lato">
                      {list}
                    </p>
                  </div>
                    )
                  }


          {content?.aboutDisease?.diagnosis?.occureDetailsLists &&
            content?.aboutDisease?.diagnosis?.occureDetailsLists?.map(
              (diagnosis, index) => {
                const [title, description] = diagnosis.split(":");
                return (
                  <p
                    className="text-sm text-justify mb-2 font-lato font-normal"
                    key={index}
                  >
                    <strong>{title}</strong>: {description}
                  </p>
                );
              }
            )}


            {
              content?.aboutDisease?.diagnosis?.occureDetailsSubLists &&
              content?.aboutDisease?.diagnosis?.occureDetailsSubLists.map((detail, index) => 
                <p key={index} className="text-sm text-justify mb-2 font-lato font-normal">
              {detail}
            </p>
              )
            }



{content?.aboutDisease?.diagnosis?.prepareHeader && (
            <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {content.aboutDisease.diagnosis.prepareHeader}
            </h3>
          )}

          {content?.aboutDisease?.diagnosis?.prepareDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.prepareDetails}
            </p>
          )}


{content?.aboutDisease?.diagnosis?.prepareDetailsLists &&
            content?.aboutDisease?.diagnosis?.prepareDetailsLists?.map(
              (diagnosis, index) => {
                const [title, description] = diagnosis.split(":");
                return (
                  <p
                    className="text-sm text-justify mb-2 font-lato font-normal"
                    key={index}
                  >
                    <strong>{title}</strong>: {description}
                  </p>
                );
              }
            )}





                {
                  content?.aboutDisease?.diagnosis?.diagnosisFooterHeading &&
                  <h3 className="text-2xl font-bold mb-3 mt-5 text-gray-600">
                  {content?.aboutDisease?.diagnosis?.diagnosisFooterHeading}
                </h3>
                }

{content?.aboutDisease?.diagnosis?.diagnosisFooterDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.diagnosisFooterDetails}
            </p>
          )}

          <div className="flex flex-col md:flex-row gap-3 w-full mt-4">
          <CallNowButton/>

            <div className="w-full">
              <AppointmentModal
                className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16"
                text={"Book Your Appointment"}
              ></AppointmentModal>
            </div>
          </div>
        </div>
        {/* h-full object-cover object-center */}
        {/* Right side image */}
        <div className="flex justify-center items-center lg:justify-end">
          <img className="h-1/2" src={herniasurgery} alt="" />
        </div>
      </div>
    </div>
  );
};
AboutDisease.propTypes = {
  content: PropTypes.object, // Content prop can be of any type
};

export default AboutDisease;
