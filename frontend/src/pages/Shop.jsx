import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Shop() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] =  useState([])

  

  useEffect(() =>{
    setFilterProducts(products)
  },[])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Left Side: Filter Options */}
        <div className="min-w-60">
          <p
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filters
            <RiArrowDropDownLine
              className={`h-3 sm:hidden ${showFilter ? "rotate-180" : ""}`}
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 w-44 ${
              showFilter ? " " : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">Categories</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Exfoliator"} />{" "}
                Exfoliators
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Serum"} /> Serum
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Moisturizer"} />{" "}
                Moisturizer
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Toner"} /> Toner
              </p>
            </div>
          </div>
          {/* SubCategory Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 w-44 ${
              showFilter ? " " : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">Type</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Normal"} />{" "}
                Normal or Sensitive
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Combination"} />{" "}
                Combination
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Dry"} /> Dry
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Oily"} /> Oily
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Product List */}
        <div className="flex-1">
          <div className="flex justify-between items-center ">
            <p className="font-normal text-lg">Product List</p>
            {/* Product Sort */}
            <select className="border-2 border-gray-300 text-sm px-2 rounded-lg h-10 w-40">
              <option value="brand">Sort by: Brand</option>
              <option value="stock">Sort by: Stock</option>
              <option value="price">Sort by: Price</option>
            </select>
          </div>

          {/* Product items would go here/mapping products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
            {
              filterProducts.map((item,index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price}  image={item.image} />

              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
