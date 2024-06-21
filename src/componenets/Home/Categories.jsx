import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//images
import cat1 from "../../assets/categories/cat1.png";
import cat2 from "../../assets/categories/cat2.png";
import cat3 from "../../assets/categories/cat3.png";
import cat4 from "../../assets/categories/cat4.png";
import cat5 from "../../assets/categories/cat5.png";
import cat6 from "../../assets/categories/cat6.png";

//import

//icons
import { IoArrowForward } from "react-icons/io5";
import SubCat from "./SubCat";

const swingVariants = {
  swing: {
    rotate: [-5, 5, -5], // Reduce the swing amplitude by using smaller rotation values
    transition: {
      repeat: Infinity, // Loop the animation infinitely
      duration: 2, // Duration for one complete swing (left to right and back to left)
      ease: "easeInOut", // Ensures smooth swinging motion
    },
  },
};

function Categories() {
  return (
    <div className="bg-[#f4f6f4] w-full">
      <div className="container mt-20">
        <div className=" flex flex-row items-center justify-between ">
          <h1 className="md:text-5xl font-poppins font-semibold text-3xl mt-20 ">
            Shop by Top Categories
          </h1>
          <Link>
            <div className="flex flex-row gap-2 mt-20">
              <p className="font-medium text-primary text-md">View All</p>
              <IoArrowForward size={20} className=" text-primary mt-1" />
            </div>
          </Link>
        </div>

        {/* images */}
        <div className="mt-10">
          <div className="md:flex md:flex-row md:gap-6">
            {/* 1st */}
            <div className="flex flex-row gap-4 md:mt-4">
              <motion.div
                className="bg-white w-[200px] h-[210px] rounded-md "
                whileHover={{
                  scale: 1.1,
                  textShadow: "#00b207",
                  boxShadow: "0px 0px 5px #00b207",
                }}
              >
                <div className="flex items-center justify-center ">
                  <motion.img
                    className="mt-12"
                    src={cat1}
                    alt=""
                    variants={swingVariants}
                    animate="swing"
                  />
                </div>
                <p className="text-center text-primary mt-6 font-medium text-[16px]">
                  Vegetables
                </p>
                <p className="text-sm text-center mt-1">165 Product</p>
              </motion.div>
              {/* 2nd */}
              <motion.div
                className="bg-white w-[200px] h-[210px] rounded-md"
                whileHover={{
                  scale: 1.1,
                  textShadow: "#00b207",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex items-center justify-center ">
                  <motion.img
                    className="mt-12"
                    src={cat2}
                    alt=""
                    variants={swingVariants}
                    animate="swing"
                  />
                </div>
                <p className="text-center text-black mt-6 font-medium text-[16px]">
                  Fresh Fruit
                </p>
                <p className="text-sm text-center mt-1">137 Product</p>
              </motion.div>
            </div>

            <div className="flex flex-row gap-4 mt-4">
              {/* 3rd */}
              <motion.div
                className="bg-white w-[200px] h-[210px] rounded-md"
                whileHover={{
                  scale: 1.1,
                  textShadow: "#00b207",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex items-center justify-center ">
                  <motion.img
                    className="mt-12"
                    src={cat3}
                    alt=""
                    variants={swingVariants}
                    animate="swing"
                  />
                </div>
                <p className="text-center text-black mt-6 font-medium text-[16px]">
                  Fish
                </p>
                <p className="text-sm text-center mt-1">34 Product</p>
              </motion.div>
              {/* 4th */}
              <motion.div
                className="bg-white w-[200px] h-[210px] rounded-md"
                whileHover={{
                  scale: 1.1,
                  textShadow: "#00b207",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex items-center justify-center ">
                  <motion.img
                    className="mt-12"
                    src={cat4}
                    alt=""
                    variants={swingVariants}
                    animate="swing"
                  />
                </div>
                <p className="text-center text-black mt-6 font-medium text-[16px]">
                  Meat
                </p>
                <p className="text-sm text-center mt-1">165 Product</p>
              </motion.div>
            </div>
            {/* 5th */}
            <div className="flex flex-row gap-4 mt-4">
              <motion.div
                className="bg-white w-[200px] h-[210px] rounded-md"
                whileHover={{
                  scale: 1.1,
                  textShadow: "primary",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex items-center justify-center ">
                  <motion.img
                    className="mt-12"
                    src={cat5}
                    alt=""
                    variants={swingVariants}
                    animate="swing"
                  />
                </div>
                <p className="text-center text-black mt-6 font-medium text-[16px]">
                  Water and Drinks
                </p>
                <p className="text-sm text-center mt-1">48 Product</p>
              </motion.div>
              {/* 6th */}
              <motion.div
                className="bg-white w-[200px] h-[210px] rounded-md"
                whileHover={{
                  scale: 1.1,
                  textShadow: "primary",
                  boxShadow: "0px 0px 8px #00b207",
                }}
              >
                <div className="flex items-center justify-center ">
                  <motion.img
                    className="mt-12"
                    src={cat6}
                    alt=""
                    variants={swingVariants}
                    animate="swing"
                  />
                </div>
                <p className="text-center text-black mt-6 font-medium text-[16px]">
                  Snacks
                </p>
                <p className="text-sm text-center mt-1">165 Product</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <SubCat />
    </div>
  );
}

export default Categories;
