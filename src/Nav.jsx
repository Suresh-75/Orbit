import React from "react";
import logo from "./assets/Orbitlogoblack.jpg";
function Nav() {
  return (
    <nav className="flex justify-between relative items-center">
      <ul className="flex justify-between w-[40%] items-center  text-white">
        <img src={logo} className="h-25" />
        <li to={"/"} className="text-white hover:cursor-pointer ">
          <p class="text-lg  group relative w-max">
            <span>Home</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
          </p>
        </li>
        <li to={"/aboutus"} className="text-white hover:cursor-pointer ">
          <p class="text-lg  group relative w-max">
            <span>About Us</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
          </p>
        </li>
        <li to={"/aerostructures"} className="text-white hover:cursor-pointer ">
          <p class="text-lg  group relative w-max">
            <span>Aerostructures</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
          </p>
        </li>
        <li to={"/avionics"} className="text-white hover:cursor-pointer ">
          <p class="text-lg  group relative w-max">
            <span>Avionics</span>
            <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
          </p>
        </li>
      </ul>
      <button className="text-white p-2 px-5 border hover:cursor-pointer transition-all duration-300 hover:shadow-none  shadow-[5px_5px_rgba(255,255,255,0.8)]">
        Support us
      </button>
    </nav>
  );
}

export default Nav;
