import React, { useContext } from "react";
import './ProductItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({id, name, price, image}) => {
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
    

    return (
        <div className="product-item">
            <div className="product-item-image-container">
                <img className="product-item-image" src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                    ? <img className="add" 
                        onClick={() => addToCart(id)} 
                        src={assets.add_white} alt=""/>
                    : <div className="product-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove} alt="-" />
                        <span>{cartItems[id]}</span>
                        <img onClick={() => addToCart(id)} src={assets.add_black} alt="+" />
                    </div>
                }
            </div>
            <div className="product-item-info">
                <div className="product-item-name-rating">
                    <p>{name}</p>
                </div>
                <p className="product-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default ProductItem