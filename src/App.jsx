import React from "react";
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
  return (
    <div className="text-white min-h-screen  font-mono overflow-x-hidden">
      <Particles />
      <div className="container mx-auto px-auto ">
        <Nav />
        <img
          src={earth}
          alt="Rocket"
          className=" absolute opacity-60 right-0 top-0  object-cover max-lg:scale-x-350 max-lg:scale-y-450 max-lg:top-100"
        />
        <div className="relative ">
          <div className="flex pt-20  justify-center items-center  flex-col min-h-[80vh]  max-lg:h-[40vh] pb-12 max-lg:pb-5 ">
            <div className="flex flex-row  justify-center items-center  ">
              <h1 className="text-7xl  font-bold leading-tight">
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
          <div className="flex items-center justify-center h-24 mb-8">
            <div className="animate-pulse">
              <img src={moveIcon} alt="Scroll down" className="h-12 md:h-16" />
            </div>
          </div>
          <AboutUs />
          <Aerostructures />
          <Avionics />
          <Sponsors />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
