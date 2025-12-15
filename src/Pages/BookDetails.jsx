import React from 'react'

function BookDetails({book}) {
  return (
    <div className="m-5 rounded-xl border bg-white shadow-md">
          <img className="h-70 w-80 rounded-xl" src={book.imageUrl} alt={book.title}/>
            <div className="mx-5 my-3">
                  <h1 className="font-bold text-gray-500"> {book.title} </h1>
                  <h1 className="font-bold text-gray-500"> {book.author} </h1>
                  <h2 className="font-bold text-gray-800"> {book.category} </h2>
                  <h2 className="font-bold text-gray-800"> {book.description} </h2>
            </div>
    </div>
  )
}

export default BookDetails
