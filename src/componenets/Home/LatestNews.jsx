import React from "react";

//images
import nbg from "../../assets/News/nbg.png";
import n1 from "../../assets/News/n1.png";

//icons

import { GrUserAdmin } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiBowlFoodThin } from "react-icons/pi";

function LatestNews() {
  return (
    <div>
      <div className="relative w-full">
        <img className="w-full mt-20" src={nbg} alt="" />
        <div className="absolute top-0 left-0 right-0 container mt-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-primary text-lg">Blog</p>
            <h1 className="text-4xl font-semibold font-poppins ">
              Latest News
            </h1>
          </div>
          <div className="mt-20">
            <div className="w-[424px] h-[494px] rounded-md bg-white">
              <img src={n1} alt="" />
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 mt-4">
                  <div className="flex flex-row gap-1 text-[#B3B3B3] ">
                    <PiBowlFoodThin className="mt-1" />
                    <p>By Admin</p>
                  </div>
                  {/*admin  */}
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <GrUserAdmin className="mt-1" />
                    <p>By Admin</p>
                  </div>
                  {/* comments */}
                  <div className="flex flex-row gap-1 text-[#B3B3B3]">
                    <FaRegCommentAlt className="mt-1" />
                    <p>Comments</p>
                  </div>
                </div>
                <h1 className="text-[18px] text-primary font-medium mt-2">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
