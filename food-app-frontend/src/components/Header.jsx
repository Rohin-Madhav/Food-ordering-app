import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4">
      <Link to={"/"} className="text-2xl font-bold text-white">
        Food Ordering App
      </Link>
      <nav className="flex space-x-6 ">
        <Link to={"/"} className="text-white hover:text-yellow-400 transition ">
          Home
        </Link>
        <Link
          to={"menu"}
          className="text-white hover:text-yellow-400 transition"
        >
          Menu
        </Link>
        <Link
          to={"/login"}
          className="text-white hover:text-yellow-400 transition"
        >
          Login
        </Link>
        <Link
          to={"cart"}
          className="text-white hover:text-yellow-400 transition"
        >
          Cart ({cartItems.length})
        </Link>
      </nav>
    </div>
  );
}

export default Header;
