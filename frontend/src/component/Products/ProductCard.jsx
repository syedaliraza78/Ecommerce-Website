import React from "react";
import Button from "../shared/Button";

const ProductCard = ({ data }) => {
  return (
    <>
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {/* Card sections */}
          {data.map((item, index) => (
            <div key={item.id} className="group">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name || "Product Image"}
                  className="h-[180px] w-[260px] object-cover rounded-md"
                />
                {/* hover button */}
                <div
                  className="group-hover:backdrop-blur-sm hidden group-hover:flex absolute top-1/2 -translate-y-1/2
                left-1/2 -translate-x-1/2 h-full w-full text-center
                justify-center items-center duration-200
                rounded-md"
                >
                  <Button
                    text={"Add to cart"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
              <div className="leading-7">
                {/* Add additional details or styling for the product here */}
                <h2 className="font-semibold">{item.title}</h2>
                <h2 className="font-bold">${item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
