import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Search from "../components/Search";
import useBooks from "../hooks/useBooks";
import { Link } from "react-router-dom";



function BrowseBooks() {
  const book = useBooks()
  const [filterBooks,setFilterBooks] = useState(book)

  useEffect(()=>{
    // console.log(book)
    setFilterBooks(book)
  },[book])

  function filterSearchList(filterSearchBooks){
    setFilterBooks(filterSearchBooks)
  }

  return (
    <div className="bg-slate-500">
      <div className="flex justify-between ">
        <Search books={book} filterFunction ={filterSearchList}/>
        
        <ul className="flex">
           <Link to="/books/Fiction"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Fiction</li></Link>
            <Link to="/books/Non-Fiction"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Non-Fiction</li></Link>
            <Link to="/books/Sci-Fi"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Sci-Fi</li></Link>
            <Link to="/books/Thriller"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Thriller</li></Link>
            <Link to="/books/Romantic"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Romantic</li></Link>
            <Link to="/books/Historical"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Historical</li></Link>
            <Link to="/books/Biography"><li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Biography</li></Link>
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
