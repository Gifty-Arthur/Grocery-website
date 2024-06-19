import { Route, Routes } from "react-router-dom";
import NavFootLayout from "./componenets/Layout/NavFoot";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFootLayout />} />
      </Routes>
    </div>
  );
}

export default App;
