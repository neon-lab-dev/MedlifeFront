import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Form from "../../Form";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineDone } from "react-icons/md";
import PatientReview from "./PatientReview";
import Footer from "../../Footer";
import { Link, useParams } from "react-router-dom";
import Rectangle from "../.././../Assests/Rectangle 19194.png";
import useAxiosBaseUrl from "../../../hooks/useBaseUrl";
import Loader from "../../Loader/Loader";
import ReactGA from 'react-ga';

const DoctorsDetails = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  const { id } = useParams();
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);
  const [allReviews, setAllReviews] = useState([]);

  // Data fetch from API

  const [docDetails, setDocDetails] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get(`/api/v1/doctor/${id}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.success) {
          setDocDetails(data.doctor);
          setLoading(false);
        } else {
          window.location.href = `https://${window.location.hostname}/doctors`;
        }
      })
      .catch(
        (err) =>
          (window.location.href = `https://${window.location.hostname}/doctors`)
      );
  }, [axiosBaseUrl]);


  // Data fetch from API

  
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/reviews")
      .then((res) => res.data)
      .then((data) => setAllReviews(data.review))
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);


  if (loading) return <Loader />;

  return (
    <div>
      <Navbar></Navbar>

<div className="flex flex-col items-center">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs w-[95%] lg:w-[89.5%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/doctors"}>Doctors</Link>
          </li>
          <li className="capitalize">{docDetails.doctorName}</li>
        </ul>
      </div>


<div className="w-[95%] lg:w-[89.5%] grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-2 rounded-lg border">
          <div className="shadow-lg p-5">
            <div className="border-b border-gray-400 pb-5">
              <div className="grid grid-cols-3 gap-3 xl:gap-0">
                <img
                  className="w-full md:w-full lg:w-[210px] h-[256px] rounded-lg border-teal-500"
                  src={Rectangle}
                  alt=""
                />

                <div className="col-span-2">
                  <div className="border-b border-gray-400 pb-2 mb-3">
                    <h1 className="text-[#17324A] text-xl md:text-2xl font-semibold mb-1 capitalize">
                      {docDetails.doctorName}
                    </h1>
                    <p className="text-[#17324A] text-sm md:text-base capitalize">
                      {" "}
                      {docDetails.education}-{" "}
                      <span className="text-teal-500">
                        {docDetails.diseaseHandle}
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-5 md:gap-10 items-center mb-2">
                    <h2 className="text-sm md:text-lg font-bold text-gray-800 flex items-center gap-2">
                      {" "}
                      <BiMessageDetail></BiMessageDetail>{" "}
                      {docDetails.experience}
                    </h2>

                    <h2 className="text-sm md:text-lg font-bold text-gray-800 flex items-center gap-2">
                      {" "}
                      <BiMessageDetail></BiMessageDetail> {docDetails.location}
                    </h2>
                  </div>

                  <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                    Specialization
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center mb-4 w-5/6">
                    <div className="bg-teal-100 border border-teal-500 p-1 rounded-md">
                      <p className="text-xs md:text-lg">
                        {docDetails.specialization1}
                      </p>
                    </div>
                    <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                      <p className="text-xs md:text-lg">
                        {docDetails.specialization2}
                      </p>
                    </div>
                    <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                      <p className="text-xs md:text-lg">
                        {docDetails.specialization3}
                      </p>
                    </div>
                  </div>

                  <button className="w-full md:w-[350px] h-[50px] border border-[#00a0aa] rounded-lg text-[#00a0aa] ">
                    Call now +91 995 599 2502
                  </button>
                </div>
              </div>
            </div>

            {/* Details */}

            {/* About doctor section */}
            <div className="border-b border-gray-400 pb-3 mb-4 mt-3">
              <h1 className="text-2xl font-bold text-gray-600 mb-2">
                About {docDetails.doctorName}
              </h1>
              <p className="text-gray-700">
                Dr. Harshvardhan in Patna is one of the leading businesses in
                the Nephrologists. Also known for Nephrologists, Kidney
                Transplant Doctors and much more.
              </p>
            </div>

            {/* Expertise section */}
            <div className="border-b border-gray-400 pb-3 mb-4">
              <h1 className="text-2xl font-bold text-gray-600 mb-2">
                Expertise:
              </h1>
              {/* Bullet points using tick */}

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">Renal Biopsy</p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">IIV Catheterization</p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">
                  Various Kidney diseases – related to systemic disorders
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">
                  Diabetic Nephropathy & Hypertension
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">
                  Kidney disease with liver disorder & cardiac disease
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">Haemodialysis</p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">Kidney Transplant</p>
              </div>
            </div>

            {/* Professional Membership section */}
            <div className="">
              <h1 className="text-2xl font-bold text-gray-600 mb-2">
                Professional Membership:
              </h1>
              {/* Bullet points using tick */}

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">ISN membership</p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">Member of API</p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">
                  Indian Society of Organ Transplantation
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">
                  International society of nephrology
                </p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">American society of Nephrology</p>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
                  <MdOutlineDone></MdOutlineDone>
                </div>
                <p className="font-semibold">
                  Peritoneal Dialysis Society of India
                </p>
              </div>
            </div>
          </div>


            {/* Patient reviews section */}
          <div className="shadow-lg p-5">
            <h1 className="text-2xl font-bold text-gray-600 mb-2">
              Patients Reviews
            </h1>

            {allReviews.length > 0
        ? allReviews.map((review) => (
            <div
              key={review._id}
              className="grid grid-cols-1 md:grid-cols-5 p-3 pb-3 mb-7 border-b"
            >
              <div className="border-b md:border-b-0 md:border-r pb-2 md:pb-0 mb-2 md:mr-2 ">
                <p className="text-md mb-2 text-[#17324A]">
                  Name: <span className="font-semibold">{review?.name}</span>
                </p>
                <p className="text-md mb-2 text-[#17324A]">
                  City: <span className="font-semibold">PATNA</span>
                </p>
                <p className="text-md mb-2 text-[#17324A]">
                  Disease: <span className="font-semibold">HERNIA</span>
                </p>

                <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21.0078 8.00007C21.5411 8.00007 22.0078 8.20007 22.4078 8.60007C22.8078 9.00007 23.0078 9.46674 23.0078 10.0001V12.0001C23.0078 12.1167 22.9951 12.2417 22.9698 12.3751C22.9445 12.5084 22.9071 12.6334 22.8578 12.7501L19.8578 19.8001C19.7078 20.1334 19.4578 20.4167 19.1078 20.6501C18.7578 20.8834 18.3911 21.0001 18.0078 21.0001H10.0078C9.45781 21.0001 8.98715 20.8044 8.59581 20.4131C8.20448 20.0217 8.00848 19.5507 8.00781 19.0001V8.82507C8.00781 8.5584 8.06215 8.3044 8.17081 8.06307C8.27948 7.82174 8.42515 7.60907 8.60781 7.42507L14.0328 2.02507C14.2828 1.79174 14.5788 1.65007 14.9208 1.60007C15.2628 1.55007 15.5918 1.6084 15.9078 1.77507C16.2245 1.94174 16.4538 2.17507 16.5958 2.47507C16.7378 2.77507 16.7668 3.0834 16.6828 3.40007L15.5578 8.00007H21.0078ZM4.00781 21.0001C3.45781 21.0001 2.98715 20.8044 2.59581 20.4131C2.20448 20.0217 2.00848 19.5507 2.00781 19.0001V10.0001C2.00781 9.45007 2.20381 8.97941 2.59581 8.58807C2.98781 8.19674 3.45848 8.00074 4.00781 8.00007C4.55781 8.00007 5.02881 8.19607 5.42081 8.58807C5.81281 8.98007 6.00848 9.45074 6.00781 10.0001V19.0001C6.00781 19.5501 5.81215 20.0211 5.42081 20.4131C5.02948 20.8051 4.55848 21.0007 4.00781 21.0001Z" fill="#2CA9E1"/>
                </svg>
                <p className='text-[#47617A] text-xs'>Would Recommend</p>
                </div>

              </div>

              {/* Reviews Card with star icon */}
              <div className="ml-3 col-span-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center gap-4">
                    <h2 className="text-lg font-semibold">{review?.ratings}</h2>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z"
                          fill="#FDD835"
                        />
                        <path
                          d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z"
                          fill="#FFFF8D"
                        />
                        <path
                          d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z"
                          fill="#F4B400"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z"
                          fill="#FDD835"
                        />
                        <path
                          d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z"
                          fill="#FFFF8D"
                        />
                        <path
                          d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z"
                          fill="#F4B400"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z"
                          fill="#FDD835"
                        />
                        <path
                          d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z"
                          fill="#FFFF8D"
                        />
                        <path
                          d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z"
                          fill="#F4B400"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z"
                          fill="#FDD835"
                        />
                        <path
                          d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z"
                          fill="#FFFF8D"
                        />
                        <path
                          d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z"
                          fill="#F4B400"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z"
                          fill="#FDD835"
                        />
                        <path
                          d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z"
                          fill="#FFFF8D"
                        />
                        <path
                          d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z"
                          fill="#F4B400"
                        />
                      </svg>
                    </div>
                    <h2 className="text-md md:text-lg font-semibold">
                      ( 11 Months ago)
                    </h2>
                  </div>
                </div>

                <p className="text-[#47617A] text-justify">{review?.review}</p>
              </div>
            </div>
          ))
        : "No content here"}
          </div>
        </div>

        <div className="h-fit md:px-0 flex md:justify-center lg:justify-end w-full">
          <Form></Form>
        </div>


      </div>
</div>
      <Footer></Footer>
    </div>
  );
};

export default DoctorsDetails;
