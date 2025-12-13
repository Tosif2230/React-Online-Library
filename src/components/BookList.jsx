import React from "react";

function BookList() {
  return (
    <section className="m-5 rounded-xl border">
      <img
        className="h-70 w-60 rounded-xl"
        src="https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
        alt=""
      />
      <div className="mx-5">
        <h1 className="font-bold text-gray-500">Title: The Handmaid's Tale</h1>
        <h1 className="font-bold text-gray-500">author: Margaret Atwood</h1>
        <h2 className="font-bold text-gray-800">category: Dystopian</h2>
        <button className="font-bold text-gray-800">View Details</button>
      </div>
    </section>
  );
}

export default BookList;
