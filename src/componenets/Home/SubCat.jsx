import { Link } from "react-router-dom";
import Button from "../Layout/Button";

// Images
import bgcat from "../../assets/categories/bgcat.png";
import sbcat1 from "../../assets/categories/sbcat1.png";
import sbcat2 from "../../assets/categories/sbcat2.png";

//icons
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Numbers from "./Numbers";

function SubCategories() {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={bgcat} alt="" className="w-full  md:h-auto " />
          <div className=" absolute top-0 left-0 w-full text-center text-white p-20 mt-20">
            <div className="container">
              <div className="md:flex md:flex-row md:gap-6">
                <div className="flex flex-col">
                  <div className="md:flex md:flex-row md:gap-6">
                    <img
                      className="md:w-[276px] md:h-[400px] w-full  h-full"
                      src={sbcat2}
                      alt=""
                    />
                    <img
                      className="hidden  sm:flex md:flex lg:flex "
                      src={sbcat1}
                      alt=""
                    />
                    <div className="flex flex-col md:items-start md:ml-8">
                      <h1 className="font-bold text-custom1 md:text-5xl text-lg md:mt-0 mt-4 font-poppins">
                        100% Trusted
                      </h1>
                      <h1 className="font-bold text-custom1 md:text-5xl text-lg font-poppins">
                        Organic Food Store
                      </h1>
                      {/* health */}
                      <div>
                        <div className="mt-6 flex flex-row gap-2 ">
                          <IoIosCheckmarkCircle
                            size={25}
                            className="text-primary"
                          />
                          <h1 className="text-custom1 font-bold md:font-medium md:text-[18px] text-sm">
                            Healthy & natural food for lovers of healthy food.
                          </h1>
                        </div>
                        <p className="text-custom1 text-sm md:ml-6">
                          quis tempus erat. Phasellus euismod bibendum magna non
                          tristique. Pellentesque{" "}
                          <span className="md:mr-4">
                            semper vestibulum elit sed condimentum. Nunc pretium
                            fermentum interdum.
                          </span>
                        </p>
                        <div className="">
                          <div className="mt-6 flex flex-row gap-2 hidden  sm:flex md:flex lg: ">
                            <IoIosCheckmarkCircle
                              size={25}
                              className="text-primary"
                            />
                            <h1 className="text-custom1 font-medium text-[18px] hidden  sm:flex md:flex lg:flex">
                              Every day fresh and quality products for you.
                            </h1>
                          </div>
                          <p className="text-custom1 text-sm ml-6 hidden  sm:flex md:flex lg:flex">
                            Maecenas vehicula a justo quis laoreet. Sed in
                            placerat nibh, a posuere ex. Morbi sem neque,
                            aliquam
                          </p>
                        </div>
                        <Link>
                          <Button title="Shop Now" Icon={IoArrowForward} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* dark */}
        <Numbers />
      </div>
    </div>
  );
}

export default SubCategories;
