import { Link } from "react-router-dom";
import { PiPhoneCallBold } from "react-icons/pi";

function SubNav() {
  return (
    <div className="fixed w-full bg-white shadow-sm ">
      <div className="max-w-7xl ">
        <div className="flex justify-between items-center py-4">
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition-all"
            >
              Home
            </Link>
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition-all"
            >
              Shop
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition-all"
            >
              Blog
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition-all"
            >
              About Us
            </Link>
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
        </div>
      </div>
    </div>
  );
}

export default SubNav;
