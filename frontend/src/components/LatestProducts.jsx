import React, { useContext, useEffect, useState } from "react";
import Shop from "../pages/Shop";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

function LatestProducts() {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 3));
  }, []);

  return (
    <div className="my-10">
      {/* <div className="text-center py-8 text-3xl">
        <Title text1={'Our'} text2={'Featured'} text3={'Products'}/>
    </div> */}

      {/* Rendering Products */}
      <div className="flex justify-center mt-8">
        <div className="flex flex-wrap gap-4 justify-center max-w-screen-lg">
          {LatestProducts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mt-28"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
