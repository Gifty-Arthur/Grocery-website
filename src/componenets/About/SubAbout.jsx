import bga from "../../assets/About/bga.png";
import a7 from "../../assets/About/a7.png";
import p1 from "../../assets/Product/p1.png";
//icons
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsBox } from "react-icons/bs";
import { GoStar } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

export default function e() {
  return (
    <div>
      <div>
        <div
          className="sm:w-full sm:h-[685px] h-[400px] bg-cover mt-10 w-full"
          style={{ backgroundImage: `url(${bga})` }}
        >
          <div className="container">
            <div className="sm:flex sm:flex-row gap-12">
              <img src={a7} alt="w-full" className="hidden sm:block" />

              <div className="sm:mt-0 mt-20">
                <h1 className="font-semibold md:text-[46px] text-[24px] font-poppins text-custom1 sm:mt-24">
                  100% Trusted <br />
                  Organic Food Store
                </h1>
                <p className="text-[14px] sm:text-base">
                  Pellentesque a ante vulputate leo porttitor luctus sed eget
                  eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                  tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                  feugiat.
                </p>
                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <div className="flex flex-row gap-4">
                          <img className="w-full h-full" src={p1} alt="" />
                          <LuLeaf
                            size={27}
                            className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <h1 className="text-[18px] mt-4 text-custom1 font-medium font-poppins">
                          100% organic food
                        </h1>
                        <p className="text-[14px] sm:text-base">
                          100% healthy & Fresh food
                        </p>
                      </div>
                    </div>
                    {/* star*/}
                    <div className="flex flex-row gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <img className="w-full h-full" src={p1} alt="" />
                        <GoStar
                          size={27}
                          className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-2">
                        <h1 className="text-[18px] mt-4 text-custom1 font-medium font-poppins">
                          Customer Feedback
                        </h1>
                        <p className="text-[14px] sm:text-base">
                          Our happy customer
                        </p>
                      </div>
                    </div>
                    {/* truck */}
                    <div className="flex flex-row gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <img className="w-full h-full" src={p1} alt="" />
                        <CiDeliveryTruck
                          size={27}
                          className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-2">
                        <h1 className="text-[18px] mt-4 text-custom1 font-medium font-poppins">
                          Free Shipping
                        </h1>
                        <p className="text-[14px] sm:text-base">
                          Free shipping with discount
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2nd icons */}
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <div className="flex flex-row gap-4">
                          <img className="w-full h-full" src={p1} alt="" />
                          <TfiHeadphoneAlt
                            size={27}
                            className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <h1 className="text-[18px] mt-4 text-custom1 font-medium font-poppins">
                          100% organic food
                        </h1>
                        <p className="text-[14px] sm:text-base">
                          100% healthy & Fresh food
                        </p>
                      </div>
                    </div>
                    {/* star*/}
                    <div className="flex flex-row gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <img className="w-full h-full" src={p1} alt="" />
                        <HiOutlineDocumentCheck
                          size={27}
                          className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-2">
                        <h1 className="text-[18px] mt-4 text-custom1 font-medium font-poppins">
                          Customer Feedback
                        </h1>
                        <p className="text-[14px] sm:text-base">
                          Our happy customer
                        </p>
                      </div>
                    </div>
                    {/* truck */}
                    <div className="flex flex-row gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <img className="w-full h-full" src={p1} alt="" />
                        <BsBox
                          size={27}
                          className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 sm:mb-0 mb-10">
                        <h1 className="text-[18px] mt-4 text-custom1 font-medium font-poppins">
                          Free Shipping
                        </h1>
                        <p className="text-[14px] sm:text-base">
                          Free shipping with discount
                        </p>
                      </div>
                    </div>
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
