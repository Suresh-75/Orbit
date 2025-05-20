import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/OrbitlogoblackR.png";
function Nav({ scrollIntoView }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who are we", path: "/aboutus" },
    { name: "Aerostructures", path: "/aerostructures" },
    { name: "Avionics", path: "/avionics" },
    { name: "Sponsors", path: "/sponsors" },
  ];

  return (
    <nav className="relative z-50 px-20 max-lg:px-5">
      <div className="flex justify-between items-center pt-4 px-6 lg:px-12">
        <div className="z-50">
          <img src={logo} alt="Orbit Logo" className="h-16 lg:h-20 pt-2" />
        </div>
        <ul className="hidden lg:flex justify-evenly w-2/3 items-center text-white">
          {navItems.map((item, index) => (
            <li
              onClick={() => {
                scrollIntoView(item.name);
              }}
              key={index}
              className="text-white hover:cursor-pointer"
            >
              <p className="text-xl group relative w-max">
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </li>
          ))}
        </ul>
        <button className=" max-lg:hidden text-white  text-xl  p-2 px-5 border hover:cursor-pointer transition-all duration-300 hover:shadow-none  shadow-[5px_5px_rgba(255,255,255,0.8)]">
          Support us
        </button>
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center lg:hidden z-40">
          <ul className="flex flex-col items-center space-y-8 text-white">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-white hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-2xl group relative w-max">
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
                </p>
              </li>
            ))}
            <li className="pt-6">
              <button className="  text-white  text-xl  p-2 px-5 border hover:cursor-pointer transition-all duration-300 hover:shadow-none  shadow-[5px_5px_rgba(255,255,255,0.8)]">
                Support us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
