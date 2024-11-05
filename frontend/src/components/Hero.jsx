import React from "react";
import Serene from "../assets/images/Serene.jpeg";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Serene})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-opacity-50">
          Beauty Inspired By Real
          <hr className="border-t-2 border-white my-2" />
          Life
        </h1>
      </div>

      {/* Space between Hero and "Our Featured Products" */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 mt-8 sm:mt-12 mx-auto">
        <div className="text-[#414141] text-center">
          <div className="flex items-center gap-2 justify-center mb-10">
            <p className="font-normal text-xl md:text-2xl lg:text-2xl items-center mb-10">
              Our Featured Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
