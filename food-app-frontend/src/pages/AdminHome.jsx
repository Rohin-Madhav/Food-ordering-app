import React, { useState } from "react";

function AdminHome() {
  const [foods, setFoods] = useState([]);
  const [form, setForm] = useState({
    name: "",
    recipe: "",
    image: null,
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log("name", name);
    console.log("value", value);
    console.log("files", files);

    if (name === "image" && files.length) {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.recipe || !form.image) return;
    console.log(!form.name || !form.recipe || !form.image);

    // Prepare FormData
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("recipe", form.recipe);
    formData.append("image", form.image);

    // Send to backend (replace with your endpoint)
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
    } catch (err) {
      alert("Upload failed");
    }

    // For local display, show preview
    const reader = new FileReader();
    reader.onload = (ev) => {
      const newFood = {
        name: form.name,
        recipe: form.recipe,
        image: ev.target.result,
      };
      if (editIndex !== null) {
        const updated = [...foods];
        updated[editIndex] = newFood;
        setFoods(updated);
        setEditIndex(null);
      } else {
        setFoods([...foods, newFood]);
      }
      setForm({ name: "", recipe: "", image: null });
    };
    reader.readAsDataURL(form.image);
  };

  const handleEdit = (idx) => {
    setForm({
      name: foods[idx].name,
      recipe: foods[idx].recipe || "",
      image: null,
    });
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    setFoods(foods.filter((_, i) => i !== idx));
    if (editIndex === idx) {
      setForm({ name: "", recipe: "", image: null });
      setEditIndex(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Food CRUD Admin
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full md:w-1/4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          name="recipe"
          placeholder="Recipe/Description"
          value={form.recipe}
          onChange={handleChange}
          required
          className="input input-bordered w-full md:w-1/3 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          className="file-input file-input-bordered w-full md:w-1/4"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>
      <div>
        {foods.length === 0 && (
          <p className="text-gray-500 text-center">No food items yet.</p>
        )}
        <ul className="space-y-6">
          {foods.map((food, idx) => (
            <li
              key={idx}
              className="flex items-center bg-gray-50 rounded-lg shadow p-4"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-20 h-20 object-cover rounded mr-4 border border-gray-200"
              />
              <div className="flex-1">
                <div className="font-bold text-lg text-indigo-700">
                  {food.name}
                </div>
                <div className="text-gray-600">{food.recipe}</div>
              </div>
              <div className="flex flex-col gap-2 ml-4">
                <button
                  onClick={() => handleEdit(idx)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminHome;
