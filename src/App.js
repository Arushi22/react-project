import React,{lazy, Suspense, useEffect, useState} from "react";
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
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => { 
  const [userName, setUserName] = useState();
  //authentication
  useEffect(()=>{
    // make an api call and send the username and password
    const data = {
      name: "Arushi Sharma"
    }
    setUserName(data.name);
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName}}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
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