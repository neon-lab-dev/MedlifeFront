import React, { useEffect } from "react";
import BlogsHero from "./BlogsHero";
import Navbar from "../Navbar";
// import OurBlogs from "./OurBlogs";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";
import Blogs from "../Blogs";
import ReactGA from 'react-ga';

const BlogsPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Blogs</title>
      </Helmet>
      <Navbar></Navbar>
      <BlogsHero></BlogsHero>
      {/* <OurBlogs></OurBlogs> */}
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogsPage;
