import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; //access to html
  console.log(element);
  //set theme to localstorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <>
      <div className="relative">
        <img
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          src={LightButton}
          alt="Light Mode Open"
          className={`w-12 absolute right-0 z-10
        cursor-pointer
        ${theme === "dark" ? "opacity-0" : "opacity-100"}
         transition-all duration-300`}
        />
        <img
          src={DarkButton}
          alt="Dark Mode Open"
          className={`w-12
        cursor-pointer
      `}
        />
      </div>
    </>
  );
};

export default DarkMode;
