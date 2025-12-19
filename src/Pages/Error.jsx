import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center bg-stone-500 h-screen">
      <h1 className="text-4xl m-3">Something Wrong !!</h1>
      <h2 className="text-9xl m-3">{err.status}</h2>
      <h2 className="text-4xl m-3">{err.data}</h2>
      <Link to="/">
        <button className="m-6 p-2 rounded-xl bg-blue-400 cursor-pointer hover:bg-blue-500 text-white">
          Go To Home Page
        </button>
      </Link>
    </div>
  );
}

export default Error;
