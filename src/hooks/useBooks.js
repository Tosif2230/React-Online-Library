import axios from "axios";
import React, { useEffect, useState } from "react";

function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const API =
      "https://raw.githubusercontent.com/tosif2230/Dummy-Books-API/main/books.json";
    async function calling() {
      let resp = await axios.get(API);
      // console.log(resp.data);
      setBooks(resp.data);
    }

    calling();
  }, []);

  return books;
}

export default useBooks;
