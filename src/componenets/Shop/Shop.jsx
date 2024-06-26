/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";
import React, { useRef, useState, useEffect } from "react";

//images
import bg2 from "../../assets/Hero/bg2.png";
import bgsh from "../../assets/Shop/bgsh.png";

//icons
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ShopCat from "./ShopCat";

function Shop() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 30, 2024 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <div
        className="w-full h-[120px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="container text-custom3 cursor-pointer ">
          <div className="flex flex-row gap-2 pt-12 ">
            <Link to={urls.home}>
              <div className="flex flex-row gap-2 hover:text-primary">
                <GoHome size={25} className="" />
                <IoIosArrowForward className="mt-1" />
              </div>
            </Link>
            <Link to={urls.about}>
              <div className="flex flex-row gap-2 hover:text-primary">
                <p className="text-md">Sales</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* sales */}
      <section id="Shop">
        <div>
          <div className="container mt-10">
            {/* image 2 */}
            <div className="relative w-full">
              <img src={bgsh} alt="" className="" />
              <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 items-start justify-center md:ml-16 ml-4">
                <p className="text-md text-white font-poppins sm:flex hidden">
                  Best Deals
                </p>
                <div className="flex flex-row gap-20">
                  <h1 className="text-white font-bold md:text-4xl text-lg font-poppins sm:mt-10 mt-4">
                    Sale of the Month
                  </h1>
                  <div className="bg-secondary sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] rounded-full flex items-center justify-center animate-blink sm:mt-0 mt-4">
                    <h1 className="font-poppins font-semibold text-white text-sm sm:text-[24px]">
                      50% <br />
                      OFF
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row gap-4 text-white md;text-[20px] font-poppins md:mt-2 ">
                  {/* days */}
                  <section>
                    <p className="text-primary sm:text-[24px]">{timerDays}</p>
                    <p className="text-sms">
                      <small>DAYS</small>
                    </p>
                  </section>
                  <span className="text-[24px]">:</span>
                  {/* Hours */}
                  <section>
                    <p className="text-primary sm:text-[24px]">{timerHours}</p>
                    <p className="text-sms">
                      <small>HOURS</small>
                    </p>
                  </section>
                  <span className="sm:text-[24px]">:</span>
                  {/* Mins */}
                  <section>
                    <p className="text-primary sm:text-[24px]">
                      {timerMinutes}
                    </p>
                    <p className="">
                      <small>MINS</small>
                    </p>
                  </section>
                  <span className="sm:text-[24px]">:</span>
                  {/* sec */}
                  <section>
                    <p className="text-primary sm:text-[24px]">
                      {timerSeconds}
                    </p>
                    <p className="text-sms">
                      <small>SECS</small>
                    </p>
                  </section>
                </div>
                <Link to={urls.shop}>
                  <button className="md:w-[191px] md:h-[51px] h-[29px] w-[90px]  text-sm rounded-full  bg-primary text-white hover:text-black transition-all  items-center justify-center sm:flex hidden">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* select */}
            <div className="mt-10">
              <div className="flex flex-col gap-4">
                <div className="sm:flex items-center  sm:justify-between">
                  <div className="flex flex-row gap-4">
                    <div className="w-[178px] h-[41px] border-2 flex items-center justify-center">
                      <div className="flex flex-row  gap-4">
                        <p className="font-poppins text-[#4D4D4D]">
                          Select Category
                        </p>
                        <FaAngleDown className="mt-1" />
                      </div>
                    </div>
                    {/* select2 */}
                    <div className="w-[178px] h-[41px] border-2 flex items-center justify-center">
                      <div className="flex flex-row  gap-4">
                        <p className="font-poppins text-[#4D4D4D]">
                          Select Price
                        </p>
                        <FaAngleDown className="mt-1" />
                      </div>
                    </div>
                    {/* select3 */}
                    <div className="w-[178px] h-[41px] border-2 flex items-center justify-center sm:flex hidden">
                      <div className="flex flex-row  gap-4">
                        <p className="font-poppins text-[#4D4D4D]">
                          Select Rating
                        </p>
                        <FaAngleDown className="mt-1" />
                      </div>
                    </div>
                  </div>
                  {/* other */}
                  <div className="flex flex-row gap-4 sm:mt-0 mt-4">
                    <div className="w-[178px] h-[41px] border-2 flex items-center justify-center">
                      <div className="flex flex-row  gap-4">
                        <p className="font-poppins text-[#4D4D4D]">
                          Sort by:Latest
                        </p>
                        <FaAngleDown className="mt-1" />
                      </div>
                    </div>
                    {/* other 2 */}
                    <div className="w-[178px] h-[41px] border-2 flex items-center justify-center">
                      <div className="flex flex-row  gap-4">
                        <p className="font-poppins text-[#4D4D4D]">Show: 16</p>
                        <FaAngleDown className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* underline */}
      <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="mt-4 flex flex-row gap-4">
            <p className="text-custom3 font-poppins">Active Filters:</p>
            <div className="flex flex-row  gap-2">
              <p className="text-custom1 font-poppins font-bold text-md">
                Wing Chair
              </p>
              <IoClose className="text-[#9A9CAA] mt-1" />
            </div>
            <div className="flex flex-row  gap-2">
              <p className="text-custom1 font-poppins font-bold text-md">
                Min $300-Max 500
              </p>
              <IoClose className="text-[#9A9CAA] mt-1" />
            </div>
          </div>
          <p className="text-custom1 font-medium font-poppins sm:flex hidden">
            2,547{" "}
            <span className="text-custom3 font-poppins">Result found.</span>
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-800 mt-8"></div>

      <ShopCat />
    </div>
  );
}

export default Shop;
