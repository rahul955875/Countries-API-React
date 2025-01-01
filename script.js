import { createRoot } from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/contact",
      element: <><Header /><h1 className="mb-4 m-3">Contacts</h1></>,
    },
  ]);
const root = createRoot(document.getElementById("root"));

root.render( <RouterProvider router={router} />);
