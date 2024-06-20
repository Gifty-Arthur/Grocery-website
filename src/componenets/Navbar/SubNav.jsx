import { Link } from "react-router-dom";
import { useState } from "react";

//icons
import { PiPhoneCallBold } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

function SubNav() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full bg-[#f2f2f2] shadow-sm ">
      <div className="max-w-7xl ">
        <div className="flex justify-between items-center py-4">
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 ">
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
              (219) 555-0114
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
        </div>
      </div>
    </div>
  );
}

export default SubNav;
