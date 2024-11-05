import React from "react";
import Cerave from "../assets/images/face.jpg";
import Neutrogena from "../assets/images/Neutrogena.jpg";

function Offers() {
  return (
    <div className="offers-container flex flex-col sm:flex-row gap-6 py-8 px-4">
      {/* First Column */}
      <div className="offer-card relative flex-1 min-w-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img src={Cerave} alt="Offer 1" className="w-full h-60 object-cover " />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <p className="text-white text-lg sm:text-2xl font-medium text-center px-4">
            Shop Our Trending SkinCare Products
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="offer-card relative flex-1 min-w-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          src={Neutrogena}
          alt="Offer 2"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <p className="text-white text-lg sm:text-2xl font-medium text-center px-4">
            Up to 25% OFF on all the selected trending Products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
