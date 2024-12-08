import React from "react";
import Heading from "../shared/Heading";
import { BlogData } from "../constants";

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-6 sm:gap-4 md:gap-7">
          {/* Blog Cards */}
          {BlogData.map((data, index) => (
            <div key={index} className="blog-card">
              {/* Image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt={data.title || "Blog Image"}
                  className="object-cover w-full h-[220px] hover:scale-105 duration-500"
                />
              </div>
              {/* Content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 ">{data.published}</p>
                <h3 className="font-bold line-clamp-1">{data.title}</h3>
                <p
                  className="line-clamp-2 text-sm text-gray-600
                dark:text-gray-400"
                >
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
