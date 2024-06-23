import { motion } from "framer-motion";

//icons

import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

//images
import s1 from "../../assets/Seller/s1.png";
import s2 from "../../assets/Seller/s2.png";
import s3 from "../../assets/Seller/s3.png";
import s4 from "../../assets/Seller/s4.png";
import s5 from "../../assets/Seller/s5.png";
import s6 from "../../assets/Seller/s6.png";
import s7 from "../../assets/Seller/s7.png";
import s8 from "../../assets/Seller/s8.png";
import s9 from "../../assets/Seller/s9.png";
import s10 from "../../assets/Seller/s10.png";
import s11 from "../../assets/Seller/s11.png";
function HotDeals() {
  return (
    <div className="mt-10">
      <div>
        <div className="flex flex-row space-x-48">
          <h1 className="text-custom1 font-medium font-poppins text-3xl">
            Hot Deals
          </h1>
          <h1 className="text-custom1 font-medium font-poppins text-3xl">
            Best Seller
          </h1>
          <h1 className="text-custom1 font-medium font-poppins text-3xl">
            Top Rated
          </h1>
        </div>
        {/* img */}

        <div className="mt-4">
          <div className="flex flex-row gap-6 ">
            <div className="flex flex-col gap-2">
              {/* Hot deals */}
              <motion.div
                className="w-[312px] h-[116px] border-2"
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
                    <p>$14.99</p>
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
                className="w-[312px] h-[116px] border-2"
                whileHover={{
                  scale: 1.1,
                  textShadow: "primary",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex flex-row gap-10 ">
                  <img className="ml-2" src={s5} alt="" />
                  <div className="flex flex-col mt-8">
                    <p>Green Apple</p>
                    <p>$14.99</p>
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
              {/* lettuce */}
              <motion.div
                className="w-[312px] h-[116px] border-2"
                whileHover={{
                  scale: 1.1,
                  textShadow: "primary",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex flex-row gap-10 ">
                  <img className="ml-2" src={s8} alt="" />
                  <div className="flex flex-col mt-8">
                    <p>Green Apple</p>
                    <p>$14.99</p>
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

            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2 ">
                <motion.div
                  className="w-[312px] h-[116px] border-2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <div className="flex flex-row gap-10 ">
                    <img className="ml-2" src={s3} alt="" />
                    <div className="flex flex-col mt-8">
                      <p>Green Apple</p>
                      <p>$14.99</p>
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
                  className="w-[312px] h-[116px] border-2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <div className="flex flex-row gap-10 ">
                    <img className="ml-2" src={s6} alt="" />
                    <div className="flex flex-col mt-8">
                      <p>Green Apple</p>
                      <p>$14.99</p>
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
                  className="w-[312px] h-[116px] border-2"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "primary",
                    boxShadow: "0px 0px 8px #00b207",
                  }}
                >
                  <div className="flex flex-row gap-10 ">
                    <img className="ml-2" src={s9} alt="" />
                    <div className="flex flex-col mt-8">
                      <p>Green Apple</p>
                      <p>$14.99</p>
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
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-2">
                  <motion.div
                    className="w-[312px] h-[116px] border-2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="flex flex-row gap-10 ">
                      <img className="ml-2" src={s4} alt="" />
                      <div className="flex flex-col mt-8">
                        <p>Green Apple</p>
                        <p>$14.99</p>
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
                    className="w-[312px] h-[116px] border-2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="flex flex-row gap-10 ">
                      <img className="ml-2" src={s7} alt="" />
                      <div className="flex flex-col mt-8">
                        <p>Green Apple</p>
                        <p>$14.99</p>
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
                    className="w-[312px] h-[116px] border-2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="flex flex-row gap-10 ">
                      <img className="ml-2" src={s10} alt="" />
                      <div className="flex flex-col mt-8">
                        <p>Green Apple</p>
                        <p>$14.99</p>
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

                <img src={s11} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
