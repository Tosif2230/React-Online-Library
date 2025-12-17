
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

  function Search({ filterFunction, books }) {
    const [searchedText,setSearchedText] = useState("")

    function handleSearch(){
      const searchedBook = books.filter((book)=>book.title.toLowerCase().includes(searchedText.toLowerCase()))||
    books.author.toLowerCase().includes(searchedText.toLowerCase())
      filterFunction(searchedBook)
    }
    return (
      <div>
        <div className='flex justify-center'>
                <input className='m-3 text-center p-1 w-80 border rounded' type="text" placeholder='Search Book' onChange={(e)=>setSearchedText(e.target.value)}/>
                <button onClick={handleSearch} className='m-1 mt-3 h-8 cursor-pointer hover:scale-[1.3]' ><IoSearch /></button>
            </div>
      </div>
    )
  }

  export default Search
