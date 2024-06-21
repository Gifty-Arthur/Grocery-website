import p1 from "../../assets/Product/p1.png";
import p2 from "../../assets/Product/p2.png";
import p3 from "../../assets/Product/p3.png";

//icons
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";

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
          <div className=" flex  items-center justify-between">
            <h1 className="md:text-5xl font-poppins font-semibold ">
              Featured Products
            </h1>
            <div className="flex flex-row gap-2">
              <p className="font-medium text-primary text-md">View All</p>
              <IoArrowForward size={20} className=" text-primary" />
            </div>
          </div>
        </div>
      </div>
      <img src={p3} alt="" />
    </div>
  );
};

export default Product;
