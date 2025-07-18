import React, { useContext, useEffect } from "react";
import './PlaceOrder.css';
import { StoreContext } from "../../context/StoreContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {
    const { getTotalCart, token, products_all, cartItems, url } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        products_all.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo['quantity'] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCart() + 50
        }
        try {
            let response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });

            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            } else {
                console.error("Order response error:", response.data);
                alert('Failed to place order.');
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert('An error occurred during checkout.');
        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/cart')
            alert('You must login to place an order!')
        }
        else if (getTotalCart() === 0) {
            navigate('/cart')
            alert('Cart is empty!')
        }
    }, [token])

    return (
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
                    <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
                </div>
                <input required name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Email Address" />
                <input required name="address" onChange={onChangeHandler} value={data.address} type="text" placeholder="Address" />
                <div className="multi-fields">
                    <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
                    <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
                    <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
                </div>
                <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
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
                            <p>₹{getTotalCart() === 0 ? 0 : 50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCart() === 0 ? 0 : getTotalCart() + 50}</b>
                        </div>
                    </div>
                    <button type='submit'>Proceed to Payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder