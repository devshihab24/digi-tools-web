import { useState } from "react";
import Products from "./Products/Products";
import Carts from "./Carts/Carts";

const DigitalTools = ({
  allProducts,
  cartItem,
  setCartItem,
  setPriceCount,
  priceCount,
}) => {
  const [activeBtn, setActiveBtn] = useState("products");
  console.log(priceCount);
  return (
    <div className="w-[95%] md:w-[80%] mx-auto my-10">
      <div className="flex flex-col justify-center items-center text-center py-10 gap-3">
        <h2 className="text-3xl md:text-5xl font-black">
          Premium Digital Tools
        </h2>
        <p>
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 pb-10">
        <button
          onClick={() => setActiveBtn("products")}
          className={`${activeBtn == "products" ? "common-btn" : "inactive-btn"}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveBtn("cart")}
          className={`${activeBtn == "cart" ? "common-btn" : "inactive-btn"}`}
        >
          Cart ({cartItem.length})
        </button>
      </div>
      <div>
        {activeBtn == "products" && (
          <Products
            cartItem={cartItem}
            setCartItem={setCartItem}
            allProducts={allProducts}
            setPriceCount={setPriceCount}
            priceCount={priceCount}
          ></Products>
        )}
        {activeBtn == "cart" && (
          <Carts
            setCartItem={setCartItem}
            cartItem={cartItem}
            setPriceCount={setPriceCount}
            priceCount={priceCount}
          ></Carts>
        )}
      </div>
    </div>
  );
};

export default DigitalTools;
