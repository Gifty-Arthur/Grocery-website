/* eslint-disable react/jsx-no-undef */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//icons

import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

//images
import s1 from "../../assets/Seller/s1.png";

import s3 from "../../assets/Seller/s3.png";
import s4 from "../../assets/Seller/s4.png";
import s5 from "../../assets/Seller/s5.png";
import s6 from "../../assets/Seller/s6.png";
import s7 from "../../assets/Seller/s7.png";
import s8 from "../../assets/Seller/s8.png";
import s9 from "../../assets/Seller/s9.png";
import s10 from "../../assets/Seller/s10.png";
import s11 from "../../assets/Seller/s11.png";
import Button from "../Layout/Button";
import LatestNews from "./LatestNews";
function HotDeals() {
  return (
    <div>
      <div className="mt-10">
        <div className="container">
          <div className="flex flex-row space-x-48 ">
            <h1 className="text-custom1 font-medium font-poppins text-3xl  sm:flex hidden md:flex lg:flex">
              Hot Deals
            </h1>
            <h1 className="text-custom1 font-medium font-poppins text-3xl sm:flex hidden md:flex lg:flex">
              Best Seller
            </h1>
            <h1 className="text-custom1 font-medium font-poppins text-3xl  sm:flex hidden md:flex lg:flex">
              Top Rated
            </h1>
          </div>
          {/* img */}
          <div className="mt-4">
            <div className="md:flex md:flex-row md:gap-6 ">
              <h1 className="text-custom1 font-medium font-poppins text-3xl flex sm:hidden lg:hidden md:hidden mt-8 items-center justify-center">
                Hot Deals
              </h1>
              <div className="flex flex-col md:gap-2 md:ml-0 ml-4 sm:ml-0 lg:ml-0 md:mt-0 gap-8">
                {/* Hot deals */}
                <motion.div
                  className="md:w-[312px] h-[116px] w-full md:mt-0 mt-2 border-2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <div className="flex flex-row gap-10 ">
                    <img className="ml-2" src={s1} alt="" />
                    <div className="flex flex-col mt-8">
                      <p>Green Apple</p>
                      <p className="font-bold">$14.99</p>
                      <div className="flex text-secondary">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline className="text-[#cccccc]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* orange */}
                <motion.div
                  className="md:w-[312px] h-[116px]  w-full  border-2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <div className="flex flex-row gap-10 ">
                    <img className="ml-2" src={s5} alt="" />
                    <div className="flex flex-col mt-8">
                      <p className="font-bold text-primary">Indian Malta</p>
                      <div className="flex flex-row gap-2 mt-1">
                        <div className="rounded-full bg-primary text-white w-[40px] h-[40px] flex items-center justify-center">
                          <HiOutlineShoppingBag size={20} />
                        </div>
                        <div className="rounded-full  text-black w-[40px] h-[40px] border-2  flex items-center justify-center">
                          <FiEye size={20} />
                        </div>
                        <div className="rounded-full  text-black w-[40px] h-[40px] border-2  flex items-center justify-center">
                          <CiHeart size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* lettuce */}
                <motion.div
                  className="md:w-[312px] h-[116px]  w-full  border-2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <div className="flex flex-row gap-10 ">
                    <img className="ml-2" src={s8} alt="" />
                    <div className="flex flex-col mt-8">
                      <p>Green Lettuce</p>
                      <p className="font-bold">$14.99</p>
                      <div className="flex text-secondary">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline className="text-[#cccccc]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* TOp sellers images */}
              <div className="md:flex md:flex-row gap-6">
                <h1 className="text-custom1 font-medium font-poppins text-3xl flex sm:hidden lg:hidden md:hidden mt-8 items-center justify-center">
                  Best Sellers
                </h1>
                <div className="flex flex-col md:gap-2 md:ml-0 ml-4 sm:ml-0 lg:ml-0 md:mt-0 gap-8 ">
                  <motion.div
                    className="md:w-[312px] h-[116px] w-full  md:mt-0 mt-2 border-2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="flex flex-row gap-10 ">
                      <img className="ml-2" src={s3} alt="" />
                      <div className="flex flex-col mt-8">
                        <p>Eggplant</p>
                        <p className="font-bold">$14.99</p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  {/* okro */}
                  <motion.div
                    className="md:w-[312px] h-[116px] w-full  border-2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="flex flex-row gap-10 ">
                      <img className="ml-2" src={s6} alt="" />
                      <div className="flex flex-col mt-8">
                        <p>Red Capsicum</p>
                        <p className="font-bold">$14.99</p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  {/* tomatoes */}
                  <motion.div
                    className="md:w-[312px] h-[116px] w-full  border-2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="flex flex-row gap-10 ">
                      <img className="ml-2" src={s9} alt="" />
                      <div className="flex flex-col mt-8">
                        <p>Tomatoes</p>
                        <p className="font-bold">$14.99</p>
                        <div className="flex text-secondary">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStarOutline className="text-[#cccccc]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* top rated */}
                <div className="md:flex flex-row gap-6">
                  <h1 className="text-custom1 font-medium font-poppins text-3xl flex sm:hidden lg:hidden md:hidden mt-8 items-center justify-center">
                    Top Rated
                  </h1>
                  <div className="flex flex-col md:gap-2 md:ml-0 ml-4 sm:ml-0 lg:ml-0 md:mt-0 gap-8 ">
                    <motion.div
                      className="md:w-[312px] h-[116px] w-full  border-2 md:mt-0 mt-2"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "primary",
                        boxShadow: "0px 0px 8px #00b207",
                      }}
                    >
                      <div className="flex flex-row gap-10 ">
                        <img className="ml-2" src={s4} alt="" />
                        <div className="flex flex-col mt-8">
                          <p className="font-poppins">Big Potatoes</p>
                          <p className="font-bold">$14.99</p>
                          <div className="flex text-secondary">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarOutline className="text-[#cccccc]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {/* corn */}
                    <motion.div
                      className="md:w-[312px] h-[116px] w-full  border-2"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "primary",
                        boxShadow: "0px 0px 8px #00b207",
                      }}
                    >
                      <div className="flex flex-row gap-10 ">
                        <img className="ml-2" src={s7} alt="" />
                        <div className="flex flex-col mt-8">
                          <p>Corn</p>
                          <p className="font-bold">$14.99</p>
                          <div className="flex text-secondary">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarOutline className="text-[#cccccc]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {/* fresh */}
                    <motion.div
                      className="md:w-[312px] h-[116px] w-full border-2"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "primary",
                        boxShadow: "0px 0px 8px #00b207",
                      }}
                    >
                      <div className="flex flex-row gap-10 ">
                        <img className="ml-2" src={s10} alt="" />
                        <div className="flex flex-col mt-8">
                          <p>Corn</p>
                          <p className="font-bold">$14.99</p>
                          <div className="flex text-secondary">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarOutline className="text-[#cccccc]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  {/* image */}
                  <div className="relative w-full">
                    <img src={s11} alt="" className="w-full md:mt-0 mt-8" />
                    <div className=" absolute top-0 left-0 right-0  ">
                      <div className=" flex flex-col items-center justify-center md:mt-8 mt-14 ">
                        <p className="text-custom1 font-bold  text-sm font-poppins">
                          Hot Sale
                        </p>
                        <h1 className="text-4xl font-semibold font-poppins mt-2">
                          Save 37% <span className="font-light">on</span>
                        </h1>
                        <h1 className="text-4xl font poppins ">Every Order</h1>
                        <Link>
                          <Button
                            title="Shop Now"
                            Icon={IoArrowForward}
                            className="bg-white w-[162px] h-[45px] rounded-full text-primary mt-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* News */}
        <section id="LatestNews">
          <LatestNews />
        </section>
      </div>
    </div>
  );
}

export default HotDeals;
