import React from "react";
import Nav from "./Nav";
import Particles from "./components/Particles";
import rocket from "./assets/rc.avif";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router";
function App() {
  const navigate = useNavigate();
  return (
    <div className="text-white h-[100vh] w-[100vw] bg-black px-15 font-mono">
      <Particles />
      <Nav />
      <div className="relative grid grid-cols-2">
        <div className="h-[80vh] pt-30">
          <h2 className="text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur{" "}
          </h2>
          <h3 className="text-3xl text-gray-300 mt-5 leading-10 ">
            Lorem ipsum dolor sit amet, Quasi nisi libero corrupti tenetur
            accusantium, dolore temporibus, officia amet quos officiis <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nisi
            libero
          </h3>
          <button
            onClick={() => navigate("/aboutus")}
            className="text-white mt-7 p-2 px-5 font-bold text-2xl border hover:cursor-pointer transition-all duration-300 hover:shadow-none shadow-[5px_5px_rgba(255,255,255,0.8)]"
          >
            Learn more
          </button>
        </div>
        <div className="h-[80vh] relative overflow-hidden flex flex-row justify-center items-center">
          <img
            src={rocket}
            className="scale-150 opacity-70 rotate-90 border "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
