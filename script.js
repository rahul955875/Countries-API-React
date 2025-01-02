import { createRoot } from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<h1>404 not found try other country</h1>,
      children: [
        {
        path:'/',
        element: <Home />
      },
        {
        path:'/country',
        element: <h1>This Country is not availble</h1>
      }
      ,]
    },
  ]);
const root = createRoot(document.getElementById("root"));

root.render( <RouterProvider router={router} />);
