import React from "react";

function AddBook() {
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
      <form className="bg-white p-6 rounded-xl w-96">
        
        <h1 className="text-2xl font-bold m-4 text-center">Add New Book</h1>

        <input name="title" placeholder="Title" className="w-full p-2 border rounded mb-2"/>

        <input name="author" placeholder="Author" className="w-full p-2 border rounded mb-2"/>

        <input name="category" placeholder="Category" className="w-full p-2 border rounded mb-2"/>

        <input name="rating" placeholder="Rating" className="w-full p-2 border rounded mb-2" />

        <input name="imageUrl" placeholder="Image URL" className="w-full p-2 border rounded mb-2" />

        <textarea name="description" placeholder="Description" className="w-full p-2 border rounded mb-3" />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;
