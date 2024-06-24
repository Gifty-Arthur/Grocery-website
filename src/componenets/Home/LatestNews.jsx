import n1 from "../../assets/News/n1.png";
import n2 from "../../assets/News/n2.png";
import n3 from "../../assets/News/n3.png";

//images for testimonials

import { GrUserAdmin } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiBowlFoodThin } from "react-icons/pi";
import Testimonials from "./Testimonials";

function LatestNews() {
  return (
    <div>
      <div className="bg-[#f9fbfa] w-full h-full">
        <div className="container mt-10">
          <div className="flex flex-col items-center justify-center ">
            <p className="text-primary text-lg mt-2">Blog</p>
            <h1 className="text-4xl font-semibold font-poppins">Latest News</h1>
          </div>
          <div className="md:mt-10s sm:mt-20 lg:mt-20 mt-10">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
              <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 ">
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
                    <span className="relative text-[16px] text-primary">
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
              <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 ">
                <div className="relative w-full">
                  <img className="w-full md:w-[424px]" src={n2} alt="" />
                  <div className="absolute bottom-6 left-0 ml-4">
                    <div className="w-[58px] h-[58px] bg-white rounded-sm flex items-center justify-center">
                      <div>
                        <h1 className="text-[20px] font-medium font-poppins text-center">
                          26
                        </h1>
                        <p className="font-medium font-poppins text-[#808080]">
                          JAN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:ml-4 ">
                  <div className="flex flex-row gap-4 mt-4">
                    <div className="flex flex-row gap-1">
                      <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                      <p className="font-poppins text-gray-500">Food</p>
                    </div>
                    <div className="flex flex-row gap-1 text-[#B3B3B3]">
                      <GrUserAdmin className="mt-1" />
                      <p className="font-poppins text-gray-500">By Admin</p>
                    </div>
                    <div className="flex flex-row gap-1 text-[#B3B3B3]">
                      <FaRegCommentAlt className="mt-1" />
                      <p className="font-poppins text-gray-500">Comments</p>
                    </div>
                  </div>
                  <h1 className="text-[18px] text-custom1 font-medium mt-3 font-poppins">
                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                    fermentum.
                  </h1>
                  <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                    <span className="relative text-[16px] text-primary">
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
              <div className="w-full md:w-[424px] h-[494px] rounded-md bg-gray-100 ">
                <img className="w-full md:w-[424px]" src={n3} alt="" />
                <div className="flex flex-col ml-4">
                  <div className="flex flex-row gap-4 mt-4">
                    <div className="flex flex-row gap-1">
                      <PiBowlFoodThin className="mt-1 text-[#B3B3B3]" />
                      <p className="font-poppins text-gray-500">Food</p>
                    </div>
                    <div className="flex flex-row gap-1 text-[#B3B3B3]">
                      <GrUserAdmin className="mt-1" />
                      <p className="font-poppins text-gray-500">By Admin</p>
                    </div>
                    <div className="flex flex-row gap-1 text-[#B3B3B3]">
                      <FaRegCommentAlt className="mt-1" />
                      <p className="font-poppins text-gray-500">Comment</p>
                    </div>
                  </div>
                  <h1 className="text-[18px] text-custom1 font-medium mt-3 font-poppins">
                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                    fermentum.
                  </h1>
                  <button className="relative group overflow-hidden flex space-x-2 items-center mt-4">
                    <span className="relative text-[16px] text-primary">
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
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

export default LatestNews;
