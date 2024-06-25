import { Link } from "react-router-dom";

import fbg from "./../assets/steps/fbg.png";
import Group from "./../assets/Hero/Group.png";
import pm from "./../assets/steps/pm.png";

//icons
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="relative bg-[#191919]">
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={fbg}
        alt=""
      />
      <div className="container md:pt-[8rem] mt-10 h-full relative z-10">
        <div className="md:flex md:flex-row md:space-x-24 flex flex-col space-y-6 md:space-y-0">
          <div className="flex flex-col gap-6 ">
            <Link>
              <div className="flex items-center gap-2 ml-10 md:ml-0">
                <img src={Group} alt="Group" />
                <h1 className="font-poppins text-4xl text-white font-bold">
                  FARMYARD
                </h1>
              </div>
            </Link>
            <p className="text-sm font-poppins text-[#999999]">
              Morbi cursus porttitor enim lobortis <br />
              molestie. Duis gravida turpis dui
              <br />
              eget bibendum magn.
            </p>
            {/* social media */}
            <div className="flex flex-row gap-6 ">
              <FaFacebook size={30} className="text-primary" />
              <FaTwitter size={30} className="text-gray-300" />
              <FaPinterestP size={30} className="text-gray-300" />
              <FaInstagram size={30} className="text-gray-300" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* My Account */}
            <div className="flex flex-col gap-2">
              <h1
                className="font-medium text-[18px] text-white font-poppins underline"
                style={{
                  textDecorationColor: "#00b207",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "15px",
                }}
              >
                Account
              </h1>

              <p className="text-sm text-[#999999] font-poppins mt-8">
                My Account
              </p>

              <p className="text-sm text-[#999999] font-poppins">
                Order History
              </p>

              <p className="text-sm text-white font-poppins">Shopping Cart</p>

              <p className="text-sm text-[#999999] font-poppins">Wishlist</p>
            </div>

            {/* Helps */}
            <div className="flex flex-col gap-2">
              <h1
                className="font-medium text-[18px] text-white font-poppins underline"
                style={{
                  textDecorationColor: "#00b207",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "15px",
                }}
              >
                Helps
              </h1>

              <p className="text-sm text-[#999999] font-poppins mt-8">
                Contact
              </p>

              <p className="text-sm text-[#999999] font-poppins">Faqs</p>

              <p className="text-sm text-[#999999] font-poppins">
                Terms & Condition
              </p>

              <p className="text-sm text-[#999999] font-poppins">
                Privacy Policy
              </p>
            </div>

            {/* Proxy */}
            <div className="flex flex-col gap-2">
              <h1
                className="font-medium text-[18px] text-white font-poppins underline"
                style={{
                  textDecorationColor: "#00b207",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "15px",
                }}
              >
                Proxy
              </h1>

              <p className="text-sm text-[#999999] font-poppins mt-8">About</p>

              <p className="text-sm text-[#999999] font-poppins">Shop</p>

              <p className="text-sm text-[#999999] font-poppins">Product</p>

              <p className="text-sm text-[#999999] font-poppins">Track Order</p>
            </div>

            {/* Download Mobile App */}
            <div className="flex flex-col gap-2">
              <h1
                className="font-medium text-[18px] text-white font-poppins underline"
                style={{
                  textDecorationColor: "#00b207",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "15px",
                }}
              >
                Download Mobile App
              </h1>
              <div className="flex flex-col gap-4">
                <div className="md:flex md:flex-row  gap-2">
                  <div className="w-[154px] h-[58px] rounded-md bg-[#333333] mt-8 flex items-center justify-center">
                    <FaApple size={30} className="text-white ml-1" />
                    <p className="text-sm text-[#B3B3B3] ml-2">
                      Download on the{" "}
                      <span className="text-white text-md font-medium font-poppins">
                        App Store
                      </span>
                    </p>
                  </div>
                  {/* playstore */}
                  <div className="w-[154px] h-[58px] rounded-md bg-[#333333] flex items-center justify-center mt-8">
                    <FaGooglePlay size={30} className="text-white ml-1" />
                    <p className="text-sm text-[#B3B3B3] ml-2">
                      Download on the{" "}
                      <span className="text-white text-md font-medium font-poppins">
                        Play Store
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-row items-center justify-between">
          <p className="text-[#808080] text-sm font-poppins">
            Farmyard eCommerce © 2021. All Rights Reserved
          </p>
          <img src={pm} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
