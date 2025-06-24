import React, { useContext, useEffect, useState } from "react";
import './LoginPopUp.css';
import { X } from 'lucide-react';
import { assets } from '../../assets/assets'
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';

const LoginPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login")
    const {url, setToken} = useContext(StoreContext)
    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currentState==="Login") {
            newUrl += '/api/user/login'
        }
        else {
            newUrl += '/api/user/register'
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else {
            alert(response.data.message);
        }
    }

    return(
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <X className="cross-icon" onClick={()=>setShowLogin(false)}  />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:
                <input 
                    name = 'name' 
                    onChange={onChangeHandler}
                    value = {data.name}
                    type="text" placeholder="Your Name" required/>}
                <input 
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email" placeholder="Your Email" required/>
                <input 
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    type="password" placeholder="Password" required/>
            </div>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to terms of use & privacy policy.</p>
            </div>
            <button type="submit">{currentState==="Sign Up"?"Create Account":"Login"}</button>
            {currentState==="Login"
            ?<p>Create an Account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an Account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
            </form>  
        </div>
    )
}

export default LoginPopUp