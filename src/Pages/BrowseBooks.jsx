import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Search from "../components/Search";
import useBooks from "../hooks/useBooks";
import { Link, useParams } from "react-router-dom";



function BrowseBooks() {
  const book = useBooks()
  const {category} = useParams()
  const [filterBooks,setFilterBooks] = useState([])


 useEffect(() => {
  if (category) {
    const filtered = book.filter(
      (books) => books.category.toLowerCase() == category.toLowerCase()
    );
    setFilterBooks(filtered);
  } 
  else {
    setFilterBooks(book);
  }
}, [category, book]);

  const filterSearchList = (filtered) => {
    setFilterBooks(filtered);
  };


  return (
    <div className="bg-slate-500">
      <div className="flex justify-between ">
        <Search books={book} filterFunction ={filterSearchList}/>
        
        <ul className="flex flex-wrap">
           <Link to="/books/Fiction"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Fiction</li></Link>
            <Link to="/books/Non-Fiction"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Non-Fiction</li></Link>
            <Link to="/books/Sci-Fi"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Sci-Fi</li></Link>
            <Link to="/books/Thriller"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Thriller</li></Link>
            <Link to="/books/Romance"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Romance</li></Link>
            <Link to="/books/Historical"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Historical</li></Link>
            <Link to="/books/Biography"><li className="cursor-pointer underline mx-2 mt-3 text-2xl hover:scale-[1.1]">Biography</li></Link>
          </ul>
        
      
      </div>
        <div className="flex flex-wrap justify-start">
           { filterBooks.map((book)=>(
            <BookCard key={book.id} book={book}/>
           ))}
        </div>
    </div>
  );
}

export default BrowseBooks;
