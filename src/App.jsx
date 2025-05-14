import React from "react";
import Nav from "./Nav";
import ContactUs from "./ContactUs";
import Particles from "./components/Particles";
import rocket from "./assets/rc.avif";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import moveIcon from "./assets/move.png";
import { motion } from "framer-motion";

function App() {
  const navigate = useNavigate();
  return (
    <div className="text-white min-h-screen bg-black font-mono overflow-x-hidden">
      <Particles />
      <div className="container mx-auto px-2 lg:px-0">
        <Nav />
        <div className="relative">
          <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[70vh] pt-4 lg:pt-0 pb-12">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed max-w-xl max-md:text-lg max-md:px-10">
                Lorem ipsum dolor sit amet, Quasi nisi libero corrupti tenetur
                accusantium, dolore temporibus, officia amet quos officiis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                nisi libero
              </p>
              <button className="text-white mt-8 p-2 px-6 font-bold text-xl md:text-2xl border hover:cursor-pointer transition-all duration-300 hover:shadow-none shadow-lg">
                Learn more
              </button>
            </div>
            <div className="flex justify-center items-center order-1 lg:order-2 h-64 md:h-80 lg:h-auto overflow-hidden max-lg:hidden">
              <img
                src={rocket}
                alt="Rocket"
                className="scale-125 md:scale-150 opacity-70 rotate-90 object-contain max-h-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center h-24 mb-8">
            <div className="animate-pulse">
              <img src={moveIcon} alt="Scroll down" className="h-12 md:h-16" />
            </div>
          </div>
          <AboutUs />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
