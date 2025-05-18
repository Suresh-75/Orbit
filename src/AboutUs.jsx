import React from "react";
function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-start px-20 max-sm:px-10">
      <h2 className="text-center text-6xl font-bold mb-10 max-lg:text-4xl max-lg:mb-5">
        ABOUT US
      </h2>
      <h3 className="  text-5xl mb-5 bg-gradient-to-r from-blue-300 to-gray-500 bg-clip-text text-transparent max-lg:text-3xl max-lg:mb-2">
        Who are we?
      </h3>
      <p className="text-3xl max-sm:text-xl  max-sm:mx-0 max-sm:m-0 max-sm:p-0  text-center mx-10 mt-5  max-lg:text-xl ">
        We are a team of 40, the official student rocketry team of NIT Trichy,
        one of India’s top engineering institutes. We are a team of
        undergraduate innovators building high-powered rockets for international
        competitions like the Spaceport America Cup — the world’s largest
        student rocketry event.
      </p>
    </div>
  );
}

export default AboutUs;
