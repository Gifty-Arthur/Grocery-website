//icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiBowlFoodThin } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";

//images
import b1 from "../../assets/Blog/b1.png";
import b2 from "../../assets/Blog/b2.png";
import b3 from "../../assets/Blog/b3.png";
import b4 from "../../assets/Blog/b4.png";
import b5 from "../../assets/Blog/b5.png";
import b6 from "../../assets/Blog/b6.png";
import b7 from "../../assets/Blog/b7.png";
import b8 from "../../assets/Blog/b8.png";
import b9 from "../../assets/Blog/b9.png";
import n1 from "../../assets/News/n1.png";
import p1 from "../../assets/Product/p1.png";

function Sort() {
  return (
    <div>
      <div className="container sm:mt-0 mt-8">
        <div className="flex flex-col mt-2">
          <div className="flex flex-wrap gap-2">
            <p className="sm:mt-0 mt-2 text-custom3 font-poppins">Sort by:</p>
            <div className="w-[166px] h-[41px] border-2 rounded-md flex items-center justify-between sm:-mt-2">
              <p className="font-poppins text-[#4D4D4D] ml-2">Latest</p>
              <MdKeyboardArrowDown />
            </div>
          </div>

          {/*1st set of images */}

          <div className="sm:flex sm:flex-row sm:gap-2 sm:mt-8">
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4 ">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b1} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4 ">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b2} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* 2nd set */}
          <div className="sm:flex sm:flex-row sm:gap-2 sm:mt-8 ">
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b3} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4 ">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b4} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* 3rd set */}
          <div className="sm:flex sm:flex-row sm:gap-2 sm:mt-8">
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b5} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4 ">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b6} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* 4th set */}
          <div className="sm:flex sm:flex-row sm:gap-2 sm:mt-8">
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4 ">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b7} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b8} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* last set */}
          <div className="sm:flex sm:flex-row sm:gap-2 sm:mt-8">
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4 ">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={b9} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 sm:mt-0 mt-4">
              <div className="relative w-full">
                <img className="w-full md:w-[424px]" src={n1} alt="" />
                <div className="absolute bottom-6 left-0 ml-4">
                  <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                    <div>
                      <h1 className="text-[20px] font-medium font-poppins text-center">
                        18
                      </h1>
                      <p className="font-medium font-poppins text-[#808080]">
                        Nov
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:ml-4 ml-0">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1">
                    <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                    <p className="font-poppins text-gray-500">Food</p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p className="font-poppins text-sm text-gray-500">
                      By Admin
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p className="font-poppins text-gray-500">Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-3 font-poppins">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
                <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                  <span className="relative text-[16px] text-primary mt-1">
                    Read More
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="mt-20">
            <div className="md:flex md:flex-row gap-6  flex flex-col ">
              {/* call */}

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
      </div>
    </div>
  );
}

export default Sort;
