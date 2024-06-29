//images
import bg2 from "../../assets/Hero/bg2.png";
import g1 from "../../assets/Blog/g1.png";
import g2 from "../../assets/Blog/g2.png";
import g3 from "../../assets/Blog/g3.png";
import g4 from "../../assets/Blog/g4.png";
import g5 from "../../assets/Blog/g5.png";
import g6 from "../../assets/Blog/g6.png";
import g7 from "../../assets/Blog/g7.png";
import g8 from "../../assets/Blog/g8.png";
import r1 from "../../assets/Blog/r1.png";
import r2 from "../../assets/Blog/r2.png";
import r3 from "../../assets/Blog/r3.png";

import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";

//icons
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Sort from "./Sort";

function Blog() {
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
                  <p className="text-md">Blog</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* filter */}
        <div>
          <div className="container mt-10">
            <div className="sm:flex sm:flex-row">
              <div className="flex flex-col">
                <div className="w-[131px] h-[45px] rounded-full bg-primary flex items-center justify-center">
                  <div className="flex flex-row gap-2">
                    <p className="text-white font-poppins">Filter</p>
                    <MdFilterList className="mt-1 text-white" />
                  </div>
                </div>

                {/* sech */}
                <form className="max-w-md w-[424px]   mt-4">
                  <label
                    htmlFor="default-search"
                    className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full pl-10 h-[45px] text-md text-black border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
                <div className="w-[424px] h-[1px] bg-gray-300 mt-6"></div>
                {/* categories */}
                <div className="mt-6 flex flex-col">
                  <p className="text-medium font-poppins text-[20px] text-custom1">
                    Top Categories
                  </p>
                  <div className="flex flex-row sm:gap-[290px] gap-[240px]">
                    <p className="text-custom1 font-poppins text-sm">
                      Fresh Fruit
                    </p>
                    <p className="text-custom1 font-poppins text-sm">(134)</p>
                  </div>
                  {/* Vegetables */}
                  <div className="flex flex-row sm:gap-[279px] gap-[232px] mt-2">
                    <p className="text-custom1 font-poppins text-sm">
                      Vegetables
                    </p>
                    <p className="text-custom1 font-poppins text-sm ">(150)</p>
                  </div>
                  {/* cooking */}
                  <div className="flex flex-row sm:gap-[299px] gap-[254px] mt-2">
                    <p className="text-custom1 font-poppins text-sm">Cooking</p>
                    <p className="text-custom1 font-poppins text-sm ">(54)</p>
                  </div>
                  {/* Snacks */}
                  <div className="flex flex-row sm:gap-[309px] gap-[262px] mt-2">
                    <p className="text-custom1 font-poppins text-sm">Snacks</p>
                    <p className="text-custom1 font-poppins text-sm ">(47)</p>
                  </div>
                  {/* Beverages */}
                  <div className="flex flex-row sm:gap-[285px] gap-[238px] mt-2">
                    <p className="text-custom1 font-poppins text-sm">
                      Beverages
                    </p>
                    <p className="text-custom1 font-poppins text-sm ">(43)</p>
                  </div>
                  {/* Beauty & Health */}
                  <div className="flex flex-row sm:gap-[247px] gap-[198px] mt-2">
                    <p className="text-custom1 font-poppins text-sm">
                      Beauty & Health
                    </p>
                    <p className="text-custom1 font-poppins text-sm ">(38)</p>
                  </div>
                  {/* Bread & Bakery */}
                  <div className="flex flex-row sm:gap-[250px] gap-[205px] mt-2">
                    <p className="text-custom1 font-poppins text-sm">
                      Bread & Bakery
                    </p>
                    <p className="text-custom1 font-poppins text-sm ">(15)</p>
                  </div>
                </div>
                <div className="w-[424px] h-[1px] bg-gray-300 mt-6"></div>
                {/* popular */}
                <div className="mt-6">
                  <div className="flex flex-col mt-6">
                    <p className="font-poppins font-medium text-[20px] text-custom1">
                      Popular Tag
                    </p>
                    <div className="flex flex-row gap-4 mt-4">
                      <div className="w-[86px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Healthy
                        </p>
                      </div>
                      {/* low fat */}
                      <div className="w-[86px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Low fat
                        </p>
                      </div>
                      <div className="w-[110px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Vegetarian
                        </p>
                      </div>
                      <div className="w-[74px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Bread
                        </p>
                      </div>
                    </div>
                    {/* 2nd set */}
                    <div className="flex flex-row gap-4 mt-4">
                      <div className="w-[97px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Kids foods
                        </p>
                      </div>
                      <div className="w-[94px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Vitamins
                        </p>
                      </div>
                      {/* snacks */}
                      <div className="w-[86px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Snacks
                        </p>
                      </div>
                      {/* tifin */}
                      <div className="w-[65px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1 mt-1 hover:text-white">
                          Tiffin
                        </p>
                      </div>
                    </div>
                    {/* 3rd set */}
                    <div className="flex flex-row gap-4 mt-4">
                      <div className="w-[68px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1  hover:text-white">
                          Meat
                        </p>
                      </div>
                      <div className="w-[73px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1  hover:text-white">
                          Launch
                        </p>
                      </div>
                      {/* snacks */}
                      <div className="w-[78px] h-[33px] rounded-full bg-custom4 hover:bg-primary  flex items-center justify-center cursor-pointer">
                        <p className="font-poppins text-custom1  hover:text-white">
                          Dinner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Our Gallery */}
                <div className="mt-6">
                  <div className="flex flex-col">
                    <h1 className="text-custom1 font-poppins font-medium text-[20px]">
                      Our Gallery
                    </h1>
                    <div className="flex flex-row sm:gap-2 gap-1 mt-2">
                      <img src={g1} alt="" />
                      <img src={g2} alt="" />
                      <img src={g3} alt="" />
                      <img src={g4} alt="" />
                    </div>
                    <div className="flex flex-row sm:gap-2 gap-1 mt-2">
                      <img src={g5} alt="" />
                      <img src={g7} alt="" />
                      <img src={g8} alt="" />
                      <img src={g6} alt="" />
                    </div>
                  </div>
                </div>
                {/* Recently Added */}
                <section id="recent">
                  <div className="mt-6">
                    <h1 className="text-custom1 font-poppins font-medium text-[20px]">
                      Recently Added
                    </h1>
                    <div className="flex flex-col mt-4">
                      <div className="flex flex-row gap-2">
                        <img src={r1} alt="" />
                        <div className="flex flex-col mt-2">
                          <p className="text-custom1 font-poppins font-medium text-[16px]">
                            Curabitur porttitor orci eget nequ
                            <br /> accumsan.
                          </p>
                          <div className="flex flex-row gap-2">
                            <SlCalender className="text-primary mt-1" />
                            <p className="font-poppins text-[#666666] text-sm">
                              Apr 25, 2024
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 2nd */}
                      <div className="flex flex-row gap-2 mt-2">
                        <img src={r2} alt="" />
                        <div className="flex flex-col mt-2">
                          <p className="text-custom1 font-poppins font-medium text-[16px]">
                            Donec mattis arcu faucibus suscipit
                            <br /> viverra.
                          </p>
                          <div className="flex flex-row gap-2">
                            <SlCalender className="text-primary mt-1" />
                            <p className="font-poppins text-[#666666] text-sm">
                              Apr 25, 2024
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 3rd image */}
                      <div className="flex flex-row gap-2 mt-2">
                        <img src={r3} alt="" />
                        <div className="flex flex-col mt-2">
                          <p className="text-custom1 font-poppins font-medium text-[16px]">
                            Quisque posuere tempus rutrum. <br />
                            Integer velit ex.
                          </p>
                          <div className="flex flex-row gap-2">
                            <SlCalender className="text-primary mt-1" />
                            <p className="font-poppins text-[#666666] text-sm">
                              Apr 25, 2024
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sort */}
              <Sort />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
