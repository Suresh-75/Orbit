import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import Donations from "./Donations.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import Aerostructures from "./Aerostructures.jsx";
import Avionics from "./Avionics.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/donations" element={<Donations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aerostructures" element={<Aerostructures />} />
        <Route path="/avionics" element={<Avionics />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
