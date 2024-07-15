import { useEffect } from "react";
import Form from "../../Form";
import ReactGA from "react-ga";
import { MdOutlineDone } from "react-icons/md";
import PropTypes from "prop-types";
import CallNowButton from "../../ReusableComponents/CallNowButton";
import Paragraph4 from "../../ReusableComponents/Paragraph4";
import Heading3 from "../../ReusableComponents/Heading3";

const ExploreMedLife = ({ content }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="bg-teal-70 flex flex-col items-center">
      {/* grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-7 items-centergrid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-7 items-center */}
      <div className=" lg:w-[90%] py-2 px-5 lg:px-0 flex flex-col lg:flex-row justify-between gap-10 w-full">
        {/* Left side details */}
        <div className="w-[95%]">
          {content?.SurgeryForm?.surgeryHeader && (
            <Heading3 className="mb-3 text-gray-600">
              {content?.SurgeryForm?.surgeryHeader[0]}{" "}
              <span className="text-teal-600">
                {content.SurgeryForm.surgeryHeader[1]}
              </span>
            </Heading3>
          )}

          {content.SurgeryForm.surgeryInfo && (
            <Paragraph4 className="mb-3 text-justify">
              {content.SurgeryForm.surgeryInfo}
            </Paragraph4>
          )}

          {content?.SurgeryForm?.surgeryForm &&
            content?.SurgeryForm?.surgeryForm?.map((type, index) => {
              <Paragraph4
                className="mb-2 text-justify"
                key={index}
              >
                {type}
              </Paragraph4>;
            })}

          {content?.SurgeryForm?.surgerydetailsList && 
          content?.SurgeryForm?.surgerydetailsList.map((list, index) => 
            <Paragraph4 key={index} className="mb-5 text-gray-800 text-justify">
          {list}
        </Paragraph4>
          )
          }

          {content?.SurgeryForm?.surgerydetails && (
            <Paragraph4 className="mb-5 text-gray-800 text-justify">
              {content?.SurgeryForm?.surgerydetails}:{" "}
              {content?.SurgeryForm?.surgerydetails}
            </Paragraph4>
          )}

          {content?.SurgeryForm?.subHeader && (
            <h3 className="text-2xl font-bold text-gray-600 mb-3">
              {content?.SurgeryForm?.subHeader}
            </h3>
          )}

          {
            content?.SurgeryForm?.subLists &&
            <div className="p-5 rounded bg-gray-100 flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mb-5">
            {content?.SurgeryForm?.subLists?.length > 0 &&
              content?.SurgeryForm?.subLists?.map((list, index) => (
                <div key={index} className="flex flex-col gap-1 items-center">
                  <div className="rounded-full w-20 h-20 p-2 bg-white flex justify-center items-center">
                    <img src={list.img} alt="" />
                  </div>
                  <h3 className="text-base font-bold font-lato text-gray-600">
                    {list.title}
                  </h3>
                </div>
              ))}
          </div>
          }

          {content?.SurgeryForm?.surgeryTypeHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.surgeryTypeHeader}
            </h1>
          )}

          {content?.SurgeryForm?.surgeryDetails &&
            content?.SurgeryForm?.surgeryDetails?.map((type, index) => {
              const [title, description] = type.split(":");
              return (
                <Paragraph4
                  className="mb-2 text-justify"
                  key={index}
                >
                  <span className="font-bold text-gray-800">{title}</span>:{" "}
                  {description}
                </Paragraph4>
              );
            })}

          {content?.SurgeryForm?.surgerydetails2 && (
            <Paragraph4 className="mb-5 text-gray-800 text-justify">
              {content?.SurgeryForm?.surgerydetails2}
            </Paragraph4>
          )}

          {content?.SurgeryForm?.surgerydetails3 && (
            <Paragraph4 className="text-gray-800 text-justify">
              {content?.SurgeryForm?.surgerydetails3}
            </Paragraph4>
          )}

          {content?.SurgeryForm?.healthcareHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.healthcareHeader}
            </h1>
          )}

          {content?.SurgeryForm?.treatmentHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.treatmentHeader}
            </h1>
          )}

          {content?.SurgeryForm?.treatmentDetails?.treatmentHeaderDetails
            ?.length > 0 &&
            content?.SurgeryForm?.treatmentDetails?.treatmentHeaderDetails?.map(
              (detail, index) => {
                return (
                  <Paragraph4
                    className="mb-2 text-justify"
                    key={index}
                  >
                    -{detail}
                  </Paragraph4>
                );
              }
            )}

          <div className="mb-2 flex flex-col gap-2">
            {content?.SurgeryForm?.treatmentDetails?.treatmentDetailsLists
              ?.length > 0
              ? content?.SurgeryForm?.treatmentDetails?.treatmentDetailsLists?.map(
                  (list, index) => (
                    <div key={index} className="flex  gap-2 mb-4">
                      <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                        <MdOutlineDone></MdOutlineDone>
                      </div>
                      <Paragraph4 className="text-gray-800 -mt-[2px]">
                        {list}
                      </Paragraph4>
                    </div>
                  )
                )
              : ""}
          </div>

          {/* {content?.SurgeryForm?.treatmentDetails?.treatmentFooterDetails && (
            <p className="mb-2 text-justify">
              {content?.SurgeryForm?.treatmentDetails?.treatmentFooterDetails}
            </p>
          )} */}

          {content?.SurgeryForm?.featureHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.featureHeader}
            </h1>
          )}

