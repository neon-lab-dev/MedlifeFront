import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import useAxiosBaseUrl from "./../../hooks/useBaseUrl";
import { MdError } from "react-icons/md";
import ReactStars from "react-rating-star-with-type";
import ProgressBar from "@ramonak/react-progress-bar";

const ReviewHeader = () => {
  const axiosBaseUrl = useAxiosBaseUrl();
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  // const [doctorNameError, setDoctorNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [diseaseError, setDiseaseError] = useState("");
  const navigate = useNavigate();

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    const name = e.target.patientName.value;
    const mobileNumber = e.target.mobile.value;
    const doctor = e.target.doctorName.value;
    const city = e.target.city.value;
    const disease = e.target.disease.value;

    if (name.length === 0) {
      setNameError("Patient name required!");
      return;
    } else {
      setNameError("");
    }

    if (mobileNumber.length === 0) {
      setMobileError("Mobile number required!");
      return;
    } else {
      setMobileError("");
    }

    // if (doctor.length === 0) {
    //   setDoctorNameError("Doctor's name required!");
    //   return;
    // } else{
    //   setDoctorNameError("")
    // }

    if (city === "Select City / शहर चुनें") {
      setCityError("City required!");
      return;
    } else {
      setCityError("");
    }

    if (disease === "Select Disease / रोग का चयन करें") {
      setDiseaseError("Disease name required!");
      return;
    } else {
      setDiseaseError("");
    }

    const reviewInfo = {
      name,
      mobileNumber,
      doctor,
      city,
      disease,
    };

    localStorage.setItem("reviewInfo", JSON.stringify(reviewInfo));
    if (localStorage.getItem("reviewInfo")) {
      navigate("/writeReview");
    } else {
      console.error("Failed to save info, try again");
    }
  };

  // Data fetch from API

  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/reviews")
      .then((res) => res.data)
      .then((data) => setAllReviews(data.review))
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);

  const totalReviews = allReviews.length;
  const fiveStarReviews = allReviews.filter((review) => review.ratings === 5);
  const numberOfFiveStarReviews = fiveStarReviews.length;
  const percentageOfFiveStarReviews = `${(
    (numberOfFiveStarReviews / totalReviews) *
    100
  ).toFixed(2)}%`;

  const fourStarReviews = allReviews.filter((review) => review.ratings === 4);
  const numberOfFourStarReviews = fourStarReviews.length;
  const percentageOfFourStarReviews =
    (numberOfFourStarReviews / totalReviews) * 100;

  const threeStarReviews = allReviews.filter((review) => review.ratings === 3);
  const numberOfThreeStarReviews = threeStarReviews.length;
  const percentageOfThreeStarReviews =
    (numberOfThreeStarReviews / totalReviews) * 100;

  const twoStarReviews = allReviews.filter((review) => review.ratings === 2);
  const numberOfTwoStarReviews = twoStarReviews.length;
  const percentageOfTwoStarReviews =
    (numberOfTwoStarReviews / totalReviews) * 100;

  const oneStarReviews = allReviews.filter((review) => review.ratings === 1);
  const numberOfOneStarReviews = oneStarReviews.length;
  const percentageOfOneStarReviews =
    (numberOfOneStarReviews / totalReviews) * 100;

  let reviews = allReviews.map((review) => review.ratings);
  let sum = 0;

  for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i];
  }

  // Calculate the average
  let average = sum / reviews.length || 0;


  return (
    <div className="flex flex-col items-center">

      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[95%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>All Reviews</li>
        </ul>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10 w-[95%] md:w-[90%] ">
          <div className="col-span-2 flex items-center justify-center">
            {/* Left side reviews section */}
            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-0 lg:gap-3 col-span-2 mb-8 ">
              <div className="border-b md:border-b-0 border-r lg:border-r md:p-2 lg:p-4 p-4  md:pb-0 border-gray-700">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Total Reviews
                </h2>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  {allReviews.length}
                </h2>
                <p className="text-center">
                  Yearly Progress in Patient Feedback
                </p>
              </div>

              {/* Reviews Card with star icon */}
              <div className="border-b md:border-b-0  md:border-r lg:border-0 p-4 md:p-2 lg:p-4 2xl:border-r md:pb-0 border-gray-700 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-center">
                  Average Rating
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  <h2 className="text-xl font-semibold">
                    {average?.toFixed(2) || 0}
                  </h2>
                  {/* <h2 className="text-xl font-semibold">4.7</h2> */}
                  <div className="">
                    <ReactStars
                      // onChange={onChange}
                      value={average}
                      edit={true}
                      activeColors={["#FFCE00"]}
                    />
                  </div>
                </div>
                <p className="text-center ml-1 md:ml-0">
                  Average rating this year
                </p>
              </div>

              {/* Rating counter section */}

              <div className="col-span-2 ml-0 md:p-2 lg:p-4 lg:ml-0 p-4">
                {/* 5 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  
                  <div className="flex items-center gap-2">
                  <p>5</p>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                  <div className="w-full">
                    <ProgressBar
                      barContainerClassName="progressContainer"
                      height="7px"
                      isLabelVisible={false}
                      completed={percentageOfFiveStarReviews}
                      bgColor="#00C193"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfFiveStarReviews}
                  </h3>
                </div>

                {/* 4 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  
                  <div className="flex items-center gap-2">
                  <p>4</p>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                  <div className="w-full">
                    <div className="w-full">
                      <ProgressBar
                        barContainerClassName="progressContainer"
                        height="7px"
                        isLabelVisible={false}
                        completed={percentageOfFourStarReviews}
                        bgColor="#FFB4AA"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfFourStarReviews}
                  </h3>
                </div>

                {/* 3 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  
                  <div className="flex items-center gap-2">
                  <p>3</p>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                  <div className="w-full">
                    <ProgressBar
                      barContainerClassName="progressContainer"
                      height="7px"
                      isLabelVisible={false}
                      completed={percentageOfThreeStarReviews}
                      bgColor="#A6A1FC"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfThreeStarReviews}
                  </h3>
                </div>

                {/* 2 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  
                  <div className="flex items-center gap-2">
                  <p>2</p>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                  <div className="w-full">
                    <ProgressBar
                      barContainerClassName="progressContainer"
                      height="7px"
                      isLabelVisible={false}
                      completed={percentageOfTwoStarReviews}
                      bgColor="#2CA9E1"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfTwoStarReviews}
                  </h3>
                </div>

                {/* 1 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  
                  <div className="flex items-center gap-2">
                  <p>1</p>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                  <div className="w-full">
                    <ProgressBar
                      barContainerClassName="progressContainer"
                      height="7px"
                      isLabelVisible={false}
                      completed={percentageOfOneStarReviews}
                      bgColor="#C0000C"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfOneStarReviews}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="w-[95%] md:w-4/5 lg:w-full max-w-[500px] 2xl:w-full -mt-0 lg:-mt-10 mb-2 md:mb-10 lg:mb-0 justify-self-center">
            <form
              onSubmit={handleSubmitDetails}
              className="bg-white shadow-xl mb-7 md:mb-0 border p-6 rounded-3xl flex flex-col items-center gap-3 "
            >
              <h1 className="text-2xl 2xl:text-3xl text-center font-semibold">
                Write A Review
              </h1>
              <h2 className="text-[#5854A8]  font-semibold text-center mb-1" style={{fontSize: "clamp(12px, 1.1vw, 18px)"}}>
                चिकित्सा उपचार परामर्श के लिए, फॉर्म भरें
              </h2>
              <input
                name="patientName"
                className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg"
                placeholder="Patient Name / रोगी का नाम"
                type="text"
              />
              <input
                name="mobile"
                className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg"
                placeholder="Mobile No. / मोबाइल नंबर"
                type="number"
              />
              <input
                name="doctorName"
                className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg"
                placeholder="Doctor's Name"
                type="text"
              />

              <div class="relative inline-block text-left w-full">
                <select
                  name="city"
                  className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg appearance-none"
                >
                  <option disabled selected>
                    Select City / शहर चुनें
                  </option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Patna">Patna</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata"> Kolkata </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </div>

              <div class="relative inline-block text-left w-full">
                <select
                  name="disease"
                  className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg appearance-none"
                >
                  <option disabled selected>
                    Select Disease / रोग का चयन करें
                  </option>
                  <option value="Hernia">Hernia</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Blood Pressure">Blood Pressure</option>
                  <option value="Diphtheria"> Diphtheria </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </div>

              
                {nameError && (
                  <div className="w-full">
                  <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                    <MdError></MdError> {nameError}
                  </p>
                  </div>
                )}

                {mobileError && (
                  <div className="w-full">
                  <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                    <MdError></MdError> {mobileError}
                  </p>
                  </div>
                ) }

                {cityError && (
                  <div className="w-full">
                  <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                    <MdError></MdError> {cityError}
                  </p>
                  </div>
                )}

                {diseaseError && (
                  <div className="w-full">
                  <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                    <MdError></MdError> {diseaseError}
                  </p>
                  </div>
                ) 
                }
              <button className=" w-full bg-[#00a0aa] px-4 py-3 rounded-xl text-white border border-[#00a0aa] flex items-center gap-2 justify-center">
                Continue
                <FaArrowRightToBracket></FaArrowRightToBracket>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeader;
