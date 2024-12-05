import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.cost.replace("$", "")) * item.quantity;
    });
    return total;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.replace("$", ""));
    return item.quantity * cost;
  };

  return (
    <div className="flex flex-col gap-2 bg-white bg-opacity-80 items-center rounded-lg">
      <h2 className="text-gray-800 mt-5 text-2xl">
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div className="w-full">
        {cart.map((item) => (
          <div
            className="flex max-w-2xl flex-col md:flex-row border-b bg-white w-3/4 space-y-4 items-center mx-auto first:rounded-t-lg last:rounded-b-lg pt-3 pb-4"
            key={item.name}
          >
            <img
              className="flex h-52 w-52 rounded-r-md"
              src={item.image}
              alt={item.name}
            />
            <div className="justify-items-center mx-auto space-y-3">
              <div className="text-xl font-semibold">{item.name}</div>
              <div className="text-bold">{item.cost}</div>
              <div className="flex flex-row space-x-5 items-center">
                <button
                  className="bg-gray-200 border border-gray-300 shadow-lg h-8 w-8 rounded-md text-sm hover:bg-gray-300"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="bg-gray-200 border border-gray-300 shadow-lg h-8 w-8 rounded-md text-sm hover:bg-gray-300"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className=" bg-red-500 rounded-md px-5 py-2 text-white hover:bg-red-600 shadow-lg transition-300"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-gray-950"></div>
      <div className="flex flex-col justify-center w-1/2 md:w-1/4  pb-7">
        <button
          className="bg-yellow-500 rounded-md px-5 py-2 text-gray-950 hover:bg-yellow-600 shadow-lg transition-300"
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <br />
        <button
          className=" bg-green-500 rounded-md px-5 py-2 text-white hover:bg-green-600 shadow-lg transition-300"
          onClick={(e) => handleCheckoutShopping(e)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
