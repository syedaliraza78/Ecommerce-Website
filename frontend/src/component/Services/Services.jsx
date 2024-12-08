import React from "react";
import { ServicesData } from "../constants";
const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ServicesData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
