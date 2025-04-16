import React, { useContext } from "react";
import './ProductItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({id, name, price, image}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    
    return (
        <div className="product-item">
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt="" />
                {!cartItems[id]
                    ? <img className="add" 
                        onClick={() => addToCart(id)} 
                        src={assets.add_white} alt=""/>
                    : <div className="food-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove} alt="-" />
                        <span>{cartItems[id]}</span>
                        <img onClick={() => addToCart(id)} src={assets.add_black} alt="+" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                </div>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default ProductItem