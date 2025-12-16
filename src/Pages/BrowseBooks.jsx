import BookCard from "../components/BookCard";
import Search from "../components/Search";
import useBooks from "../hooks/useBooks";
import { Link } from "react-router-dom";

function BrowseBooks() {
  const books = useBooks()

 

  return (
    <div className="bg-slate-500">
      <div className="flex justify-between ">
        <Search/>
        
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
            <BookCard books={books}/>
        </div>
    </div>
  );
}

export default BrowseBooks;
