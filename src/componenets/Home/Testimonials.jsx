import t1 from "../../assets/News/t1.png";
import t2 from "../../assets/News/t2.png";
import t3 from "../../assets/News/t3.png";
import step1 from "../../assets/steps/step1.png";

//icons
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";

import p1 from "../../assets/Product/p1.png";

function Testimonials() {
  return (
    <div>
      <div className="bg-[#f9fbfa] w-full">
        <div className="container ">
          <div className="flex flex-col md:mt-24">
            <p className="text-primary text-lg mt-10">Testimonial</p>
            <h1 className="md:text-4xl font-semibold font-poppin text-2xl">
              What our Customer Says
            </h1>
          </div>
          <div className="mt-20">
            <div className="">
              <div className="md:flex md:flex-row gap-6   flex flex-col -mt-10 ">
                <div className="bg-gray-100 w-full md:w-[424px] h-[254px] rounded-lg shadow-md">
                  <div className="ml-6 p-6">
                    <RiDoubleQuotesR size={30} className="text-tertiary" />
                    <p className="text-sm mt-4 text-[#4D4D4D] font-poppins">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex flex-row gap-2 items-center mt-4">
                      <img src={t1} alt="" />
                      <div>
                        <p className="text-md font-poppins font-medium text-custom1">
                          Robert Fox
                        </p>
                        <p className="font-poppins text-md text-[#999999]">
                          Customer
                        </p>
                      </div>
                      <div className="flex flex-row ml-auto text-secondary">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </div>
                    </div>
                  </div>
                </div>
                {/* second */}
                <div className="bg-gray-100 w-full md:w-[424px] h-[254px] rounded-lg shadow-md">
                  <div className="ml-6 p-6">
                    <RiDoubleQuotesR size={30} className="text-tertiary" />
                    <p className="text-sm mt-4 text-[#4D4D4D] font-poppins">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex flex-row gap-2 items-center mt-4">
                      <img src={t2} alt="" />
                      <div>
                        <p className="text-md font-poppins font-medium text-custom1">
                          Robert Fox
                        </p>
                        <p className="font-poppins text-md text-[#999999]">
                          Customer
                        </p>
                      </div>
                      <div className="flex flex-row ml-auto text-secondary">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100  w-full md:w-[424px] h-[254px] rounded-lg shadow-md">
                  <div className="ml-6 p-6">
                    <RiDoubleQuotesR size={30} className="text-tertiary" />
                    <p className="text-sm mt-4 text-[#4D4D4D] font-poppins">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex flex-row gap-2 items-center mt-4">
                      <img src={t3} alt="" />
                      <div>
                        <p className="text-md font-poppins font-medium text-custom1">
                          Robert Fox
                        </p>
                        <p className="font-poppins text-md text-[#999999]">
                          Customer
                        </p>
                      </div>
                      <div className="flex flex-row ml-auto text-secondary">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seps */}
      <div className="container">
        <img src={step1} alt="" />
        <div>
          <div className="mt-20">
            <div className="md:flex flex-row gap-4">
              <div className="w-full md:w-[312px] h-[184px] border-2 rounded-md">
                <div className="flex flex-col mt-6 ml-4">
                  <div className="relative ">
                    <img src={p1} alt="" className="" />
                    <div className="absolute left-2 top-6  ml-3">
                      <IoLocationOutline size={30} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-md text-custom1 font-poppins font-bold mt-2">
                    OUR LOCATION
                  </p>
                  <p className="text-sm font-poppins text-[#666666] mt-2">
                    1901 Thornridge Cir. Shiloh, Washington DC 20020, United
                    States
                  </p>
                </div>
              </div>

              {/* call */}
              <div className="w-full md:w-[312px] h-[184px] border-2 rounded-md">
                <div className="flex flex-col mt-6 ml-4">
                  <div className="relative ">
                    <img src={p1} alt="" className="" />
                    <div className="absolute left-2 top-6  ml-3">
                      <PiPhoneCallBold size={30} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-custom1 font-poppins font-bold mt-2">
                    Call Us 24/7
                  </p>
                  <p className="text-lg font-poppins text-primary mt-2">
                    (303) 555-0105
                  </p>
                </div>
              </div>

              {/* search */}
              <div className="w-full md:w-[648px] h-[185px] border-2 rounded-md">
                <div className="flex flex-col mt-6 ml-4">
                  <div className="relative ">
                    <img src={p1} alt="" className="" />
                    <div className="absolute left-2 top-6  ml-3">
                      <MdOutlineMail size={30} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-custom1 font-poppins font-bold mt-2">
                    Subscribe Newsletter
                  </p>
                  {/* search */}
                  <form className="max-w-md w-full mx-4 hidden md:block">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full pl-10 pr-[110px] h-[45px] text-md text-black border rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute right-0 bg-primary w-[98px] h-[45px] rounded-full font-semibold text-white"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
