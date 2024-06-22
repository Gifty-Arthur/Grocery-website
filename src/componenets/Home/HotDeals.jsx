import { motion } from "framer-motion";

//icons

import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

//images
import s1 from "../../assets/Seller/s1.png";

function HotDeals() {
  return (
    <div className="mt-10">
      <div>
        <div className="flex flex-row space-x-60">
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
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
