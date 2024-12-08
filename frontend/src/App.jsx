import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Category from "./component/Category/Category";
import Category2 from "./component/Category/Category2";
import Services from "./component/Services/Services";
import { BannerData, BannerData2 } from "./component/constants";
import Banner from "./component/Banner/Banner";
import Product from "./component/Products/Product";
import Blog from "./component/Blogs/Blog";
import Partners from "./component/Partners/Partners";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <>
      <div
        className="bg-white dark:bg-gray-900 dark:text-white
      duration-1000 overflow-hidden"
      >
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData} />
        <Product />
        <Banner data={BannerData2} />
        <Blog />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default App;
