import React, { useContext } from "react";
import './PlaceOrder.css';
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
    const {getTotalCart} = useContext(StoreContext);

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Address" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="place-order-right">
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
                            <p>₹{getTotalCart()===0?0:50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCart()===0?0:getTotalCart() + 50}</b>
                        </div>
                    </div>
                    <button>Proceed to Payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder