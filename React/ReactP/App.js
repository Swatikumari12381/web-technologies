import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";  
import Body from "./src/components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Home from "./src/components/Home";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

const App = () =>{
  return(
    <div>
      <Header />
      <Body />
    </div>  
  )
};

const routeApp = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  }
])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeApp} />);