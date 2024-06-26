import { motion } from "framer-motion";
import bga from "../../assets/About/bga.png";
import a7 from "../../assets/About/a7.png";
import p1 from "../../assets/Product/p1.png";
//icons
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { GoStar } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

export default function e() {
  return (
    <div>
      <div>
        <div
          className="w-full h-[685px] bg-cover mt-10"
          style={{ backgroundImage: `url(${bga})` }}
        >
          <div className="container">
            <div className="flex flex-row">
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Initial animation state (hidden and off-screen to the left)
                animate={{ opacity: 2, x: 0 }} // Animation to show image (visible and centered)
                transition={{ duration: 0.5 }} // Animation duration
                className="mt-20 sm:flex hidden"
              >
                <img src={a7} alt="" className="" />
              </motion.div>

              <div>
                <h1 className="font-semibold text-[56px] font-poppins text-custom1 sm:mt-24">
                  100% Trusted <br />
                  Organic Food Store
                </h1>
                <p>
                  Pellentesque a ante vulputate leo porttitor luctus sed eget
                  eros. Nulla et
                  <br /> rhoncus neque. Duis non diam eget est luctus tincidunt
                  a a mi. Nulla eu <br />
                  eros consequat tortor tincidunt feugiat.{" "}
                </p>
                <div className="">
                  <div className="flex flex-col ">
                    <div className="flex flex-row  gap-4">
                      <div className="relative w-[72px] h-[72px] mt-4">
                        <div className="flex flex-row gap-4">
                          <img className="w-full h-full " src={p1} alt="" />
                          <LuLeaf
                            size={27}
                            className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="text-[18px] mt-4">100% organic food</h1>
                      </div>
                    </div>
                    {/* star*/}
                    <div className="relative w-[72px] h-[72px] mt-4">
                      <img className="w-full h-full " src={p1} alt="" />
                      <GoStar
                        size={27}
                        className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                      />
                    </div>
                    {/* truck */}
                    <div className="relative w-[72px] h-[72px] mt-4">
                      <img className="w-full h-full " src={p1} alt="" />
                      <CiDeliveryTruck
                        size={27}
                        className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* head phone1 */}
                  {/* <div className="relative w-[72px] h-[72px] mt-4">
                    <img className="w-full h-full " src={p1} alt="" />
                    <CiDeliveryTruck
                      size={27}
                      className="absolute bottom-6 right-5 text-primary transition-transform duration-300 transform group-hover:scale-110"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
