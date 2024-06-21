import { Outlet } from "react-router";
// import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

function NavFoot() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default NavFoot;
