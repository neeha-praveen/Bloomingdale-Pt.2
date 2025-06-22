import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { Search, ShoppingCart } from 'lucide-react';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductsClick = () => {
    setMenu("products");
    if (location.pathname === "/") {
      const section = document.getElementById("explore-products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById("explore-products");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    }
  };

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a onClick={handleProductsClick} className={menu === "products" ? "active" : ""}>Products</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <Search alt="search" className="search-icon" />
        <div className="cart-container">
          <Link to="/cart"><ShoppingCart alt="cart" className="cart-icon" /></Link>
          <div className={getTotalCart() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar;
