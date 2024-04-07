import React, { useEffect } from 'react';
import Navbar from './../Navbar';
import errorImage from "../../Assests/404.png"
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { IoReturnUpBack } from "react-icons/io5";
import ReactGA from 'react-ga';

const ErrorPage = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      })
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center py-10 px-10'>
                <h1 className='text-3xl font-bold text-[#344E5F]'>Page Not Found</h1>
                <img className='w-full lg:w-2/6 -mt-5 md:-mt-7' src={errorImage} alt="" />
                <Link to={"/"} className="w-full md:w-[300px] h-[64px] text-white border bg-[#00a79d] rounded-lg flex gap-2 justify-center items-center font-semibold text-lg -mt-5 md:-mt-9">
                <IoReturnUpBack className='text-3xl'></IoReturnUpBack> Back to Home
          </Link>
          
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;