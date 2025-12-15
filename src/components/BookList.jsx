import React from "react";

function BookList({ book }) {
  return (
    
    <section className="m-5 rounded-xl border bg-white shadow-md">
      <img
        className="h-70 w-80 rounded-xl"
        src={book.imageUrl}
        alt={book.title}
      />
      <div className="mx-5 my-3">
        <h1 className="font-bold text-gray-500">
          {book.title}
        </h1>
        <h1 className="font-bold text-gray-500">
          {book.author}
        </h1>
        <h2 className="font-bold text-gray-800">
          {book.genre}
        </h2>
        <button className="font-bold text-blue-600 hover:underline">
          View Details
        </button>
      </div>
    </section>
  );
}

export default BookList;
