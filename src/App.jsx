import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import Home from "./componenets/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
