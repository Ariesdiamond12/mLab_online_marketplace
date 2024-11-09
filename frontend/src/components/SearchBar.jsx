import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div className="border-t border-b text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <LuSearch className="w-4" />
      </div>
      <RxCross2
        onClick={() => setShowSearch(false)} // Changed to onClick
        className="inline cursor-pointer w-7 h-6"
      />
    </div>
  ) : null;
}

export default SearchBar;
