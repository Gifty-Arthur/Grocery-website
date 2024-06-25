import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";

//images
import bg2 from "../../assets/Hero/bg2.png";

//icons
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

function SignIn() {
  return (
    <div>
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
            <p className=" text-md hover:text-primary">Account</p>
            <IoIosArrowForward className="mt-1" />
            <p className=" text-md hover:text-primary">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
