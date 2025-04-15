import React from "react";
import './Footer.css';
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>dummy text</p>
                    <div className="footer-social-icons">
                        <img src={assets.insta} alt="" />
                        <img src={assets.twitter} alt="" />
                        <img src={assets.linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91-8765432112</li>
                        <li>contact.bloomingdale@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <p className="footer-copyright">Copyright © 2025 Bloomingdale. All rights reserved.</p>
        </div>
    )
}

export default Footer