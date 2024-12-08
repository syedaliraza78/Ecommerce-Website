import React from "react";
import Button from "../shared/Button";
import { FooterLinks } from "../constants";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* comapny details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-wide
            text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p
              className="text-gray-600 lg:pr-24 pt-3
            dark:text-white/70"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio culpa earum consectetur recusandae sequi!
            </p>
            <p className="text-gray-500 mt-4 mb-5">Made By Ali Raza</p>
            <Button
              text={"Download CV"}
              bgColor={"bg-primary"}
              textColor={"text-brandBlue"}
            />
          </div>
          {/* Quick Footer Links */}

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pt-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 
                      dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second section */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 
                      dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company details */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex gap-3 items-center">
                  <FaLocationArrow />
                  <p>Lahore , Pakistan</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+92 3333372014</p>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a>
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a>
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a>
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
