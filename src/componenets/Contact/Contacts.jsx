//icons
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";

//images

import bg2 from "../../assets/Hero/bg2.png";

import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";

function Contacts() {
  return (
    <div className="">
      <div
        className="w-full h-[120px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="container text-custom3 cursor-pointer ">
          <div className="flex flex-row gap-2 pt-12 ">
            <Link to={urls.home}>
              <div className="flex flex-row gap-2 hover:text-primary">
                <GoHome size={25} className="" />
                <IoIosArrowForward className="mt-1" />
              </div>
            </Link>
            <Link to={urls.about}>
              <div className="flex flex-row gap-2 hover:text-primary ">
                <p className="text-md">Contact</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <div className="sm:flex flex-row gap-4">
          <div className="sm:flex sm:flex-col ">
            <div className="w-[312px] h-[507px] shadow-lg flex justify-center sm:ml-0  ml-10">
              <div className=" flex flex-col">
                <div className="mt-6 ">
                  <div className="flex items-center justify-center">
                    <CiLocationOn size={51} className="text-primary  " />
                  </div>
                  <p className="text-center mt-2 font-poppins">
                    2715 Ash Dr. San Jose, South
                    <br /> Dakota 83475
                  </p>
                  <div className="w-[272px] h-[1px] bg-gray-300 mt-8"></div>
                </div>
                {/* mail */}
                <div className="mt-6 ">
                  <div className="flex items-center justify-center">
                    <CiMail size={51} className="text-primary  " />
                  </div>
                  <p className="text-center mt-2 font-poppins">
                    Proxy@gmail.com
                    <br /> Help.proxy@gmail.com
                  </p>
                  <div className="w-[272px] h-[1px] bg-gray-300 mt-8"></div>
                </div>
                {/* call */}
                <div className="mt-6 ">
                  <div className="flex items-center justify-center">
                    <PiPhoneCallLight size={51} className="text-primary  " />
                  </div>
                  <p className="text-center mt-2 font-poppins">
                    (219) 555-0114
                    <br /> (164) 333-0487
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* send message */}
          <div className="sm:w-[984px] sm:h-[507px] shadow-lg">
            <div>
              <div className="mt-6">
                <h1>Just Say Hello!</h1>
                <p>
                  Do you fancy saying hi to me or you want to get started with
                  your
                  <br /> project and you need my help? Feel free to contact me.
                </p>
                <div className="flex flex- gap-16">
                  <form className="max-w-sm ">
                    <label
                      htmlFor="phone-input"
                      className="block mb-2 text-sm font-medium  dark:text-white"
                    ></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                      <input
                        type="text"
                        id="phone-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[432px] p-2.5   dark:placeholder-gray-400 dark:text-blac  "
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Template Cookie"
                        required
                      />
                    </div>
                  </form>
                  <form className="max-w-sm ">
                    <label
                      htmlFor="phone-input"
                      className="block mb-2 text-sm font-medium  dark:text-white"
                    ></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                      <input
                        type="text"
                        id="phone-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[434px] p-2.5   dark:placeholder-gray-400 dark:text-blac  "
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="zakirsoft@gmail.com"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
