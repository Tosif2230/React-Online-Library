import React from 'react'

function Header() {
  return (
    <header>
        <nav className='flex justify-between items-center bg-slate-600 text-white'>
            <div className='flex items-center gap-2 mx-10 font-bold text-3xl'>
              <img className='h-15 w-15' src="https://cdn-icons-png.flaticon.com/512/2888/2888404.png" alt="" />
                <h1>Online Library</h1>
            </div>
            <div className='flex mx-10 list-none text-xl'>
                <a href=""><li className='mx-10 m-8'>Home</li></a>
                <a href=""><li className='mx-10 m-8'>Browse Books</li></a>
                <button className=' m-6 p-2 rounded-xl bg-blue-400 cursor-pointer'>Add Book</button>
            </div>
        </nav>
    </header>
  )
}

export default Header
