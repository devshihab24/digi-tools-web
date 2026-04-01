import React from "react";
import { toast } from "react-toastify";

const Carts = ({ cartItem, setCartItem, setPriceCount, priceCount }) => {
  const removeItemFromCart = (item) => {
    const filteredCart = cartItem.filter((product) => item.id !== product.id);
    setCartItem(filteredCart);
    setPriceCount(priceCount - parseInt(item.price));
    toast.success("Item removed from cart successfully!")
  };
  const placeOrder = ()=>{
    setCartItem([])
    setPriceCount(0)
    if(cartItem.length !==0) toast.success("Your order has been placed successfully!")
  }
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-600">Your Cart</h2>
      <div className="space-y-5">
        {cartItem.length ? (
          cartItem.map((item) => (
            <div
              className="flex justify-between items-center bg-slate-100 py-3 px-5 rounded-lg"
              key={item.id}
            >
              <div className="flex justify-start items-center gap-5">
                <img
                  className="bg-white rounded-full p-2 "
                  src={item.icon}
                  alt=""
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold line-clamp-1">{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeItemFromCart(item)}
                className="btn btn-ghost btn-error hover:text-white"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-4xl text-gray-500 py-10 text-center">No Item Added Yet</h2>
        )}
      </div>
      <div className="flex justify-between items-center bg-red-100 p-5 rounded-lg">
        <p>Total</p>
        <span className="text-2xl font-bold text-gray-600">${priceCount}</span>
      </div>
      <button onClick={placeOrder} className="common-btn w-full">Proceed to Checkout</button>
    </div>
  );
};

export default Carts;
