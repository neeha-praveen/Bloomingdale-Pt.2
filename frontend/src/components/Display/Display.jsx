import React, { useContext } from "react";
import './Display.css'
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";

const Display = ({category}) => {
    const { products_all, addToCart, removeFromCart, cartItems } = useContext(StoreContext)  
    return (
        <div className="display" id="display">
            <h2>All Products</h2>
            <div className="display-list">
                {products_all.map((item,index) => {
                    if(category==="All" || category===item.category) {
                        return <ProductItem 
                        key={index} 
                        id={item._id}  // Make sure to use _id instead of id to match your data
                        name={item.name} 
                        price={item.price} 
                        image={item.image}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        cartCount={cartItems[item._id]}
                    />
                    }
                })}
            </div>
        </div>
    )
}
export default Display