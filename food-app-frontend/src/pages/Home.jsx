import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    navigate("menu");
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-gradient-to-br from-orange-700 via-white to-orange-700 rounded-3xl shadow-2xl text-center border border-red-900">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="bg-red-900 text-white px-4 py-1 rounded-full text-sm font-semibold animate-bounce shadow-md">
          50% OFF
        </span>
        <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
          Buy 2 Get 1 Free!
        </span>
      </div>
      <h1 className="text-4xl font-extrabold text-red-700 mb-6 drop-shadow-lg">
        Delicious Food Delivered To You!!
      </h1>
      <p className="text-lg text-gray-800 mb-4 font-medium">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="text-md text-gray-600 mb-6">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
      <button
        onClick={navigateToMenu}
        className="bg-red-900 cursor-pointer hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 ease-in-out text-lg"
      >
        Order Now
      </button>
    </div>
  );
}

export default Home;
