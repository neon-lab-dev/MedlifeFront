import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Getintouch from "../../Getintouch";
import Officeaddress from "../../Officeaddress";
import Footer from "../../Footer";
import useAxiosBaseUrl from "../../../hooks/useBaseUrl";
import Rating from "react-rating";
import { Toaster, toast } from "sonner";
import ReactGA from 'react-ga';

const WriteReview = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  const [ratings, setRatings] = useState(0);
  const [reviewInfo, setReviewInfo] = useState({});
  const axiosBaseUrl = useAxiosBaseUrl();
  const navigate = useNavigate();

  useEffect(() => {
    const storedReviewInfo = localStorage.getItem("reviewInfo");
    if (storedReviewInfo) {
      setReviewInfo(JSON.parse(storedReviewInfo));
    }
  }, []);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    const reviewDetails = {
      name: reviewInfo.name,
      mobileNumber: reviewInfo.mobileNumber,
      doctor: reviewInfo.doctor,
      city: reviewInfo.city,
      disease: reviewInfo.disease,
      review: review,
      ratings: ratings,
    };

    axiosBaseUrl
      .post("/api/v1/createreview", reviewDetails)
      .then((response) => {
        if (response.data.success) {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({}), 2000)
          );
          toast.promise(promise, {
            loading: "Writing Review...",
            success: () => {
              navigate("/review")
              return "Thank you!! Your valuable feedback is added";
            },
            error: "Error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center">
        {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[95%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Write Reviews</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-[95%] md:w-[90%] py-12">
        <div className="shadow-xl p-3 rounded-md">
          <div className="border-b pb-2 border-gray-700 mb-5 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Patient information
            </h2>
            <div>
              <p className="text-md mb-2 text-[#17324A]">
                Name: {reviewInfo.name}
              </p>
              <p className="text-md mb-2 text-[#17324A]">
                City: {reviewInfo.city}
              </p>
              <p className="text-md mb-2 text-[#17324A]">
                Disease: {reviewInfo.disease}
              </p>
            </div>
          </div>

          <div className="border-b pb-2 border-gray-300 mb-5">
            <h2 className="text-lg font-semibold mb-2 ">
              Enhancing Healthcare Accessibility
            </h2>
            <p className="text-md mb-2 text-[#17324A]">
              Your ratings help us understand how effectively we are making
              healthcare accessible to you.
            </p>
          </div>

          <div className="border-b pb-2 border-gray-300 mb-5">
            <h2 className="text-lg font-semibold mb-2 ">
              Improving the Patient Experience
            </h2>
            <p className="text-md mb-2 text-[#17324A]">
              We value the details of your journey with MedLifeEasy. Your
              feedback guides us in enhancing the patient experience.
            </p>
          </div>

          <div className="border-b pb-2 border-gray-300 mb-5">
            <h2 className="text-lg font-semibold mb-2 ">Quality Assurance</h2>
            <p className="text-md mb-2 text-[#17324A]">
              Your ratings serve as a quality check for us. They let us know
              when we're on the right track and when there's room for
              improvement.
            </p>
          </div>

          <div className="border-b pb-2 border-gray-300 mb-5">
            <h2 className="text-lg font-semibold mb-2 ">
              Trust and Transparency
            </h2>
            <p className="text-md mb-2 text-[#17324A]">
              MedLifeEasy is built on trust and transparency. Your honest
              ratings contribute to a transparent relationship between us.
            </p>
          </div>
        </div>

        {/* Right side review form */}
        <div className="md:col-span-2 shadow-xl px-10 py-5">
          <div className="border-b border-gray-300 pb-2 mb-5">
            <h2 className="text-2xl font-semibold mb-3">
              Rate your experience with us
            </h2>
            <div className="flex items-center gap-3">
              <Rating
                onChange={(value) => {
                  console.log("Rating:", value);
                  setRatings(value);
                }}
                emptySymbol={
                  <FaStar className="text-gray-300 text-3xl"></FaStar>
                }
                fullSymbol={
                  <FaStar className="text-[#FFCE00] text-3xl"></FaStar>
                }
              />
            </div>
          </div>

          <form onSubmit={handleSubmitReview} className="">
            <h2 className="text-2xl font-semibold mb-5">
              Write your experience with us
            </h2>
            <div className="flex flex-col justify-center items-center gap-5">
              <textarea
                className="bg-white border border-gray-400 rounded-md w-full outline-none p-3 focus:border-teal-700"
                name="review"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="w-full md:w-[350px] h-12 2xl:h-16 bg-[#00A0AA] rounded-md text-white mb-20">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Toaster position="top-center" />

      <Getintouch></Getintouch>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
    </div>
  );
};

export default WriteReview;
