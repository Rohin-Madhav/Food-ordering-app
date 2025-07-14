import React from "react";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-black-600 mb-4">
        404 - Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The page you are looking for does not exist 🙈
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;
