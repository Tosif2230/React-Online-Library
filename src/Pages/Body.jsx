import React from "react"; 
import { Link } from "react-router-dom";

function Body() {

  return (
        <main className="flex flex-col bg-slate-300 h-[85vh]">
            
          <div className='flex justify-center items-center flex-col mt-20 '>
            <h1 className="text-5xl p-10">Welcome to Online Library</h1>
          <p className="text-3xl mb-10">You can read your favorite book</p>
          <Link to={"/browsebooks"}><button className=' m-6 p-2 rounded-xl bg-blue-400 cursor-pointer hover:bg-blue-500 text-white'>View Books</button></Link>
          </div>
        </main>
  )
}

export default Body;
