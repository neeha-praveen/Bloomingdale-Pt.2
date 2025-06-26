import React from "react";
import './Footer.css';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.footer_logo} alt="" />
                    <p>Your trusted source for healthy plants and gardening essentials.</p>
                    <div className="footer-social-icons">
                        <Instagram className="social-icon"/>
                        <Twitter className="social-icon"/>
                        <Linkedin className="social-icon"/>
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
            <p className="footer-copyright">Copyright © 2025 Bloomingdale. All rights not reserved.</p>
        </div>
    )
}

export default Footer