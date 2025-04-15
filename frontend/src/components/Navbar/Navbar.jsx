import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

function Navbar({setShowLogin}) {

  const [menu, setMenu] = useState("home"); 

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">
        <Link onClick= {()=>setMenu("home")} className={menu==="home" ? "active":""}>Home</Link>
        <a href='#explore-products' onClick= {()=>setMenu("products")} className={menu==="products" ? "active":""}>Products</a>
        <a href='#footer' onClick= {()=>setMenu("contact-us")} className={menu==="contact-us" ? "active":""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search} alt="search" className="search-icon" />
        {/*<img src={assets.basket} alt="basket" className="basket-icon" />*/}
        <div className="cart-container">
          <img src={assets.cart} alt="cart" className="cart-icon" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar
