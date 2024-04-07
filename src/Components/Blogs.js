// import React, { useEffect, useState } from "react";
// import "./styles/Blogs.css";
// import useAxiosBaseUrl from "../hooks/useBaseUrl";
// import Loader from "./Loader/Loader";
// import { Link } from "react-router-dom";
// import pic from "../Assests/Dr-Manu-Bora-for-ACL-Treatment.jpg";

// const Blogs = () => {
//   const axiosBaseUrl = useAxiosBaseUrl();
//   const [loading, setLoading] = useState(true);

//   // Data fetch from API

//   const [blogs, setBlogs] = useState([]);
//   useEffect(() => {
//     axiosBaseUrl
//       .get("/api/v1/blogs")
//       .then((res) => res.data)
//       .then((data) => {
//         setBlogs(data.blogs);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err.message));
//   }, [axiosBaseUrl]);

//   return (
//     <div className="py-7 w-full flex flex-col items-center ">
//       <div className=" w-[95%] md:w-4/5">
//         {/* Headline */}
//         <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
//           Our Recent Blogs
//         </h1>

//         {!loading ? (
//             <div className="flex justify-center items-center w-full h-[100vh]"><Loader /></div>
//           ) :
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9">
//           { blogs?.length > 0 ? (
//             blogs.map((blog, ind) => (
//               <div key={ind} className="shadow-lg rounded-lg flex flex-col ">
//                 <img
//                   className="w-full h-64  rounded-t-lg"
//                   // src={pic}
//                   src={blog.avatar.url}
//                   alt=""
//                 />
//                 <div className="p-5 h-full flex flex-col items-start justify-between gap-[10px] box-border">
//                   <h1 className="text-[#17324A] text-2xl font-semibold ">
//                     {blog.title.length <= 30
//                       ? blog.title
//                       : `${blog.title.slice(0, 30)} ...`}
//                   </h1>
//                   {blog.about.length > 200 ? (
//                     <div className=" ">
//                       <p className="text-gray-500 ">
//                         {blog.about.length <= 200
//                           ? blog.about
//                           : `${blog.about.slice(0, 200)} ...`}
//                       </p>
//                     </div>
//                   ) : (
//                     <p className="text-gray-500">{blog.about}</p>
//                   )}
//                   {blog._id && (
//                     <Link
//                       to={`/blogsDetails/${blog._id}`}
//                       className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800 "
//                     >
//                       Read More
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No blogs available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React, { useEffect, useState } from "react";
import "./styles/Blogs.css";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import pic from "../Assests/Dr-Manu-Bora-for-ACL-Treatment.jpg";
import ReactGA from 'react-ga';


const Blogs = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);


  // Data fetch from API


  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/blogs")
      .then((res) => res.data)
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);


  return (
    <div className="py-7 w-full flex flex-col items-center ">
      <div className=" w-[95%] md:w-[90%]">
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
          Our Recent Blogs
        </h1>


        {loading ? (
          <Loader />
        ) : blogs?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9">
            {blogs.map((blog, ind) => (
              <div key={ind} className="shadow-lg rounded-lg flex flex-col ">
                <img
                  className="w-full h-64 rounded-t-lg"
                  // src={pic}
                  src={blog.avatar.url}
                  alt=""
                />
                <div className="p-5 h-full flex flex-col items-start justify-between gap-[15px] box-border">
                  <h1 className="text-[#17324A] text-2xl font-semibold ">
                    {blog.title.length <= 30
                      ? blog.title
                      : `${blog.title.slice(0, 30)} ...`}
                  </h1>
                  {blog.about.length > 200 ? (
                    <div className=" ">
                      <p className="text-gray-500 ">
                        {blog.about.length <= 200
                          ? blog.about
                          : `${blog.about.slice(0, 200)} ...`}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500">{blog.about}</p>
                  )}
                  {blog._id && (
                    <Link
                      to={`/blogsDetails/${blog._id}`}
                      className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800 "
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9">
            <p>No blogs available</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Blogs;



