import React from 'react'
import { NavLink} from 'react-router-dom';
import image from '../assets/logo.png';

function Footer() {
  return (
    <footer className='footer' >
        <div className="footer-container" data-aos="zoom-out">
            <div className="footer-section">
                <img src={image} alt="logo" style={{ width: "120px", height: "100px",borderRadius:"20px" }}/>
                <p> We provide innovative web development,
        software solutions, and digital services
        that help businesses grow.</p>
            </div>
<div className='links-services'>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/solution">solution</NavLink></li>
                    <li><NavLink to="/Industries">Industries</NavLink></li>
                    <li><NavLink to="/Casestudies">Case Studies</NavLink></li>
                    <li><NavLink to="/Contact">Contact Us</NavLink></li>

                </ul>
            </div>

            <div className="footer-section">
                <h3>Services</h3>
                <ul>
                    <li><NavLink to="/services">Web Development</NavLink></li>
                    <li><NavLink to="/services">Mobile App Development</NavLink></li>
                    <li><NavLink to="/services">E-Commerce</NavLink></li>
                    <li><NavLink to="/services">UI/UX Design</NavLink></li>
                    <li><NavLink to="/services">SEO Optimization</NavLink></li>
                </ul>
            </div>
</div>

            <div className="footer-section">
                <h3 className='home-contact-heading'>Contact</h3>
                <p className='home-contact-detalis'><i class="ri-phone-line"></i>+91 78999 99978</p>
                <p className='home-contact-detalis'><i class="ri-mail-send-line"></i> info@sharpstar.com</p>
                <p className='home-contact-detalis'><i class="ri-map-pin-line"></i> Jamnagar, Gujarat, India</p>
            </div>

        </div>
            <div className="footer-bottom">
                <p>© 2026 SharpStar Solutions. All Rights Reserved.</p>
            </div>
    </footer>
  )
}

export default Footer
