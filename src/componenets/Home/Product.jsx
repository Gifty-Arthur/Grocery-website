import { Link } from "react-router-dom";
//images
import p1 from "../../assets/Product/p1.png";
import p2 from "../../assets/Product/p2.png";
import p3 from "../../assets/Product/p3.png";

//images for featured products
import fp2 from "../../assets/Product/fp2.png";
import fp3 from "../../assets/Product/fp3.png";
import fp1 from "../../assets/Product/fp1.png";
import fp4 from "../../assets/Product/fp4.png";

//framer
import { motion } from "framer-motion";

//icons
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Product = () => {
  return (
    <div className=" ">
      <div className="container">
        <div className="md:flex md:flex-row-4 md:space-x-4 md:mt-0">
          {/* first */}
          <div className="flex flex-row ">
            <div
              className="group w-[312px] h-[224px] flex flex-col items-center  justify-center  
                 hover:-translate-y-5 hover:border-b-8 hover:border-primary transitin-all duration-300 cursor-pointer"
            >
              <div className="relative w-[72px] h-[72px] mt-10">
                <img className="w-full h-full " src={p1} alt="Product" />
                <CiDeliveryTruck
                  size={27}
                  className="absolute bottom-6 right-5 text-primary"
                />
              </div>
              <h1 className="text-[18px] mt-1 font-semibold font-poppins text-center">
                Free Shipping
              </h1>
              <p className="text-sm">Free shipping with discount</p>
            </div>
            {/* second */}
            <div className="group w-[312px] h-[224px] flex flex-col items-center justify-center  hover:-translate-y-5 hover:border-b-8 hover:border-primary transitin-all duration-300 cursor-pointer">
              <div className="relative w-[72px] h-[72px] mt-10">
                <img className="w-full h-full " src={p1} alt="" />
                <TfiHeadphoneAlt
                  size={27}
                  className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <h1 className="text-[18px] mt-1 font-semibold font-poppins text-center">
                Great Support 24/7
              </h1>
              <p className="text-sm">Instant access to Contact</p>
            </div>
          </div>

          {/* third */}
          <div className="flex flex-row">
            <div className="group w-[312px] h-[224px] flex flex-col items-center justify-center  hover:-translate-y-5 hover:border-b-8 hover:border-primary transitin-all duration-300 cursor-pointer">
              <div className="relative w-[72px] h-[72px] mt-10">
                <img
                  className="w-full h-full transition-opacity duration-300 group-hover:opacity-75"
                  src={p2}
                  alt="Product"
                />
                <RiSecurePaymentFill
                  size={27}
                  className="absolute bottom-6 right-5 text-white transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <h1 className="text-[18px] mt-1 font-semibold font-poppins text-center">
                100% Secured Payment
              </h1>
              <p className="text-sm">We ensure your money is safe</p>
            </div>
            {/* fourth */}
            <div className="group w-[312px] h-[224px] flex flex-col items-center justify-center  hover:-translate-y-5 hover:border-b-8 hover:border-primary transitin-all duration-300 cursor-pointer">
              <div className="relative w-[72px] h-[72px] mt-10">
                <img
                  className="w-full h-full transition-opacity duration-300 group-hover:opacity-75"
                  src={p1}
                  alt="Product"
                />
                <BsBox
                  size={27}
                  className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                />
              </div>
              <h1 className="text-[18px] mt-1 font-semibold font-poppins text-center">
                Money-Back Guarantee
              </h1>
              <p className="text-sm">30 days money-back</p>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="mt-20">
          <div className=" flex flex-row items-center justify-between">
            <h1 className="md:text-5xl font-poppins font-semibold text-3xl">
              Featured Products
            </h1>
            <Link>
              <div className="flex flex-row gap-2">
                <p className="font-medium text-primary text-md">View All</p>
                <IoArrowForward size={20} className=" text-primary mt-1" />
              </div>
            </Link>
          </div>

          {/* images for featured product*/}
          <div className="mt-10">
            <div>
              <div className="md:flex md:flex-row md:gap-8">
                {/* apple */}
                <div className="flex flex-row  gap-4">
                  <motion.div
                    className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <div className="w-[80px] h-[27px] bg-danger mt-2 ml-4 rounded-md">
                      <p className="text-white text-center  font-medium">
                        Sale 50%
                      </p>
                    </div>
                    <img src={fp2} alt="" />
                    <div className="flex items-center justify-between -mt-4">
                      <div className="flex flex-col ml-4 ">
                        <p className="text-[#4d4d4d]">Green Apple</p>
                        <p className="text-md font-medium">
                          $14.99{" "}
                          <span className="line-through text-[#999999]">
                            $20.99
                          </span>
                        </p>
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
                  {/* cabage */}
                  <motion.div
                    className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2"
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
                <div className="flex flex-row gap-4 mt-4">
                  <motion.div
                    className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "primary",
                      boxShadow: "0px 0px 8px #00b207",
                    }}
                  >
                    <img src={fp3} alt="" />
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
                    className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2"
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
                      <div className="rounded-full bg-custom4 w-[40px] h-[40px] mr-6 flex items-center justify-center">
                        <HiOutlineShoppingBag size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={p3} alt="" />
    </div>
  );
};

export default Product;