{content?.SurgeryForm?.featureList &&
          content?.SurgeryForm?.featureList.map((list, index) => 
          <div key={index}className="flex flex-col gap-3">
             <h3 className="text-2xl font-bold mb-3 text-gray-600">
              {list.featureHeader}
            </h3>

            {
                      list.features.map((feature, index) => 
                        <div key={index} className="flex gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>

                        <Paragraph4 className="text-gray-800 -mt-[2px]">
                      {feature}
                    </Paragraph4>
                    
                  </div>
                      )
                    }

            

          </div>
          )
           }


{content?.SurgeryForm?.surgerydetails4 && (
            <p className="mb-2 text-justify">
              {content?.SurgeryForm?.surgerydetails4}
            </p>
          )}


{content?.SurgeryForm?.importanceHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.importanceHeader}
            </h1>
          )}

{content?.SurgeryForm?.importanceDetails && (
            <Paragraph4 className="mb-2 text-justify">
              {content?.SurgeryForm?.importanceDetails}
            </Paragraph4>
          )}


{content?.SurgeryForm?.importances &&
          content?.SurgeryForm?.importances?.map((list, index) => 
          <div key={index}className="flex flex-col gap-3">
             <h3 className="text-2xl font-bold mb-2 text-gray-600">
              {list.header}
            </h3>

            {
                      list.importance?.map((importance, index) => 
                        <div key={index} className="flex gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>

                        <Paragraph4 className="text-gray-800 -mt-[2px]">
                      {importance}
                    </Paragraph4>
                    
                  </div>
                      )
                    }

            

          </div>
          )
           }


