import React from "react";
import Slider from "react-slick";
import { HeroData } from "../constants";
import Button from "../shared/Button";
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-8 ">
          {/* hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center text-center gap-4 sm:pl-3 pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h2>
                    <h2 className="text-5xl uppercase  text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h2>
                    <div>
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <img
                      src={data.img}
                      alt={data.title2}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4) relative z-40"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
