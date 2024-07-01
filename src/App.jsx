import { Route, Routes } from "react-router-dom";

import "./App.css";
// import Navbar from "./componenets/Navbar/Navbar";
import Home from "./componenets/Home/Home";
import NavFoot from "./componenets/Layout/NavFoot";
import { urls } from "./componenets/Helpers/routes";
import SignIn from "./componenets/Home/SignIn";
import SignUp from "./componenets/User/SignUp";
import About from "./componenets/About/About";
import Shop from "./componenets/Shop/Shop";
import Blog from "./componenets/Blog/Blog";
import Contacts from "./componenets/Contact/Contacts";
import CartBag from "./componenets/Cart/CartBag";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<NavFoot />}>
            <Route path="/" element={<Home />} />

            <Route path={urls.signIn} element={<SignIn />} />

            <Route path={urls.signUp} element={<SignUp />} />
            <Route path={urls.about} element={<About />} />
            <Route path={urls.shop} element={<Shop />} />
            <Route path={urls.blog} element={<Blog />} />
            <Route path={urls.contacts} element={<Contacts />} />
            <Route path={urls.cartbag} element={<CartBag />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