{content?.SurgeryForm?.surgeryFooterDetails && (
            <Paragraph4 className="mb-2 text-justify">
              {content?.SurgeryForm?.surgeryFooterDetails}
            </Paragraph4>
          )}




          <div className="mb-2 flex flex-col gap-2">
            {content?.SurgeryForm?.features?.length > 0
              ? content?.SurgeryForm?.features?.map((feature, index) => (
                  <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-teal-30 p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <Paragraph4 className="text-gray-800 -mt-[2px]">
                      {feature}
                    </Paragraph4>
                  </div>
                ))
              : ""}
          </div>

          {content?.SurgeryForm?.types &&
            content?.SurgeryForm?.types?.map((type, index) => {
              const [title, description] = type.split(":");
              return (
                <Paragraph4
                  className="mb-2 text-justify"
                  key={index}
                >
                  <span className="font-bold text-gray-800">{title}</span>:{" "}
                  {description}
                </Paragraph4>
              );
            })}

          {content?.SurgeryForm?.causesHeader && (
            <h3 className="text-2xl font-bold text-gray-600 mt-5 mb-3">
              {content?.SurgeryForm?.causesHeader}
            </h3>
          )}

          {content?.SurgeryForm?.causesDetails &&
            content?.SurgeryForm?.causesDetails?.map((cause, index) => {
              const [title, description] = cause.split(":");
              return (
                <Paragraph4
                  className="mb-2 text-justify"
                  key={index}
                >
                  <span className="font-bold text-gray-800">{title}</span>:{" "}
                  {description}
                </Paragraph4>
              );
            })}

          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            {content?.SurgeryForm?.typeHeader && (
              <Paragraph4 className="">
                <span className="font-bold">
                  {content?.SurgeryForm?.typeHeader}
                </span>{" "}
                - {content?.SurgeryForm?.type}
              </Paragraph4>
            )}

            {content?.SurgeryForm?.surgeryNameHeader && (
              <Paragraph4 className="">
                <span className="font-bold">
                  {content?.SurgeryForm?.surgeryNameHeader}
                </span>{" "}
                - {content?.SurgeryForm?.surgeryName}
              </Paragraph4>
            )}

            {content?.SurgeryForm?.timeHeader && content?.SurgeryForm?.time && (
              <Paragraph4 className="">
                <span className="font-bold">
                  {content?.SurgeryForm?.timeHeader}
                </span>{" "}
                - {content?.SurgeryForm?.time}
              </Paragraph4>
            )}

            {content?.SurgeryForm?.costHeader && content?.SurgeryForm?.cost && (
              <Paragraph4 className="">
                <span className="font-bold">
                  {content?.SurgeryForm?.costHeader}
                </span>{" "}
                - {content?.SurgeryForm?.cost}
              </Paragraph4>
            )}

            {content?.SurgeryForm?.footerTitle && (
              <Paragraph4 className="">
                {content?.SurgeryForm?.footerTitle}
              </Paragraph4>
            )}

            {content?.SurgeryForm?.formTitle && (
              <Paragraph4 className="">
                {content?.SurgeryForm?.formTitle}
              </Paragraph4>
            )}
          </div>

          {content?.SurgeryForm?.treatmentOptionHeader && (
            <h1 className="text-2xl font-bold mt-5 mb-3 text-gray-600">
              {content?.SurgeryForm?.treatmentOptionHeader}
            </h1>
          )}

          {content?.SurgeryForm?.treatmentOptionDetails &&
            content?.SurgeryForm?.treatmentOptionDetails?.map(
              (option, index) => {
                const [title, description] = option.split(":");
                return (
                  <Paragraph4
                    className="mb-2 text-justify"
                    key={index}
                  >
                    <span className="font-bold text-gray-800">{title}</span>:{" "}
                    {description}
                  </Paragraph4>
                );
              }
            )}

          {content?.SurgeryForm?.footerTitle && (
            <h2 className="text-xl font-semibold text-gray-800">
              {content?.SurgeryForm?.footerTitle}
            </h2>
          )}


{content?.SurgeryForm?.treatmentDetails?.treatmentFooterDetails && (
            <Paragraph4 className="mb-2 text-justify">
              {content?.SurgeryForm?.treatmentDetails?.treatmentFooterDetails}
            </Paragraph4>
          )}

{content?.SurgeryForm?.surgeryFooter && (
            <Paragraph4 className="mb-5 text-justify">
              {content?.SurgeryForm?.surgeryFooter}
            </Paragraph4>
          )}

          <CallNowButton className="w-full md:w-[350px] h-12 2xl:h-16"/>
          
        </div>


        <div className="w-full lg:w-[40%] h-fit flex justify-center mt-4 lg:mt-0">
          <Form header={"Book Free Consultation"} />
        </div>
      </div>
    </div>
  );
};

ExploreMedLife.propTypes = {
  content: PropTypes.object, // Content prop can be of any type
};

export default ExploreMedLife;
