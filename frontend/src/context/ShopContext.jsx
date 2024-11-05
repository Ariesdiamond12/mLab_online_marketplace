import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "R";
  const delivery_fee = 10; // Keeping it a number, not a string for calculations

  const [cartItems, setCartItems] = useState({}); // Initialize cart items

  // Define getCartAmount to calculate subtotal
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = cartItems[itemId];
      const product = products.find((product) => product._id === itemId); // Match cart item to product
      if (product) {
        totalAmount += item.quantity * product.price; // Assuming `price` is in product data
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    setCartItems,
    getCartAmount,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
