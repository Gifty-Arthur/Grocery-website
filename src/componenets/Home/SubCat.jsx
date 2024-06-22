import { Link } from "react-router-dom";
import Button from "../Layout/Button";

// Images

import sbcat1 from "../../assets/categories/sbcat1.png";
import sbcat2 from "../../assets/categories/sbcat2.png";

//icons
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Numbers from "./Numbers";

function SubCategories() {
  return (
    <div className="bg-[#f4f6f4] w-full">
      <div className="container mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <img src={sbcat2} alt="" className="w-full md:w-auto" />
            <img src={sbcat1} alt="" className="w-full md:w-auto" />
          </div>

          <div className="mt-8 md:mt-0 md:ml-20">
            <h1 className="font-bold text-custom1 text-3xl md:text-5xl mt-4 font-poppins">
              100% Trusted
            </h1>
            <h1 className="font-bold text-custom1 text-3xl md:text-5xl mt-4 font-poppins">
              Organic Food Store
            </h1>
            <div className="mt-6 flex flex-col md:flex-row gap-2">
              <IoIosCheckmarkCircle size={25} className="text-primary" />
              <h1 className="text-custom1 font-bold md:text-[18px] text-sm">
                Healthy & natural food for lovers of healthy food.
              </h1>
            </div>
            <p className="te">
              Ut quis tempus erat. Phasellus euismod bibendum magna non
            </p>

            {/* second */}
            <div className="mt-6 flex flex-col md:flex-row gap-2">
              <IoIosCheckmarkCircle size={25} className="text-primary" />
              <h1 className="text-custom1 font-bold md:text-[18px] text-sm">
                Every day fresh and quality products for you.
              </h1>
            </div>
            <p className="te">
              Ut quis tempus erat. Phasellus euismod bibendum magna non
            </p>

            {/* Button */}
            <Link>
              <Button title="Shop Now" Icon={IoArrowForward} />
            </Link>
          </div>
        </div>
      </div>
      {/* dark */}
      <Numbers />
    </div>
  );
}

export default SubCategories;
