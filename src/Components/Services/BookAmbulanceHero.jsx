import React from 'react';
import ambulance from "../../Assests/ambulance.png";
import duty from "../../Assests/duty.png";
import doctor from "../../Assests/doctor.png";
import bed from "../../Assests/bed.png";
import { Link } from 'react-router-dom';

const BookAmbulanceHero = () => {
    return (
        <div className='bg-gradient-to-r from-teal-50 via-transparent to-teal-50 px-5 lg:px-10 pt-3'>
            {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>Book Ambulence</li>
        </ul>
      </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 '>
                <div>
                <h1 className='text-[#17324A] text-3xl md:text-5xl font-semibold mb-7'> Our Ambulence service</h1>
                
                <div className='flex items-center gap-3 mb-5'>
                <div className='bg-white w-12 h-12 rounded-full shadow-md p-2 flex justify-center items-center'>
                    <img src={duty} alt="" />
                </div>
                <h2 className='text-[#47617A] text-xl font-semibold'>त्वरित प्रतिक्रिया समय</h2>
                </div>

                <div className='flex items-center gap-3 mb-5'>
                <div className='bg-white w-12 h-12 rounded-full shadow-md p-2 flex justify-center items-center'>
                    <img src={doctor} alt="" />
                </div>
                <h2 className='text-[#47617A] text-xl font-semibold'>उच्च प्रशिक्षित और प्रमाणित आपातकालीन चिकित्सा कर्मिका</h2>
                </div>

                <div className='flex items-center gap-3 mb-7'>
                <div className='bg-white w-12 h-12 rounded-full shadow-md p-2 flex justify-center items-center'>
                    <img src={bed} alt="" />
                </div>
                <h2 className='text-[#47617A] text-xl font-semibold'>उन्नत जीवन समर्थन उपकरण और सुविधाएं</h2>
                </div>

                <button className="w-full md:w-96 border border-[#00a0aa] px-4 py-3 rounded-md text-[#00a0aa]">
            Call now +91 995 599 2502
          </button>
                </div>

          <img className='' src={ambulance} alt="" />
            </div>
        </div>
    );
};

export default BookAmbulanceHero;