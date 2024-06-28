import { Link } from "react-router-dom";

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

//icons

import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

function ShopCat() {
  return (
    <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCat;
