import { Link } from "react-router-dom";

//img
import Group from "../../assets/Hero/Group.png";

function MainNav() {
  return (
    <div className="">
      <div className="container">
        <div className="">
          <Link>
            <div className="flex flex-erap gap-2 mt-8">
              <img src={Group} alt="" />
              <h1 className="font-poppins text-4xl">FARMYARD</h1>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="-mt-10">
          {/* Search button */}
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                className="block w-full p-4 ps-10 h-[45px] text-md text-black border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              />
              <button
                type="submit"
                className="absolute end-0 bottom-0 bg-primary w-[98px] h-[45px] rounded-r-md font-semibold text-white "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
