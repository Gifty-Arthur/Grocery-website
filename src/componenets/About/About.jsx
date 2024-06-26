import { Link } from "react-router-dom";
import { urls } from "../Helpers/routes";
import { motion } from "framer-motion";
import SubAbout from "./SubAbout";

//images
import bg2 from "../../assets/Hero/bg2.png";
import a1 from "../../assets/About/a1.png";

//icons
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

function About() {
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
            <Link to={urls.about}>
              <div className="flex flex-row gap-2 hover:text-primary">
                <p className="text-md">About</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* about */}
      <div>
        <div className="container pb-6">
          <div className="sm:flex flex-row gap-20 ">
            <div className=" flex flex-col  gap-8 sm:mt-24">
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Initial animation state (hidden and off-screen to the left)
                animate={{ opacity: 2, x: 0 }} // Animation to show image (visible and centered)
                transition={{ duration: 0.5 }} // Animation duration
                className="sm:mt-20 mt-10 flex sm:hidden"
              >
                <img src={a1} alt="" className="w-full" />{" "}
                {/* Ensure the image fills the width */}
              </motion.div>
              <h1 className="font-semibold text-[56px] font-poppins text-custom1 sm:mt-24">
                100% Trusted <br />
                Organic Food Store
              </h1>
              <p className="text-[#66666] font-poppins ">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
                <br />
                laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
                elit.
                <br /> Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. <br />
                Donec a eros non massa vulputate ornare. Vivamus ornare commodo
                ante,at commodo felis congue vitae.
              </p>
            </div>
            {/* img */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Initial animation state (hidden and off-screen to the left)
                animate={{ opacity: 2, x: 0 }} // Animation to show image (visible and centered)
                transition={{ duration: 0.5 }} // Animation duration
                className="mt-20 sm:flex hidden"
              >
                <img src={a1} alt="" className="w-full" />{" "}
                {/* Ensure the image fills the width */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <SubAbout />
    </div>
  );
}

export default About;
