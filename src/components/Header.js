import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from '../components/Grocery';
// import foodFireLogo from "../images/logo.png";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
            <img className="w-40" src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1317464-281.jpg?semt=ais_hybrid" alt="Food Fire Logo" />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                  <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/grocery">Grocery</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li>
                  {
                      isLoggedIn ?  
                        <button className='isLoggedIn' onClick={()=>{setIsLoggedIn(false)}}>Logout</button> :
                        <button className='isLoggedIn' onClick={()=>{setIsLoggedIn(true)}}>Login</button> 
                      
                    }
                  </li>
                </ul>
            </div>
           
        </div>
      )
}

export default Header