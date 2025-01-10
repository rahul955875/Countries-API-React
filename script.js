import { createRoot } from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";
import CountryDetail from "./Component/CountryDetail.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement:<h1>404 not found try other country</h1>,
      children: [
        {
        path:'/',
        element: <Home />
      },
        {
        path:'/:country',
        element: <CountryDetail />
      }
      ,]
    },
  ]);
const root = createRoot(document.getElementById("root"));

root.render( <RouterProvider router={router} />);
