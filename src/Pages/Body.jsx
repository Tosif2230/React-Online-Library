import ApiCalling from '../components/ApiCalling'

function Body() {

  return (
    <section>
        <main className="flex flex-col bg-slate-300 h-[85vh]">
            <ul className="flex justify-end">
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Fiction</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Non-Fiction</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Sci-Fi</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Horrer</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Romantic</li>
            <li className="cursor-pointer underline mx-5 mt-3 text-2xl hover:scale-[1.1]">Biography</li>
          </ul>
          <div className='flex justify-center items-center flex-col mt-20 '>
            <h1 className="text-5xl p-10">Welcome to Online Library</h1>
          <p className="text-3xl mb-10">You can read your favorite book</p>
          <button className=' m-6 p-2 rounded-xl bg-blue-400 cursor-pointer hover:bg-blue-500 text-white'>View Books</button>
          </div>
        </main>
      <div className="flex flex-wrap m-5 bg-gray-50">
        <h1 className='font-bold text-2xl mt-2 mx-25 underline'>Books</h1>
        <ApiCalling/>
      </div>
    </section>
  )
}

export default Body;
