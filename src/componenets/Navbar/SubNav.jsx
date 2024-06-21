import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../Layout/Button";

//icons
import { PiPhoneCallBold } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

function SubNav() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className=" fixed left-0 w-full bg-[#f2f2f2] z-20 shadow-md">
      <div className="  ">
        <div className="flex justify-between items-center py-4 container">
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 ">
            {/* All categories */}
            <div className="relative group">
              <div className=" flex items-center gap-1 bg-primary w-[218px] h-[56px] justify-center">
                <FaBars size={24} className="text-white" />
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" transition-all cursor-pointer text-white"
                >
                  All Categories
                </Link>

                <BiChevronDown
                  className="cursor-pointer text-white"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Fresh Fruit
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Minerals
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-primary transition-all cursor-pointer"
                >
                  Home
                </Link>

                <BiChevronDown
                  className="cursor-pointer text-primary"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Latest
                  </Link>
                </li>
              </ul>
            </div>

            {/* shop */}
            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-primary transition-all cursor-pointer"
                >
                  Shop
                </Link>

                <BiChevronDown
                  className="cursor-pointer text-primary"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* blog */}
            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-primary transition-all cursor-pointer"
                >
                  Blog
                </Link>

                <BiChevronDown
                  className="cursor-pointer text-primary"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Fresh Fruit
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    Comments
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    New Items
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>

            {/* Abouts */}

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-primary transition-all cursor-pointer"
                >
                  About Us
                </Link>

                <BiChevronDown
                  className="cursor-pointer text-primary"
                  size={25}
                />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    OurTeam
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-primary transition-all cursor-pointer"
                  >
                    OrganicFood
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition-all"
            >
              Contact Us
            </Link>
          </nav>
          {/* Contact */}
          <div className="flex flex-row items-center gap-2 md:ml-auto cursor-pointer hover:text-primary transition-all">
            <PiPhoneCallBold className="text-lg" />
            <p className="text-custom1 font-medium text-sm cursor-pointer hover:text-primary transition-all">
              (233) 24-837-73574
            </p>
          </div>

          {/* menu */}
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuFold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Shop
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            About Us
          </Link>

          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Contact Us
          </Link>

          {/* mobile login and signUp */}
          <div className="flex flex-row items-center justify-center gap-4">
            <Link>
              <Button title="Sign Up" />
            </Link>

            <Link>
              <Button title="Login" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNav;
