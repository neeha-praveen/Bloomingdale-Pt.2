import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState('');
    const [products_all, setProductsAll] = useState([]);

    const addToCart = async (itemId) => {
        const updatedCart = { ...cartItems };

        if (!updatedCart[itemId]) {
            updatedCart[itemId] = 1;
        } else {
            updatedCart[itemId] += 1;
        }
        setCartItems(updatedCart);
        if (!token) {
            localStorage.setItem("guestCart", JSON.stringify(updatedCart));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        const updatedCart = { ...cartItems };
        if (updatedCart[itemId] > 0) {
            updatedCart[itemId] -= 1;
        }
        setCartItems(updatedCart);
        if (!token) {
            localStorage.setItem("guestCart", JSON.stringify(updatedCart));
        }
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    };

    const getTotalCart = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = products_all.find((product) => product._id === item);
                if (!itemInfo) {
                    console.warn(`Product with id ${item} not found in products_all`);
                    continue; // Skip this item
                }
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(url + '/api/product/list');
            setProductsAll(response.data.data);
        } catch (error) {
            console.error("Failed to fetch products:", error.message);
            setProductsAll([]);
        }
    };

    const fetchCartData = async () => {
        if (token) {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        }
    };

    useEffect(() => {
        async function loadData() {
            await fetchProducts();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
            } else {
                // If guest, restore from localStorage
                const savedCart = JSON.parse(localStorage.getItem("guestCart") || '{}');
                console.log("restoring guestCart from localStorage:", savedCart);
                setCartItems({ ...savedCart }); // Spread to trigger React state update
            }
        }
        loadData();
    }, []);


    useEffect(() => {
        if (token) {
            fetchCartData();
            localStorage.removeItem("guestCart"); // clean up guest cart
        }
    }, [token]);

    const contextValue = {
        products_all,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCart,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
