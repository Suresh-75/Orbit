import React, { useEffect } from "react";
import Nav from "./Nav";
import ContactUs from "./ContactUs";
import Particles from "./components/Particles";
import earth from "./assets/Earth.jpg";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import moveIcon from "./assets/move.png";
import { motion } from "framer-motion";
import TypewriterEffect from "./components/TypingEffect";
import Aerostructures from "./Aerostructures";
import Avionics from "./Avionics";
import Sponsors from "./Sponsors";
function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
      document.body.style.width = "";
    };
  }, []);
  const scrollIntoView = (secID) => {
    const element = document.getElementById(secID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="text-white min-h-screen font-mono overflow-x-hidden max-w-full">
      <Particles />
      <div className="relative w-full overflow-x-hidden ">
        <Nav scrollIntoView={scrollIntoView} />
        <img
          src={earth}
          alt="Rocket"
          className="absolute top-0 left-0 w-full h-screen object-cover opacity-60 z-0 object-top animate-pulse"
        />
        <div className="relative max-w-full overflow-hidden ">
          <div className="flex pt-20 justify-center items-center flex-col min-h-[80vh] max-lg:h-[40vh] px-20 max-lg:px-5 pb-12 max-lg:pb-5">
            <div className="flex flex-row justify-center items-center">
              <h1 className="text-7xl font-bold leading-tight">
                <TypewriterEffect
                  speed={150}
                  eraseSpeed={50}
                  eraseDelay={2000}
                  typingDelay={1000}
                  cursorClassName="h-8 w-1 ml-1 bg-blue-600"
                />
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-24">
            <div className="animate-pulse">
              <img src={moveIcon} alt="Scroll down" className="h-12 md:h-16" />
            </div>
          </div>
          <div className="bg-[rgba(10,14,25,0.6)] pt-5">
            <div id="About Us">
              <AboutUs />
            </div>
            <div id="Aerostructures">
              <Aerostructures />
            </div>
            <div id="Avionics">
              <Avionics />
            </div>
            <div id="Sponsors">
              <Sponsors />
            </div>
            <div>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
