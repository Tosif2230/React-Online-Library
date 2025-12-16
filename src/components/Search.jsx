  import { IoSearch } from 'react-icons/io5'

  function Search() {
    
    return (
      <div>
        <div className='flex justify-center'>
                <input className='m-3 text-center p-1 w-80 border rounded' type="text" placeholder='Search Book'/>
                <button  className='m-1 mt-3 h-8 cursor-pointer hover:scale-[1.3]' ><IoSearch /></button>
            </div>
      </div>
    )
  }

  export default Search
