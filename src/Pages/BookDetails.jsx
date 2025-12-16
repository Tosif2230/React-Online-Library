import React from 'react'

function BookDetails({Books}) {
  
  return (
    <div className="m-5 rounded-xl border bg-white shadow-md">
          <img className="h-70 w-80 rounded-xl" src={Books.imageUrl} alt={Books.title}/>
            <div className="mx-5 my-3">
                  <h1 className="font-bold text-gray-500"> {Books.title} </h1>
                  <h1 className="font-bold text-gray-500"> {Books.author} </h1>
                  <h2 className="font-bold text-gray-800"> {Books.category} </h2>
                  <h2 className="font-bold text-gray-800"> {Books.description} </h2>
            </div>
    </div>
  )
}

export default BookDetails
