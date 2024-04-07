import React, { useEffect, useState } from "react";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import ReactStars from "react-rating-star-with-type";

const ReviewCard = () => {
  const axiosBaseUrl = useAxiosBaseUrl();

  // Data fetch from API

  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/reviews")
      .then((res) => res.data)
      .then((data) => setAllReviews(data.review))
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);

  const calculateTimeAgo = (createdAt) => {
    const currentDate = new Date();
    const reviewDate = new Date(createdAt);
    const timeDifference = currentDate - reviewDate;
  
    // Calculate time in days if less than a month
    if (timeDifference < 30 * 24 * 60 * 60 * 1000) {
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    }
  
    // Calculate time in months
    const monthsAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
  };


  return (
    <div className="flex flex-col items-center">
      {allReviews.length > 0
        ? allReviews.map((review) => (
            <div
              key={review._id}
              className="grid grid-cols-1 md:grid-cols-5 p-3 pb-3 mb-7 border-b w-[95%] md:w-[90%]"
            >
              <div className="border-b md:border-b-0 md:border-r pb-2 md:pb-0 mb-2 md:mr-2 ">
                <p className="text-lg mb-2 text-[#17324A]">
                  Name: <span className="font-semibold">{review?.name}</span>
                </p>
                <p className="text-lg mb-2 text-[#17324A]">
                  City: <span className="font-semibold">PATNA</span>
                </p>
                <p className="text-lg mb-2 text-[#17324A]">
                  Disease: <span className="font-semibold">HERNIA</span>
                </p>

              </div>

              {/* Reviews Card with star icon */}
              <div className="ml-3 col-span-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center gap-4">
                    <h2 className="text-lg font-semibold">{review?.ratings}</h2>
                    <ReactStars
                      value={review?.ratings}
                      edit={true}
                      activeColors={["#FFCE00"]}
                    />
                    <h2 className="text-md md:text-lg font-semibold">
                      ({calculateTimeAgo(review?.createdAt)})
                    </h2>
                  </div>
                </div>

                <p className="text-[#47617A] text-justify">{review?.review}</p>
              </div>
            </div>
          ))
        : "No content here"}
    </div>
  );
};

export default ReviewCard;
