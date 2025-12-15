import React from 'react'
import BookList from './BookList'
import ApiCalling from './ApiCalling'

function Body() {
  return (
    <section>
        <main className="flex flex-col bg-slate-300">
          <ul className="flex justify-end gap-5 mx-5 text-2xl">
            <li className="cursor-pointer">Fiction</li>
            <li className="cursor-pointer">Non-Fiction</li>
            <li className="cursor-pointer">Sci-Fi</li>
            <li className="cursor-pointer">Horrer</li>
            <li className="cursor-pointer">Romantic</li>
            <li className="cursor-pointer">Biography</li>
          </ul>
          <h1 className="flex justify-center text-5xl p-10">Welcome to Online Library</h1>
          <p className="flex justify-center text-3xl mb-10">You can read your favorite book</p>
        </main>
      <div className="flex flex-wrap m-5 bg-gray-50">
        <h1 className='font-bold text-2xl mt-2 mx-25 underline'>Books</h1>
        <ApiCalling/>
      </div>
    </section>
  )
}

export default Body
