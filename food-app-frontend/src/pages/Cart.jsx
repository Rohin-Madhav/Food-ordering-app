import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded"
              >
                <h3 className="font-semibold">
                  {item.name}{" "}
                  <span className="text-sm text-gray-600">
                    (x{item.quantity})
                  </span>
                </h3>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 cursor-pointer py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="cursor-pointer w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
