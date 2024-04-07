import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import bankLogo from "../../Assests/bankLogo.png"
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga';

const Payments = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      })
    return (
        <div className='h-[100vh] flex flex-col'>
            <Helmet>
        <title>Medlife Easy | Payment</title>
      </Helmet>
            <Navbar></Navbar>
 <div className='flex items-center flex-col mt-2 mb-10 h-full'>
           {/* Breadcrumbs menu */}
           <div className="text-sm breadcrumbs w-[89.5%]">
          <ul>
            <li>
            <Link to={"/"}>Home</Link>
            </li>
            <li>Payments</li>
          </ul>
        </div>


            <div className='w-[95%] lg:w-4/5'>
            <div>
            <div className="px-10">
        <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-4">
        Payments
        </h1>
        <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 pt-10 pb-12'>
            <div className='shadow-lg p-3 rounded-lg'>
                <img className='w-56' src={bankLogo} alt="" />
                <p className='mb-1 font-lato'><span className='font-bold text-gray-800'>Name:</span> <span className='text-gray-700'>MEDLIFEEASY PRIVATE LIMITED</span></p>
                <p className='mb-1 font-lato'><span className='font-bold text-gray-800'>A/C:</span> <span className='text-gray-700'>030705009211</span></p>
                <p className='mb-1 font-lato'><span className='font-bold text-gray-800'>IFSC:</span> <span className='text-gray-700'>ICIC0000307</span></p>
                <p className='mb-1 font-lato'><span className='font-bold text-gray-800'>Branch:</span> <span className='text-gray-700'> ICICI BANK KANKARBAGH, PATNA</span></p>
            </div>
            </div>
            </div>
 </div>

            <Footer></Footer>
        </div>
    );
};

export default Payments;