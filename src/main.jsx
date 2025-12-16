import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBooks from "./Pages/BrowseBooks.jsx";
import BookDetails from "./Pages/BookDetails.jsx";
import Error from "./Pages/Error.jsx";
import AddBook from "./Pages/AddBook.jsx";
import Body from "./Pages/Body.jsx";


const appRoute = createBrowserRouter([
  { path: "/", 
    element: <App />, 
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      { path: "/browsebooks", 
        element: <BrowseBooks /> 
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />
      },
      { path: "/addbook", 
        element: <AddBook /> 
      },
    ]
  },  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>
);
