import { Link } from "react-router-dom";

//icons
import { CiLocationOn } from "react-icons/ci";
import MainNav from "./MainNav";

function Navbar() {
  return (
    <div className="">
      <div className="">
        <div className="bg-gray-800 w-full h-[42px] sm:flex hidden">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="text-gray-300 flex flex-wrap gap-2">
                <CiLocationOn className="" />
                <p className="text-sm ">Accra, East Legon Boundary Road</p>
              </div>
              {/* sign up */}
              <div className="flex">
                <Link>
                  <p className="text-gray-300">Sign In /</p>
                </Link>
                {/* Sign In */}
                <Link>
                  <p className="text-gray-300 ml-1">Sign Up </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navbar */}
        <MainNav />
      </div>
    </div>
  );
}

export default Navbar;
