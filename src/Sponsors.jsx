import React from "react";
import sp1 from "./assets/sp1.png";
import sp2 from "./assets/sp2.png";
function Sponsors() {
  return (
    <div className=" flex justify-center h-[25vh] my-25 max-lg:my-10 flex-col">
      <h2 className="text-center text-6xl  font-bold bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent  max-lg:text-4xl max-lg:mb-5">
        SPONSORS
      </h2>
      <div className=" flex justify-center items-center">
        <img src={sp1} alt="sp1" className="h-10 mr-10 " />
        <img src={sp2} alt="sp2" className="h-40 ml-10 " />
      </div>
    </div>
  );
}
export default Sponsors;
