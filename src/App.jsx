import { Route, Routes } from "react-router-dom";

import "./App.css";
// import Navbar from "./componenets/Navbar/Navbar";
import Home from "./componenets/Home/Home";
import NavFoot from "./componenets/Layout/NavFoot";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<NavFoot />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
