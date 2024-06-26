import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";
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
                <CiLocationOn className="mt-2" />
                <p className="text-sm mt-2 ">Accra, East Legon Boundary Road</p>
              </div>
              {/* sign up */}
              <div className="flex mt-2 ">
                <Link to={urls.signIn}>
                  <p className="text-gray-300 hover:text-primary ">Sign In /</p>
                </Link>
                {/* Sign In */}
                <Link to={urls.signUp}>
                  <p className="text-gray-300 ml-1 hover:text-primary">
                    Sign Up{" "}
                  </p>
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
