import { Link } from "react-router-dom";

//img
import Group from "../../assets/Hero/Group.png";

//icons
import { IoIosHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

function MainNav() {
  return (
    <div className="">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link>
            <div className="flex items-center gap-2">
              <img src={Group} alt="Group" />
              <h1 className="font-poppins text-4xl">FARMYARD</h1>
            </div>
          </Link>
          <form className="max-w-md w-full mx-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 h-[45px] text-md text-black border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-0 bg-primary w-[98px] h-[45px] rounded-r-md font-semibold text-white"
              >
                Search
              </button>
            </div>
          </form>

          {/* icons */}
          <Link>
            <div className="flex items-center gap-4">
              <IoIosHeartEmpty size={27} className="" />
              {/* handbag */}
              <div className="flex flex-wrap gap-2">
                <SlHandbag size={27} className="text-2xl" />
              </div>
              <div className="flex flex-col mt-1">
                <p className="text-[#4D4D4D] text-sm"> Shopping cart:</p>
                <p className="text-custom1 font-bold font-poppinstext-sm">
                  $57.00
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
