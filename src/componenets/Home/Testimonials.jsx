import t1 from "../../assets/News/t1.png";
import t2 from "../../assets/News/t2.png";
import t3 from "../../assets/News/t3.png";
import step2 from "../../assets/steps/step2.png";
import step3 from "../../assets/steps/step3.png";
import step4 from "../../assets/steps/step4.png";
import step5 from "../../assets/steps/step5.png";
import step6 from "../../assets/steps/step6.png";
import step7 from "../../assets/steps/step7.png";
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
      <div className="container mt-20">
        <div className="">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:space-x-32">
            <img src={step2} alt="" />
            <img src={step3} alt="" />
            <img src={step4} alt="" />
            <img src={step5} alt="" />
            <img src={step6} alt="" />
            <img src={step7} alt="" />
          </div>
        </div>

        <div>
          {/* location */}
          <div className="mt-20">
            <div className="md:flex md:flex-row gap-6  flex flex-col ">
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
                  <form className="max-w-md w-full mr-4 mt-2">
                    <label
                      htmlFor="default-search"
                      className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Subscribe
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 mt-1 pointer-events-none"></div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full pl-10 pr-[110px] h-[45px] text-md text-black border rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Subscribe"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute right-0 bg-primary w-[98px] h-[45px] rounded-full font-semibold text-white hover:
                        "
                      >
                        Subscribe
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
