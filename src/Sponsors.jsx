import React from "react";
import sp1 from "./assets/sp1.png";
import sp3 from "./assets/sponsor3.webp";
import sp2 from "./assets/sp2.png";
function Sponsors() {
  return (
    <div className=" flex justify-center h-[25vh] my-25 max-lg:mt-10 max-lg:mb-4 flex-col">
      <h2 className="text-center text-6xl  font-bold bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent  max-lg:text-4xl max-lg:mb-5">
        SPONSORS
      </h2>
      <div className=" flex justify-center items-center">
        <a target="_blank" href="https://www.simscale.com/">
          <img
            src={sp1}
            alt="sp1"
            className="h-10 mr-10  max-lg:h-6 max-lg:mr-5"
          />
        </a>

        <a target="_blank" href="https://www.solidworks.com/">
          {" "}
          <img
            src={sp2}
            alt="sp2"
            className="h-40 ml-10 max-lg:h-25 max-lg:m-0"
          />
        </a>
        <a target="_blank" href="https://www.solidworks.com/">
          {" "}
          <img
            src={sp3}
            alt="sp3"
            className="h-30 ml-10 max-lg:h-25 max-lg:m-0"
          />
        </a>
      </div>
    </div>
  );
}
export default Sponsors;
