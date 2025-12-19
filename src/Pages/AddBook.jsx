import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";
import { v4 as uuidv4 } from "uuid";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    imageUrl: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addBook({ ...formData, id: uuidv4() }));

    navigate("/browsebooks");
  }

  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Book</h1>

        <input
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
          required
        />

        <input
          name="author"
          placeholder="Author"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
          required
        />

        <input
          name="rating"
          placeholder="Rating"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
          required
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded mb-3"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
