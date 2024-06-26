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
            <Link>
              <div className="flex flex-row gap-2 hover:text-primary">
                <p className="text-md">Account</p>
                <IoIosArrowForward className="mt-1" />
              </div>
            </Link>
            <Link to={urls.signUp}>
              <p className="text-md hover:text-primary">Create Account</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Sign back */}
      <div className="container mt-20 px-4 md:px-0">
        <div className="flex items-center justify-center">
          <div>
            <div className="w-full md:w-[520px] h-auto md:h-[432px] shadow-2xl border bg-white rounded-md p-4 md:p-8">
              <h2 className="text-2xl md:text-4xl font-bold font-poppins dark:text-custom1 text-center">
                Create Account
              </h2>
              <form className="mt-8 space-y-4" action="#">
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className="w-full md:w-[427px]">
                    <label
                      htmlFor="email"
                      className="block  text-sm font-medium"
                    ></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border text-sm rounded-md block w-full p-2.5 dark:bg-white"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-[427px]">
                    <label
                      htmlFor="password"
                      className="block  text-sm font-medium text-gray-900 dark:text-white "
                    ></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="border text-sm rounded-md block w-full p-2.5 dark:bg-white"
                      required
                    />
                    <label
                      htmlFor="password"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    ></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Confirm Password"
                      className="border text-sm rounded-md block w-full p-2.5 dark:bg-white mt-4"
                      required
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between mt-2">
                      <div className="flex items-center">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          name="remember"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="remember"
                          className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Accept all terms & Conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <Link to={urls.signIn}>
                    <button
                      type="submit"
                      className="w-[200px] md:w-[427px] h-[40px] mt-2  font-medium text-sm text-center text-white bg-primary rounded-full hover:bg-tertiary"
                    >
                      Create Account
                    </button>
                  </Link>
                  <div className="text-sm font-medium text-gray-900 dark:text-custom1">
                    Already hava account?
                    <Link to={urls.signIn}>
                      <span className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">
                        Login
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
