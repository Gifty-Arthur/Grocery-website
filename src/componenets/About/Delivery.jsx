/* eslint-disable react/jsx-no-undef */
import Button from "../Layout/Button";
import { Link } from "react-router-dom";

//icons

import { IoArrowForward } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

//images
import a2 from "../../assets/About/a2.png";
//images for our team
import a3 from "../../assets/About/a3.png";
import a4 from "../../assets/About/a4.png";
import a5 from "../../assets/About/a5.png";
import a6 from "../../assets/About/a6.png";
import Testimonials from "../Home/Testimonials";

function Delivery() {
  return (
    <div>
      <div className="container">
        <div className="sm:flex sm:flex-row sm:gap-12 mt-10 items-center justify-between">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold font-poppins text-custom1 sm:text-4xl text-3xl sm:mt-0 mt-20">
                We Deliver, You Enjoy Your Order.
              </h1>
              <p className="font-poppins text-custom1 text-md ">
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                <br />
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                <br />
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum, nunc eget elementum.
              </p>
              <div className="flex flex-row gap-2">
                <IoCheckmarkCircle className="mt-1 text-tertiary" />
                <p className="text-md">Sed in metus pellentesque.</p>
              </div>
              <div className="flex flex-row gap-2">
                <IoCheckmarkCircle className="mt-1 text-tertiary" />
                <p>
                  Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <IoCheckmarkCircle className="mt-1 text-tertiary" />
                <p>Maecenas ut nunc fringilla erat varius.</p>
              </div>
            </div>
            <Link>
              <Button
                title="Shop now"
                Icon={IoArrowForward}
                className="bg-primary w-[191px] h-[51px]  rounded-full mt-4 text-white sm:ml-0 ml-12"
              />
            </Link>
          </div>
          <div>
            <img src={a2} alt="" className="mt-8 w-full " />
          </div>
        </div>
      </div>
      {/* our team */}

      <section id="Our Team">
        <div className="bg-[#f7f7f7] w-full h-[698px]">
          <div className="container sm:mt-20 mt-10">
            <div className="flex flex-col  ">
              <h1 className="text-4xl font-poppins font-semibold text-center mt-12">
                Our Awesome Team
              </h1>
              <p className="text-center text-md text-custom1 font-poppins mt-4">
                Pellentesqutext-centere a ante vulputate leo porttitor luctus
                sed eget eros. Nulla et rhoncus neque.
                <br /> Duis non diam eget est luctus tincidunt a a mi.s
              </p>
            </div>
            {/* img1 */}
            <div className="sm:mt-28 sm:flex sm:flex-row sm:gap-4 mt-10">
              <div className="flex flex-row gap-2">
                <div className="sm:w-[312px] sm:h-[388px] w-1/2 h-1/2 rounded-lg bg-white  sm:ml-0 ">
                  <div className="relative">
                    <img src={a3} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center space-x-4">
                      <FaFacebook className="text-white" />
                      <div className="bg-primary rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                        <FaTwitter className="text-white " />
                      </div>
                      <FaPinterestP className="text-white" />
                      <FaInstagram className="text-white" />
                    </div>
                  </div>
                  <div className="mt-4 ml-4">
                    <h2 className="text-custom1 font-medium text-[18px] font-poppins">
                      Jenny Wilson
                    </h2>
                    <p className="text-custom3 font-poppins text-sm">
                      Ceo & Founder
                    </p>
                  </div>
                </div>
                {/* img2 */}
                <div className="sm:w-[312px] sm:h-[388px] w-1/2 h-1/2 rounded-lg bg-white  sm:ml-0 ">
                  <img src={a4} alt="" />
                  <div className="mt-4 ml-4">
                    <h2 className="text-custom1 font-medium text-[18px] font-poppins">
                      Jane Cooper
                    </h2>
                    <p className="text-custom3 font-poppins text-sm">Worker</p>
                  </div>
                </div>
              </div>
              {/* img3 */}
              <div className="flex flex-row gap-2 sm:mt-0 mt-4">
                <div className="sm:w-[312px] sm:h-[388px] w-1/2 h-1/2 rounded-lg bg-white  sm:ml-0 ">
                  <img src={a5} alt="" />
                  <div className="mt-4 ml-4">
                    <h2 className="text-custom1 font-medium text-[18px] font-poppins">
                      Cody Fisher
                    </h2>
                    <p className="text-custom3 font-poppins text-sm">
                      Security Guard
                    </p>
                  </div>
                </div>
                {/* img4 */}
                <div className="sm:w-[312px] sm:h-[388px] w-1/2 h-1/2 rounded-lg bg-white  sm:ml-0 ">
                  <img src={a6} alt="" />
                  <div className="mt-4 ml-4">
                    <h2 className="text-custom1 font-medium text-[18px] font-poppins">
                      Robert Fox
                    </h2>
                    <p className="text-custom3 font-poppins text-sm">
                      Senior Farmer Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <Testimonials />
    </div>
  );
}

export default Delivery;
