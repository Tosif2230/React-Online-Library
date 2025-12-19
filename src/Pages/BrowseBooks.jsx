import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Search from "../components/Search";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setBooks } from "../utils/bookSlice";

function BrowseBooks() {
  const dispatch = useDispatch();
  const allBooks = useSelector((store) => store.book.items);
  const { category } = useParams();
  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    if (allBooks.length === 0) {
      const API =
        "https://raw.githubusercontent.com/tosif2230/Dummy-Books-API/main/books.json";
      async function fetchBooks() {
        const resp = await axios.get(API);
        dispatch(setBooks(resp.data));
      }

      fetchBooks();
    }
  }, [allBooks, dispatch]);

  useEffect(() => {
    if (category) {
      const filtered = allBooks.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
      setFilterBooks(filtered);
    } else {
      setFilterBooks(allBooks);
    }
  }, [category, allBooks]);

  const filterSearchList = (filtered) => {
    setFilterBooks(filtered);
  };

  return (
    <div className="bg-slate-500">
      <div className="flex justify-between">
        <Search books={allBooks} filterFunction={filterSearchList} />

        <ul className="flex flex-wrap">
          <Link to="/browsebooks">
            <li className="mx-2 mt-3 text-2xl underline">All</li>
          </Link>
          <Link to="/books/Fiction">
            <li className="mx-2 mt-3 text-2xl underline">Fiction</li>
          </Link>
          <Link to="/books/Non-Fiction">
            <li className="mx-2 mt-3 text-2xl underline">Non-Fiction</li>
          </Link>
          <Link to="/books/Sci-Fi">
            <li className="mx-2 mt-3 text-2xl underline">Sci-Fi</li>
          </Link>
          <Link to="/books/Thriller">
            <li className="mx-2 mt-3 text-2xl underline">Thriller</li>
          </Link>
          <Link to="/books/Romance">
            <li className="mx-2 mt-3 text-2xl underline">Romance</li>
          </Link>
          <Link to="/books/Historical">
            <li className="mx-2 mt-3 text-2xl underline">Historical</li>
          </Link>
          <Link to="/books/Biography">
            <li className="mx-2 mt-3 text-2xl underline">Biography</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-wrap">
        {filterBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
