import React from 'react'
import { useRouteError } from 'react-router-dom'


function Error() {
  const err = useRouteError();
  console.log(err)
  return (
    <div>
      <h1>Something Wrong !!</h1>
      <h2>{err.status}</h2>
      <h2>{err.data}</h2>
    </div>
  )
}

export default Error
