import React from "react";
import { useParams } from "react-router-dom";
import useBooks from "../hooks/useBooks";


function BookDetails() {
  const books = useBooks()
  const params = useParams();
  const Book = books.filter((Book) => Book.id == params.id);

  return (
    <div>
      {Book.map((Book) => {
        return (
          <div className="flex flex-col m-5 rounded-xl border bg-white shadow-md">
            <img className="h-70 w-80 rounded-xl" src={Book.imageUrl} alt={Book.title}/>
            <div className="mx-5 my-3">
              <h1 className="font-bold text-gray-500"> {Book.title} </h1>
              <h1 className="font-bold text-gray-500"> {Book.author} </h1>
              <h2 className="font-bold text-gray-800"> {Book.category} </h2>
              <h2 className="font-bold text-gray-800"> {Book.description} </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookDetails;
