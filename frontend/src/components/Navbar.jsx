import React, { useState, useContext } from "react";
import Logo from "../assets/images/Logo.png";
import { LuSearch, LuShoppingBag } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const {setShowSearch} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={Logo} className="w-48" alt="Logo" />
      </Link>

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

      <div className="flex items-center gap-8 cursor-pointer">
        <LuSearch className="w-7 h-6" onClick={() =>setShowSearch(true)} />

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

        <IoMenuOutline
          className="w-7 h-7 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
        {/* Sidebar Menu for small screens */}
        <div
          className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <IoIosArrowDropdown className="h-4 rotate-180" />
              <p>Back</p>
            </div>
            <NavLink className="py-2 pl-6 border" to="/">
              Home
            </NavLink>
            <NavLink className="py-2 pl-6 border" to="/shop">
              Shop
            </NavLink>
            <NavLink className="py-2 pl-6 border" to="/about">
              About
            </NavLink>
            <NavLink className="py-2 pl-6 border" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
