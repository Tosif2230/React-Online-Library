import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

function ApiCalling() {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const API ="https://raw.githubusercontent.com/tosif2230/Dummy-Books-API/main/books.json";
        async function calling() {
            const resp = await axios.get(API);
            // console.log(resp.data)
             setBookDetails(resp.data);
    }

    calling();
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-gray-50">
      {bookDetails.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default ApiCalling;
