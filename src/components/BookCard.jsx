import React from "react";
import { Link } from "react-router-dom";
function BookCard({ book }) {
  return (
    
    <section className="m-5 rounded-xl border bg-white shadow-md">
          <img className="h-70 w-80 rounded-xl" src={book.imageUrl} alt={book.title}/>
            <div className="mx-5 my-3">
                  <h1 className="font-bold text-gray-500"> {book.title} </h1>
                  <h1 className="font-bold text-gray-500"> {book.author} </h1>
                  <h2 className="font-bold text-gray-800"> {book.genre} </h2>
                  <Link to={`/bookdetails/${book.id}`}><h2 className="font-bold text-blue-600 hover:underline">View Details</h2></Link>
            </div>
    </section>
  );
}

export default BookCard;
