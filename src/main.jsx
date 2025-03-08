import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import Donations from "./Donations.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </Router>
  </StrictMode>
);
