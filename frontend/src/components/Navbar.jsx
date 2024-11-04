import React from "react";
import Logo from "../assets/images/Logo.png";
import { LuSearch, LuShoppingBag } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo with Increased Size */}
      <img src={Logo} className="w-48" alt="Logo" />

      {/* Navigation Links with Larger Text */}
      <ul className="flex gap-8 text-base text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="font-poppins">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/shop" className="flex flex-col items-center gap-1">
          <p className="font-poppins">Shop</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="font-poppins">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="font-poppins">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-8">
        <LuSearch className="w-7 h-6" />

        <div className="relative group">
          <div className="cursor-pointer flex items-center">
            <FiUser className="w-7 h-6" />
          </div>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block group-hover:flex flex-col">
            <ul className="text-gray-700">
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
              <li>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/cart" className="relative">
  <LuShoppingBag className="w-7 h-7 cursor-pointer" />
  <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
    5
  </p>
</Link>

      </div>
    </div>
  );
}

export default Navbar;
