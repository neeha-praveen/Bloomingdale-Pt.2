import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {

  const [menu, setMenu] = useState("home"); 

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">
        <li onClick= {()=>setMenu("home")} className={menu==="home" ? "active":""}>Home</li>
        <li onClick= {()=>setMenu("products")} className={menu==="products" ? "active":""}>Products</li>
        <li onClick= {()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active":""}>Mobile App</li>
        <li onClick= {()=>setMenu("contact-us")} className={menu==="contact-us" ? "active":""}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search} alt="search" className="search-icon" />
        {/*<img src={assets.basket} alt="basket" className="basket-icon" />*/}
        <div className="cart-container">
          <img src={assets.cart} alt="cart" className="cart-icon" />
          <div className="dot"></div>
        </div>
        <button>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar
