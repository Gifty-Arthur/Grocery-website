/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Images
import banner1 from "../../assets/Seller/banner1.png";
import banner2 from "../../assets/Seller/banner2.png";
import { IoArrowForward } from "react-icons/io5";

//images for best selling product
import fp2 from "../../assets/Product/fp2.png";
import fp3 from "../../assets/Product/fp3.png";
import fp1 from "../../assets/Product/fp1.png";
import fp4 from "../../assets/Product/fp4.png";
import s2 from "../../assets/Seller/s2.png";
import s12 from "../../assets/Seller/s12.png";

//framer
import { motion } from "framer-motion";

//icons

import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import HotDeals from "./HotDeals";

function SubNumbers() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("July 30, 2024 00:00:00").getTime();

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
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 mt-20">
          {/* image 1 */}
          <div className="relative w-full">
            <img src={banner2} alt="" className="w-full" />
            <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 items-start justify-center md:ml-16 ml-4">
              <p className="text-white font-bold md:text-3xl text-lg font-poppins">
                100% ORGANIC
              </p>
              <h1 className="md:text-[36px] font-bold text-white font-poppins">
                Fruit & Vegetables
              </h1>
              <p className="md:text-lg text-white text-sm font-poppins">
                Starting at :{" "}
                <div className="md:w-[72px] md:h-[32px] bg-secondary  text-sm rounded-md text-white font-medium text-center mt-2">
                  $11.99
                </div>
              </p>
              <Link>
                <button className="md:w-[191px] md:h-[51px] h-[29px] w-[90px] md:mt-8 text-sm rounded-full mt-4 bg-primary text-white hover:text-black transition-all flex items-center justify-center">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* image 2 */}
          <div className="relative w-full">
            <img src={banner1} alt="" className="w-full" />
            <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 items-start justify-center md:ml-16 ml-4">
              <p className="text-md text-white">SALE OFF THE WEEK</p>
              <h1 className="text-white font-bold md:text-4xl text-lg font-poppins mt-2">
                Sales of the Year
              </h1>
              <div className="flex flex-row gap-4 text-white md;text-[20px] font-poppins md:mt-2 ">
                {/* days */}
                <section>
                  <p>{timerDays}</p>
                  <p className="text-sms">
                    <small>DAYS</small>
                  </p>
                </section>
                <span>:</span>
                {/* Hours */}
                <section>
                  <p>{timerHours}</p>
                  <p className="text-sms">
                    <small>HOURS</small>
                  </p>
                </section>
                <span>:</span>
                {/* Mins */}
                <section>
                  <p>{timerMinutes}</p>
                  <p className="text-sms">
                    <small>MINS</small>
                  </p>
                </section>
                <span>:</span>
                {/* sec */}
                <section>
                  <p>{timerSeconds}</p>
                  <p className="text-sms">
                    <small>SECS</small>
                  </p>
                </section>
              </div>

              <Link>
                <button className="md:w-[191px] md:h-[51px] h-[29px] w-[90px] md:mt-8 text-sm rounded-full mt-4 bg-primary text-white hover:text-black transition-all flex items-center justify-center">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Best Seller Products */}
        <div className=" mt-20">
          <div className=" flex flex-row items-center justify-between">
            <h1 className="md:text-5xl font-poppins font-semibold text-3xl">
              Best Seller Products
            </h1>
            <Link>
              <div className="flex flex-row gap-2">
                <p className="font-medium text-primary text-md">View All</p>
                <IoArrowForward size={20} className=" text-primary mt-1" />
              </div>
            </Link>
          </div>
          {/* images for Best seller*/}
          <div className="mt-10">
            <div>
              <div className="md:flex md:flex-row md:gap-4">
                {/* apple */}
                <div className="flex flex-row  gap-4">
                  <motion.div
                    className="md:w-[248px] md:h-[339px] border-2 shadow-md rounded-lg w-1/2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <CiHeart size={17} />
                    <img className="-mt-4" src={fp2} alt="" />

                    <div className="flex items-center justify-between ">
                      <div className="flex flex-col ml-4 ">
                        <p className="text-[#4d4d4d]">Green Apple</p>
                        <p className="text-md font-medium">$14.99 </p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                      <div className="rounded-full bg-primary text-white w-[40px] h-[40px] mr-6 flex items-center justify-center">
                        <HiOutlineShoppingBag size={20} />
                      </div>
                    </div>
                  </motion.div>
                  {/* cabage */}
                  <motion.div
                    className="md:w-[248px] md:h-[339px] border-2 shadow-md rounded-lg w-1/2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <img src={fp1} alt="" />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-col ml-4 ">
                        <p className="text-[#4d4d4d] hover:text-primary ">
                          Chanise Cabbage
                        </p>
                        <p className="text-md font-medium">$14.99 </p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                      <div className="rounded-full bg-custom4 w-[40px] h-[40px] mr-6 flex items-center justify-center">
                        <HiOutlineShoppingBag size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Green Paper*/}
                <div className="flex flex-row gap-4 ">
                  <motion.div
                    className="md:w-[248px] md:h-[339px]border-2 shadow-md rounded-lg w-1/2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <img src={s12} alt="" />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-col ml-4 ">
                        <p className="text-[#4d4d4d] hover:text-primary ">
                          Green Capsicum
                        </p>
                        <p className="text-md font-medium">$14.99 </p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                      <div className="rounded-full bg-custom4 w-[40px] h-[40px] mr-6 flex items-center justify-center">
                        <HiOutlineShoppingBag size={20} />
                      </div>
                    </div>
                  </motion.div>
                  {/* okro */}
                  <motion.div
                    className="md:w-[248px] md:h-[339px] border-2 shadow-md rounded-lg w-1/2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <img src={fp4} alt="" />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-col ml-4 ">
                        <p className="text-[#4d4d4d] hover:text-primary ">
                          Ladies Finger
                        </p>
                        <p className="text-md font-medium">$14.99 </p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                      <div className="rounded-full bg-primary text-white w-[40px] h-[40px] mr-6 flex items-center justify-center">
                        <HiOutlineShoppingBag size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* corn */}
                <motion.div
                  className="md:w-[248px] md:h-[339px] border-2 shadow-md rounded-lg w-1/2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <img src={fp4} alt="" />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col ml-4 ">
                      <p className="text-[#4d4d4d] hover:text-primary ">
                        Ladies Finger
                      </p>
                      <p className="text-md font-medium">$14.99 </p>
                      <div className="flex text-secondary">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline className="text-[#cccccc]" />
                      </div>
                    </div>
                    <div className="rounded-full bg-primary text-white w-[40px] h-[40px] mr-6 flex items-center justify-center">
                      <HiOutlineShoppingBag size={20} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hot deals */}
          <HotDeals />
        </div>
      </div>
    </div>
  );
}

export default SubNumbers;
