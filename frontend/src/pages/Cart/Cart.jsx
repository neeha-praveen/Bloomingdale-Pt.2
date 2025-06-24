import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import {X} from 'lucide-react';

const Cart = () => {
    const { cartItems, products_all, removeFromCart, getTotalCart, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {products_all.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={url + '/images/' + item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>₹{item.price * cartItems[item._id]}</p>
                                    <p className='cross' onClick={() => removeFromCart(item._id)}><X/></p>
                                </div>
                                <hr />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}

            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>₹{getTotalCart()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCart() === 0 ? 0 : 50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCart() === 0 ? 0 : getTotalCart() + 50}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart