import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "../Layout/Button";

// images
import hero2 from "../../assets/Hero/hero2.png";
import hero3 from "../../assets/Hero/hero3.png";
import hero1 from "../../assets/Hero/hero1.png";
import bg from "../../assets/Hero/bg.png";

//icons
import { IoArrowForward } from "react-icons/io5";

//home import
import Product from "./Product";

function Home() {
  // Static text content from hero1
  const staticText = {
    title: "WELCOME TO SHOPERRY",
    description: "Fresh & Healthy ",
    sub: "Free shipping on all your order. We deliver, you enjoy",
    sales: "SALE UP TO",
  };

  return (
    <div>
      <div className="relative h-[720px]">
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src={bg}
          alt=""
        />
        <div className="container md:pt-[10rem] mt-10 h-full relative z-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* img1 */}
            <SwiperSlide>
              <div className="flex items-center justify-between h-full">
                <img
                  className="w-full h-full object-cover md:mt-0 mt-10 md:w-1/2"
                  src={hero3}
                  alt="Hero 2"
                />
                <div className="hidden md:flex rounded-full bg-secondary h-[120px] w-[150px] flex-col items-center justify-center -mt-6">
                  <h1 className="text-white text-[32px] font-semibold font-poppins text-center mt-2">
                    70%
                  </h1>
                  <p className="font-medium text-[20px] text-white mt-1">OFF</p>
                </div>
                <div className="hidden md:block w-1/2 p-10 text-left">
                  <p className="text-sm text-primary font-regular font-sege">
                    {staticText.title}
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold font-poppins text-custom1">
                    {staticText.description}
                    <br />
                    Organic Food
                  </h1>
                  <p className="text-sm text-custom3 mt-2">{staticText.sub}</p>
                  <Link>
                    <Button title="Shop now" Icon={IoArrowForward} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            {/* mobile */}
            <div className="block md:hidden mt-2 text-center">
              <p className="text-lg text-primary font-regular font-poppins">
                WELCOME TO SHOPERY
              </p>
              <h1 className="text-custom1 font-bold text-4xl">
                Fresh & Healthy Organic Food
              </h1>
              <h2 className="text-2xl font-poppins text-custom1 mt-2">
                Sales up to{" "}
                <span className="text-secondary font-bold">30% OFF</span>
              </h2>
              <Link>
                <button className="w-[191px] h-[51px] mt-4 rounded-full bg-primary border border-1 text-white hover:bg-tertiary">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* img2 */}
            <SwiperSlide>
              <div className="flex items-center justify-between h-full">
                <img
                  className="w-full h-full object-cover md:mt-0 mt-10 md:w-1/2"
                  src={hero1}
                  alt="Hero 2"
                />
                <div className="hidden md:block w-1/2 p-10 text-left">
                  <p className="text-sm text-custom2 font-regular font-sege">
                    {staticText.title}
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold font-poppins text-custom1">
                    {staticText.description}
                    <br />
                    Organic Food
                  </h1>
                  <h2 className="font-medium text-3xl mt-2">
                    {staticText.sales}{" "}
                    <span className="text-secondary text-3xl font-semibold">
                      30% OFF
                    </span>
                  </h2>
                  <Link>
                    <Button title="Shop now" Icon={IoArrowForward} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            {/* img3 */}
            <SwiperSlide>
              <div className="flex items-center justify-between h-full">
                <img
                  className="w-full h-full object-cover md:mt-0 mt-10 md:w-1/2"
                  src={hero2}
                  alt="Hero 2"
                />
                <div className="hidden md:flex rounded-full bg-secondary h-[120px] w-[150px] flex-col items-center justify-center -mt-6">
                  <h1 className="text-white text-[32px] font-semibold font-poppins text-center mt-2">
                    70%
                  </h1>
                  <p className="font-medium text-[20px] text-white mt-1">OFF</p>
                </div>
                <div className="hidden md:block w-1/2 p-10 text-left">
                  <p className="text-sm text-custom2 font-regular font-sege">
                    {staticText.title}
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold font-poppins text-custom1">
                    {staticText.description}
                    <br />
                    Organic Food
                  </h1>
                  <p className="text-sm text-custom3 mt-2">{staticText.sub}</p>
                  <Link>
                    <Button title="Shop now" Icon={IoArrowForward} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
