import React from "react";
import Products from "../assets/images/Products.jpeg";

const Footer = () => {
  return (
    <div className="bg-[#e0ccbe] py-10 px-6">
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_2fr] gap-10 my-10 text-sm">
        <div className="flex flex-col gap-6 mt-10">
          <p className="text-2xl font-medium mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="text-lg">Home</li>
            <li className="text-lg">About</li>
            <li className="text-lg">Delivery</li>
            <li className="text-lg">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <p className="text-2xl font-medium mb-4">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="text-lg">012 555 0132</li>
            <li className="text-lg">support@serenity.co.za</li>
          </ul>
        </div>

        <div className="flex justify-end items-center">
          <img src={Products} className="size-5/6 rounded-xl " alt="Products" />
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className="py-5 text-center text-gray-700 text-sm">
          Copyright 2024 © Serenity - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
