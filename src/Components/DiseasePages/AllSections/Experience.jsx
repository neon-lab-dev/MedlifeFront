import React, { useEffect } from 'react';
import hospital from "../../../Assests/timeline/hospital 1.png";
import healthInsurance from "../../../Assests/timeline/health-insurance (1) 1.png";
import healthInsurance1 from "../../../Assests/timeline/health-insurance 1.png";
import ambulance from "../../../Assests/timeline/ambulance 1.png";
import healthCare from "../../../Assests/timeline/healthcare 1.png";
import ReactGA from 'react-ga';

const Experience = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      })
    return (
        <div className='flex flex-col items-center py-10'>
            <div className='w-[95%] lg:w-[90%]'>
                <h1 className='text-[32px] text-gray-800 text-center mb-6 font-semibold font-lato'>Your Experience With Us</h1>


                <div className='grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-y-0 gap-5 lg:gap-20'>

                <div className='mt-16 flex flex-col items-center'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-36 md:h-36 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-32 md:h-32 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-20' src={hospital} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-center text-xs md:text-base'>Smooth Hospital Admission</p>
                </div>


                <div className='mt-0 xl:mt-20 flex flex-col items-center'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-36 md:h-36 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-32 md:h-32 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-20' src={healthInsurance} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-center text-xs md:text-base'>Smooth Hospital Admission</p>
                </div>

                <div className='mt-20 xl:mt-0 flex flex-col items-center'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-36 md:h-36 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-32 md:h-32 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-20' src={healthInsurance1} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-center text-xs md:text-base'>Smooth Hospital Admission</p>
                </div>

                <div className='mt-5 xl:mt-[100px] flex flex-col items-center'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-36 md:h-36 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-32 md:h-32 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-20' src={ambulance} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-center text-xs md:text-base'>Smooth Hospital Admission</p>
                </div>

                <div className='ml-20 md:ml-36 xl:ml-0 mt-0 xl:mt-16 flex flex-col items-center justify-self-center'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-36 md:h-36 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-32 md:h-32 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-20' src={healthCare} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-center text-xs md:text-base'>Smooth Hospital Admission</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;