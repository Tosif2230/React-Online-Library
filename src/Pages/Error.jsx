import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


function Error() {
  const err = useRouteError();
  return (
    <div>
      <h1>Something Wrong !!</h1>
      <h2>{err.status}</h2>
      <h2>{err.data}</h2>
      <Link to="/"><button className=' m-6 p-2 rounded-xl bg-blue-400 cursor-pointer hover:bg-blue-500 text-white'>Go To Home Page</button></Link>
    </div>
  )
}

export default Error
