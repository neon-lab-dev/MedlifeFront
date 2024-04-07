import React from 'react';
import Footer from '../Footer';
import Form from '../Form';
import { MdOutlineDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import hospital from "../../Assests/hospital.png"
import logo from "../../Assests/logo.png"

const HospitalDetails = () => {
    return (
        <div>
        <Navbar></Navbar>

         {/* Breadcrumbs menu */}
  <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
    <ul>
      <li>
      <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link>Laparoscopy</Link>
      </li>
      <li className="capitalize">Dr.Sahajana Prasad</li>
    </ul>
  </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 md:px-10 py-5'>
            <div className='col-span-2 p-5 rounded-lg shadow-lg'>
            <div className="">
            <div className='relative'>
              <div className='bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg'>
              <img className='w-32' src={logo} alt="" />
              </div>
            <img className="w-full mb-3 rounded-t-lg" src={hospital} alt="" />
            </div>
        <div className="px-4 pb-4">
        <p className="text-gray-500 mb-4">
        The Orchid Hospital is the first multi super specialty hospital in Patna, Bihar, India, which has taken an initiative to amalgamate and integrate the best in healthcare be it manpower or technology. this hospital has been set up with the vision of providing quality healthcare at affordable cost and within the reach of every individual. Equipped with “futuristic technology” and truly “brilliant and dedicated professionals” with the infrastructure, The Orchid Hospital team believes in working as a team and offers high quality, value and evidence based integrated healthcare.
        </p>


        <h2 className='text-[#17324A] text-xl font-semibold mb-3'>Our Departments:</h2>
        <div className="flex items-center gap-2 mb-2">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>General Surgery</p>
      </div>
        <div className="flex items-center gap-2 mb-2">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Laparoscopic Surgery</p>
      </div>
        <div className="flex items-center gap-2 mb-2">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Obs & Gynae</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Burn & Plastic Surgery</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Vascular Surgery</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>General Medicine</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Orthopaedic Surgery</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Gastroenterology</p>
      </div>


        <h2 className='text-[#17324A] text-xl font-semibold mb-3'>Our Facilities:</h2>
        <div className="flex items-center gap-2 mb-2">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>24 hour Chemist Shop</p>
      </div>
        <div className="flex items-center gap-2 mb-2">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>24 Hour Pathology</p>
      </div>
        <div className="flex items-center gap-2 mb-2">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>24 hour Power back-up</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>24 hour Ambulance Service</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>Fully Air-conditioned</p>
      </div>
        <div className="flex items-center gap-2 mb-4">
        <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
          <MdOutlineDone></MdOutlineDone>
        </div>
        <p>24 hour Emergency Services</p>
      </div>

        </div>
      </div>
            
            </div>

            <Form></Form>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default HospitalDetails;