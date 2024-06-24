import t1 from "../../assets/News/t1.png";
import t2 from "../../assets/News/t2.png";
import t3 from "../../assets/News/t3.png";
import step1 from "../../assets/steps/step1.png";
import p1 from "../../assets/Product/p1.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export function Testimonials() {
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

        <div className="mt-8">
          <div>
            <div className="w-full md:w-[312px] h-[184px] rounded-md border-2 ">
              <IoLocationOutline />
              <img src={p1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
