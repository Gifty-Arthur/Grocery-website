//images
import fp2 from "../../assets/Product/fp2.png";
import fp3 from "../../assets/Product/fp3.png";
import fp1 from "../../assets/Product/fp1.png";
import fp4 from "../../assets/Product/fp4.png";
import sh1 from "../../assets/Shop/sh1.png";
import sh2 from "../../assets/Shop/sh2.png";
import sh3 from "../../assets/Shop/sh3.png";
import sh4 from "../../assets/Shop/sh4.png";
import sh11 from "../../assets/Shop/sh11.png";
import sh5 from "../../assets/Shop/sh5.png";
import sh7 from "../../assets/Shop/sh7.png";
import sh8 from "../../assets/Shop/sh8.png";
import sh9 from "../../assets/Shop/sh9.png";
import sh10 from "../../assets/Shop/sh10.png";
import sh12 from "../../assets/Shop/sh12.png";
import p1 from "../../assets/Product/p1.png";

//icons

import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";

function ShopCat() {
  return (
    <div>
      <section id="ShopCat">
        <div className="container">
          <div className="mt-20">
            <div className="mt-10">
              <div className="sm:flex sm:flex-col gap-4">
                <div className="md:flex md:flex-row md:gap-8">
                  <div className="flex flex-row gap-4">
                    {/* 1st image */}
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh1} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Red Chill</p>
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
                    </div>
                    {/* 2nd image */}
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2">
                      <img src={sh2} alt="" />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] hover:text-primary">
                            Big Potatoes
                          </p>
                          <p className="text-md font-medium">$14.99</p>
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
                    </div>
                  </div>
                  {/* 3rd image */}
                  <div className="flex flex-row gap-4 sm:mt-0 mt-4">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2">
                      <img src={fp1} alt="" />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] hover:text-primary">
                            Chanise Cabbage
                          </p>
                          <p className="text-md font-medium">$14.99</p>
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
                    </div>
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2">
                      <div className="w-[101px] h-[27px] bg-black mt-1 ml-4 rounded-md">
                        <p className="text-white text-center text-sm font-medium">
                          Out of Stock
                        </p>
                      </div>
                      <img src={sh11} alt="" />
                      <div className="flex items-center justify-between ">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] hover:text-primary">
                            Corn
                          </p>
                          <p className="text-md font-medium">$14.99</p>
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
                    </div>
                  </div>
                </div>
                {/* second set of imagge */}
                <div className="sm:flex flex-row sm:gap-8">
                  <div className="flex flex-row gap-4 ">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh3} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Red Tomatoes</p>
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
                    </div>
                    {/* img2 */}
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh4} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Eggplant</p>
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
                    </div>
                  </div>
                  {/* 3rd image */}
                  <div className="flex flex-row gap-4">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh5} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Fresh Cauliflower</p>
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
                    </div>
                    {/* 4th image */}
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={fp2} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Green Apple</p>
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
                    </div>
                  </div>
                </div>
                {/* 3rd set of the images */}
                <div className="sm:flex flex-row gap-8">
                  <div className="flex flex-row gap-4">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh7} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Eggplant</p>
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
                    </div>
                    {/* 2nd image of 3rd set */}
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={fp3} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Eggplant</p>
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
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2  hover:border-primary">
                      <img src={sh8} alt="" />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] ">Green Chill</p>
                          <p className="text-md font-medium">$14.99</p>
                          <div className="flex text-secondary">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarOutline className="text-[#cccccc]" />
                          </div>
                        </div>
                        <div className="rounded-full bg-custom4 w-[40px] h-[40px] mr-6 flex items-center justify-center hover:border-primary">
                          <HiOutlineShoppingBag size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh9} alt="" />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] hover:text-primary">
                            Green Cucumbar
                          </p>
                          <p className="text-md font-medium">$14.99</p>
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
                    </div>
                  </div>
                </div>
                {/* 4th set of images */}
                <div className="sm:flex flex-row gap-8">
                  <div className="flex flex-row gap-4">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh11} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Eggplant</p>
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
                    </div>
                    {/* 2nd image of 3rd set */}
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh12} alt="" />
                      <div className="flex items-center justify-between -mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d]">Green Littuce</p>
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
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2  hover:border-primary">
                      <img src={fp4} alt="" />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] ">Ladies Finger</p>
                          <p className="text-md font-medium">$14.99</p>
                          <div className="flex text-secondary">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarOutline className="text-[#cccccc]" />
                          </div>
                        </div>
                        <div className="rounded-full bg-custom4 w-[40px] h-[40px] mr-6 flex items-center justify-center hover:border-primary">
                          <HiOutlineShoppingBag size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-[312px] md:h-[407px] border-2 shadow-md rounded-lg w-1/2 hover:border-primary">
                      <img src={sh10} alt="" />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col ml-4">
                          <p className="text-[#4d4d4d] hover:text-primary">
                            Green Capsicum
                          </p>
                          <p className="text-md font-medium">$14.99</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      your email
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 mt-1 pointer-events-none"></div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full pl-10 pr-[110px] h-[45px] text-md border rounded-full   "
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
                  <div className=" mt-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopCat;
