import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>BloomingDale - Your Local Nursery</h2>
                <p>Shop with us for quality plants, fresh flowers, and all your gardening essentials.</p>
                <a href="#explore-products"><button>View Products</button></a>
            </div>
        </div>
    )
}

export default Header