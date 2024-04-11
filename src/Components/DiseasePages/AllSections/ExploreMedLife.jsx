import { useEffect } from "react";
import Form from "../../Form";
import ReactGA from "react-ga";
import { MdOutlineDone } from "react-icons/md";
import PropTypes from "prop-types";

const ExploreMedLife = ({ content }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="bg-[#ecf7fc] flex flex-col items-center">
      {/* grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-7 items-centergrid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-7 items-center */}
      <div className=" lg:w-[90%] py-2 px-5 lg:px-0 flex flex-col lg:flex-row justify-between gap-10 w-full">
        {/* Left side details */}
        <div className="w-[95%]">
          {content?.SurgeryForm?.surgeryHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.surgeryHeader[0]}{" "}
              <span className="text-teal-600">
                {content.SurgeryForm.surgeryHeader[1]}
              </span>
            </h1>
          )}

          {content.SurgeryForm.surgeryInfo && (
            <p className="text-sm mb-3 font-lato font-normal text-justify">
              {content.SurgeryForm.surgeryInfo}
            </p>
          )}

          {content?.SurgeryForm?.surgeryForm &&
            content?.SurgeryForm?.surgeryForm?.map((type, index) => {
              <p
                className="text-sm mb-2 font-lato font-normal text-justify"
                key={index}
              >
                {type}
              </p>;
            })}

          {content?.SurgeryForm?.surgerydetails && (
            <p className="text-sm mb-5 text-gray-800 font-lato text-justify">
              {content?.SurgeryForm?.surgerydetails}:{" "}
              {content?.SurgeryForm?.surgerydetails}
            </p>
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
                <p
                  className="text-sm mb-2 font-lato font-normal text-justify"
                  key={index}
                >
                  <span className="font-bold text-gray-800">{title}</span>:{" "}
                  {description}
                </p>
              );
            })}

          {content?.SurgeryForm?.surgerydetails2 && (
            <p className="text-sm mb-5 text-gray-800 font-lato text-justify">
              {content?.SurgeryForm?.surgerydetails2}
            </p>
          )}

          {content?.SurgeryForm?.surgerydetails3 && (
            <p className="text-sm text-gray-800 font-lato text-justify">
              {content?.SurgeryForm?.surgerydetails3}
            </p>
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
                  <p
                    className="text-sm mb-2 font-lato font-normal text-justify"
                    key={index}
                  >
                    -{detail}
                  </p>
                );
              }
            )}

          <div className="mb-2 flex flex-col gap-2">
            {content?.SurgeryForm?.treatmentDetails?.treatmentDetailsLists
              ?.length > 0
              ? content?.SurgeryForm?.treatmentDetails?.treatmentDetailsLists?.map(
                  (list, index) => (
                    <div key={index} className="flex  gap-2 mb-4">
                      <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                        <MdOutlineDone></MdOutlineDone>
                      </div>
                      <p className="font-semibold text-gray-800 font-lato -mt-[2px]">
                        {list}
                      </p>
                    </div>
                  )
                )
              : ""}
          </div>

          {content?.SurgeryForm?.treatmentDetails?.treatmentFooterDetails && (
            <p className="text-sm mb-2 font-lato font-normal text-justify">
              {content?.SurgeryForm?.treatmentDetails?.treatmentFooterDetails}
            </p>
          )}

          {content?.SurgeryForm?.featureHeader && (
            <h1 className="text-2xl font-bold mb-3 text-gray-600">
              {content?.SurgeryForm?.featureHeader}
            </h1>
          )}

          <div className="mb-2 flex flex-col gap-2">
            {content?.SurgeryForm?.features?.length > 0
              ? content?.SurgeryForm?.features?.map((feature, index) => (
                  <div key={index} className="flex  gap-2 mb-4">
                    <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-semibold text-gray-800 font-lato -mt-[2px]">
                      {feature}
                    </p>
                  </div>
                ))
              : ""}
          </div>

          {content?.SurgeryForm?.types &&
            content?.SurgeryForm?.types?.map((type, index) => {
              const [title, description] = type.split(":");
              return (
                <p
                  className="text-sm mb-2 font-lato font-normal text-justify"
                  key={index}
                >
                  <span className="font-bold text-gray-800">{title}</span>:{" "}
                  {description}
                </p>
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
                <p
                  className="text-sm mb-2 font-lato font-normal text-justify"
                  key={index}
                >
                  <span className="font-bold text-gray-800">{title}</span>:{" "}
                  {description}
                </p>
              );
            })}

          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            {content?.SurgeryForm?.typeHeader && (
              <p className="text-sm text-gray-800">
                <span className="font-bold">
                  {content?.SurgeryForm?.typeHeader}
                </span>{" "}
                - {content?.SurgeryForm?.type}
              </p>
            )}

            {content?.SurgeryForm?.surgeryNameHeader && (
              <p className="text-sm text-gray-800">
                <span className="font-bold">
                  {content?.SurgeryForm?.surgeryNameHeader}
                </span>{" "}
                - {content?.SurgeryForm?.surgeryName}
              </p>
            )}

            {content?.SurgeryForm?.timeHeader && content?.SurgeryForm?.time && (
              <p className="text-sm text-gray-800">
                <span className="font-bold">
                  {content?.SurgeryForm?.timeHeader}
                </span>{" "}
                - {content?.SurgeryForm?.time}
              </p>
            )}

            {content?.SurgeryForm?.costHeader && content?.SurgeryForm?.cost && (
              <p className="text-sm text-gray-800">
                <span className="font-bold">
                  {content?.SurgeryForm?.costHeader}
                </span>{" "}
                - {content?.SurgeryForm?.cost}
              </p>
            )}

            {content?.SurgeryForm?.footerTitle && (
              <p className="text-sm text-gray-800">
                {content?.SurgeryForm?.footerTitle}
              </p>
            )}

            {content?.SurgeryForm?.formTitle && (
              <p className="text-sm text-gray-800">
                {content?.SurgeryForm?.formTitle}
              </p>
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
                  <p
                    className="text-sm mb-2 font-lato font-normal text-justify"
                    key={index}
                  >
                    <span className="font-bold text-gray-800">{title}</span>:{" "}
                    {description}
                  </p>
                );
              }
            )}

          {content?.SurgeryForm?.footerTitle && (
            <h2 className="text-xl font-semibold text-gray-800">
              {content?.SurgeryForm?.footerTitle}
            </h2>
          )}

          <a
            href="tel:+9876543210"
            className="w-full md:w-[350px] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa] flex justify-center items-center"
          >
            Call now +98 765 432 10
          </a>
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
