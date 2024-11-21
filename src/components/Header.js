import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from '../components/Grocery';
import UserContext from '../utils/UserContext';
// import foodFireLogo from "../images/logo.png";

function Header() {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log("usercontext:", loggedInUser);
  
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
            <img className="w-40" src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1317464-281.jpg?semt=ais_hybrid" alt="Food Fire Logo" />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                  <li className='px-4'>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                  <li className='px-4'><Link to="/">Home</Link></li>
                  <li className='px-4'><Link to="/about">About Us</Link></li>
                  <li className='px-4'><Link to="/contact">Contact Us</Link></li>
                  <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                  <li className='px-4'><Link to="/cart">Cart</Link></li>                  
                  <li>
                 <button
                  className='login'
                  onClick={()=>{
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login")
                  }}
                 >
                  {btnNameReact}
                 </button>
                  </li>
                  <li className='px-4'>{loggedInUser}</li>
                </ul>
            </div>
           
        </div>
      )
}

export default Header