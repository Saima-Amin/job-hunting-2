// import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Company Name</h3>
                    <p>One line description of the company</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Product</h3>
                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Support</h3>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Contact</h3>
                    <ul>
                        <li>524 Broadway, NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;