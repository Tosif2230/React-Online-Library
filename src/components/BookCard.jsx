import React from "react";
import { Link } from "react-router-dom";


function BookCard({books}) {
  return (
    books.map((item)=>{
      return(
        <section  className="m-5 mx-auto rounded-xl overflow-hidden bg-white hover:scale-[1.02]">
                <img className="h-70 w-80 rounded" src={item.imageUrl} alt={item.title}/>
                  <div className="mx-2 my-3">
                      <h1 className="font-bold text-gray-500"> {item.title} </h1>
                      <h1 className="font-bold text-gray-500"> {item.author} </h1>
                      <h2 className="font-bold text-gray-800"> {item.category} </h2>
                      <Link to={`/book/${item.id}`}><h2 className="font-bold text-blue-600 hover:underline">View Details</h2></Link>
                  </div>
        </section> 
      )
    })
  );
}

export default BookCard;


