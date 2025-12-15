import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBooks from "./Pages/BrowseBooks.jsx";
import BookDetails from "./Pages/BookDetails.jsx";
import Error from "./Pages/Error.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: "/browsebooks",
    element: <BrowseBooks />,
  },
  {
    path: "/bookdetails",
    element: <BookDetails />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>
);
