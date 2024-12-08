import React from "react";
import { Menulinks } from "../constants";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { DropDownLinks } from "../constants";
const Navbar = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* logo and link section */}
              <a
                href="#"
                className="text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl"
              >
                Eshop
              </a>
              {/* Menu items */}
              {/* <div className="hidden lg:block"> */}
              <div>
                <ul className="flex items-center gap-4">
                  {Menulinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block px-4 font-semibold text-gray-500 hover:text-black
                        dark:hover:text-white
                        duration-200
                        "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                  {/* dropdown */}
                  <li className="relative cursor-pointer group">
                    <a
                      href="#"
                      className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 "
                    >
                      Quick Links
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                      </span>
                    </a>
                    {/* dropdown */}
                    <div className="absolute z-[9999] hidden group-hover:block rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white w-[175px]">
                      <ul className="space-y-2">
                        {DropDownLinks.map((data, index) => (
                          <li key={index}>
                            <a
                              href={data.link}
                              className="text-gray-500 hover:text-black dark:hover:text-white
                              duration-200
                              inline-block w-full
                              p-2 hover:bg-primary/20
                              rounded-xl font-semibold
                              "
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Navbar Right */}

            <div className="flex justify-between items-center gap-4">
              {/* search bar section */}
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="
                search-bar"
                />
                <IoMdSearch
                  className="text-xl text-gray-600 dark:text-gray-400 
                group-hover:text-primary
                absolute top-1/2 -translate-y-1/2  
                right-3 duration-200 "
                />
              </div>
              {/* Order Mode Section */}
              <button className="relative p-3">
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  4
                </div>
              </button>
              {/* Dark Mode Section */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
