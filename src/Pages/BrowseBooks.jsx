import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Search from "../components/Search";
import useBooks from "../hooks/useBooks";


function BrowseBooks() {
  const book = useBooks()
  const [filterBooks,setFilterBooks] =useState(book)

  useEffect(()=>{
    setFilterBooks(book)
  },[book])

  function filterSearchList(filterSearchBooks){
    setFilterBooks(filterSearchBooks)
  }

  return (
    <div className="bg-slate-500">
      <div className="flex justify-between ">
        <Search filterFunction ={filterSearchList}/>
        
        <ul className="flex">
           <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Fiction</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Non-Fiction</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Sci-Fi</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Thriller</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Romantic</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Historical</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Biography</li>
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
