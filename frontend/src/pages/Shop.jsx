import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";

function Shop() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('brand')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );

      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter((item) =>
          subCategory.includes(item.subCategory)
        );
      }
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case `low-high`:
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case `high-low`:
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, sortType)

  return (
    <div>
      <Navbar />
      <SearchBar/>
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
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Exfoliator"}
                  onChange={toggleCategory}
                />{" "}
                Exfoliators
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Serum"}
                  onChange={toggleCategory}
                />{" "}
                Serum
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Moisturizer"}
                  onChange={toggleCategory}
                />{" "}
                Moisturizer
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Toner"}
                  onChange={toggleCategory}
                />{" "}
                Toner
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
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Normal"}
                  onChange={toggleSubCategory}
                />{" "}
                Normal or Sensitive
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Combination"}
                  onChange={toggleSubCategory}
                />{" "}
                Combination
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Dry"}
                  onChange={toggleSubCategory}
                />{" "}
                Dry
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Oily"}
                  onChange={toggleSubCategory}
                />{" "}
                Oily
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Product List */}
        <div className="flex-1">
          <div className="flex justify-between items-center ">
            <p className="font-normal text-lg">Product List</p>
            {/* Product Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 rounded-lg h-10 w-40">
              <option value="brand">Sort by: Brand</option>
              <option value="stock">Sort by: Stock</option>
              <option value="price">Sort by: Price</option>
            </select>
          </div>

          {/* Product items would go here/mapping products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
