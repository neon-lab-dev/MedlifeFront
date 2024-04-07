import React, { useEffect, useState } from "react";
import Form from "../Form";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import pic from "../../Assests/Dr-Manu-Bora-for-ACL-Treatment.jpg"
import ReactGA from 'react-ga';

const BlogsDetails = () => {
  const { id } = useParams();
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  // Data fetch from API

  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get(`/api/v1/blog/${id}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.success) {
          setBlogDetails(data.blog);
          setLoading(false);
        } else {
          window.location.href = `https://${window.location.hostname}/blog`;
        }
      })
      .catch(
        (err) =>
          (window.location.href = `https://${window.location.hostname}/blog`)
      );
  }, [id, axiosBaseUrl]);
  if (loading) return <div className="w-[100vw] h-[100vh] flex justify-center"><Loader /></div> ;


  return (
    <div>
      <Navbar></Navbar>

<div className="py-2 flex flex-col items-center">
        {/* Breadcrumbs menu */}
        <div className="text-sm breadcrumbs w-[95%] lg:w-[89.5%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li className="capitalize">
            {blogDetails.title.slice(0, 30)} ... ...
          </li>
        </ul>
      </div>
      
      <div className=" w-[95%] lg:w-[89.5%] grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5 mb-5 lg:mb-10">
          <div className="col-span-2 rounded-3xl shadow-lg h-full lg:h-[460px] xl:h-[430px] 2xl:h-[510px]">
            <img
              className="w-full h-full rounded-b-3xl rounded-t-3xl"
              src={blogDetails.avatar.url}
              // src={blogDetails?.avatar?.url}
              alt=""
            />
          </div>

          <div className="z-10 -mt-6 md:justify-center lg:justify-end hidden lg:flex">
          <Form header={"Book Free Consultation"} />
        </div>
      </div>

      <div className="w-[95%] lg:w-[89.5%]">
      <div className="mb-5 lg:mb-10 flex flex-col gap-3">
            <h1 className="text-[#17324A] text-[32px] font-lato font-semibold">
              {blogDetails.title}
            </h1>
            <p className="text-gray-500 leading-8 font-lato text-justify">
              {blogDetails.about}
            </p>
            </div>


        <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex md:justify-center items-center lg:hidden mt-6 lg:-mt-6 box-border ">
          <div className=" w-full flex justify-center max-w-[560px] ">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
      </div>
</div>
      <Footer></Footer>
    </div>
  );
};

export default BlogsDetails;
