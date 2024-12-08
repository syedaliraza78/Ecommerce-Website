import React from "react";
import Heading from "../shared/Heading";
import { ProductData } from "../constants";
import ProductCard from "./ProductCard";
const Product = () => {
  return (
    <div className="container">
      {/* heading function is in the order page and we can passing the props to the components in the heading page */}
      {/* heading section */}
      <Heading title="Our Products" subtitle={"Explore Our New Product"} />
      {/* body section */}
      <ProductCard data={ProductData} />
    </div>
  );
};

export default Product;
