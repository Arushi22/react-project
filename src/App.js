import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCard";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>
        )
      }, 
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }           
    ]
  }  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);