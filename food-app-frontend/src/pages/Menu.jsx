import { useEffect, useState } from "react";
import apiUrl from "../api/apiUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Menu() {
  const [foodItems, setFoodItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/api/food")
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch((err) => console.error("Error fetching food items:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-gray-50 min-h-screen">
      {foodItems?.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow  overflow-hidden flex flex-col items-center border border-gray-200"
        >
          <div className="w-full h-48 overflow-hidden relative">
            <img
              src={`http://localhost:3000${item.image}`}
              alt={item.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow">
              ${item.price}
            </span>
          </div>
          <div className="p-5 flex flex-col flex-1 w-full">
            <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4 text-center">
              {item.recipe.slice(0, 12)}...
            </p>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="mt-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
