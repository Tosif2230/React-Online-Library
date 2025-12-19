import React, { lazy, Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Body = lazy(() => import("./Pages/Body.jsx"));
const BrowseBooks = lazy(() => import("./Pages/BrowseBooks.jsx"));
const BookDetails = lazy(() => import("./Pages/BookDetails.jsx"));
const AddBook = lazy(() => import("./Pages/AddBook.jsx"));
const Error = lazy(() => import("./Pages/Error.jsx"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/browsebooks", element: <BrowseBooks /> },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      { path: "/addbook", element: <AddBook /> },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={appRoute} />
    </Suspense>
  </Provider>
);
