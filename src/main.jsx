import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookListView from "./views/BookListView.jsx";
import ErrorView from "./views/ErrorView.jsx";
import BookDetailView from "./views/BookDetailView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <BookListView />,
      },
      {
        path: "/category/:category",
        element: <BookListView />,
      },
      {
        path: "/book/:bookID",
        element: <BookDetailView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
