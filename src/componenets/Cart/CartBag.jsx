import bg2 from "../../assets/Hero/bg2.png";
import cb1 from "../../assets/Cartbag/cb1.png";

import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";

//icons
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
function CartBag() {
  return (
    <div>
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
                <div className="flex flex-row gap-2 hover:text-primary ">
                  <p className="text-md mt-1 ">Shopping Cart</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mt-10">
          <div>
            <h1 className="text-custom1 text-[32px] font-poppins font-semibold">
              My Shopping Cart
            </h1>
          </div>
          <div className="w-[872px] h-[371px] rounded-md shadow-md  border">
            <div className="flex flex-col">
              <div className="flex flex-row space-x-72">
                <p>Product</p>
                <p>Product</p>
              </div>
              <div className="w-[872px] h-[1px] bg-gray-300 mt-6"></div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <img src={cb1} alt="" className="w-[100px] mt-2" />
                  <p className="mt-12"> Green Capsicum</p>
                </div>
                {/* 2nd image */}
                <div className="flex flex-col">
                  <div className="w-[872px] h-[1px] bg-gray-300 mt-6"></div>
                  <div className="flex flex-row">
                    <img src={cb1} alt="" className="w-[100px] mt-2" />
                    <p className="mt-12"> Green Capsicum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBag;
