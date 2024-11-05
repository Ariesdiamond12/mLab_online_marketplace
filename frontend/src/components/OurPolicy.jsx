import React from "react";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <BsTruck className="text-6xl m-auto mb-2" /> {/* Adjusted icon size and margin */}
        <p className="font-semibold">Free Shipping</p>
        <p className="text-gray-400">Free Shipping on orders above R500</p>
      </div>
      <div>
        <BsBoxSeam className="text-6xl m-auto mb-2" /> {/* Adjusted icon size and margin */}
        <p className="font-semibold">30 Days Return Policy</p>
        <p className="text-gray-400">We provide 30 days free return policy</p>
      </div>
      <div>
        <IoCardOutline className="text-6xl m-auto mb-2" /> {/* Adjusted icon size and margin */}
        <p className="font-semibold">Flexible Payment</p>
        <p className="text-gray-400">We provide flexible payment options</p>
      </div>
    </div>
  );
};

export default OurPolicy;
