import React from "react";
import { Link } from "react-router-dom";


function BookCard({book}) {

  return(
    <section className="m-5 mx-auto rounded-xl overflow-hidden bg-white hover:scale-[1.02]">
                <img className="h-70 w-80 rounded" src={book.imageUrl} alt={book.title}/>
                  <div className="mx-2 my-3">
                      <h1 className="font-bold text-gray-500"> {book.title} </h1>
                      <h1 className="font-bold text-gray-500"> {book.author} </h1>
                      <h2 className="font-bold text-gray-800"> {book.category} </h2>
                      <h2 className="font-bold text-green-700"> {book.rating} </h2>
                      <Link to={`/book/${book.id}`}><h2 className="font-bold text-blue-600 hover:underline">View Details</h2></Link>
                  </div>
    </section>
  )
}

export default BookCard;


