import { Link } from "react-router-dom";

//img
import Group from "../../assets/Hero/Group.png";

function MainNav() {
  return (
    <div>
      <div className="container">
        <div className="mt-8">
          <Link>
            <div className="flex flex-erap gap-2">
              <img src={Group} alt="" />
              <h1 className="font-poppins text-4xl">FARMYARD</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
