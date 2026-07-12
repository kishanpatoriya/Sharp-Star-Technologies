import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import image from '../assets/logo.svg';

function Navbar() {

  const [menuopen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>   {
      window.removeEventListener('scroll', handleScroll);
    };

   
  }, []);
 const closeMenu = ()=>{
      setMenuOpen(false);
      
    }

  return (
    <>
      <header>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

          <div className='logo'>
            <img
              src={image}
              alt="logo"
              className='company-logo'
            />
          </div>

          <div
            className='menu-icon'
            onClick={() => setMenuOpen(!menuopen)}
          >
             {menuopen ? "✕" : "☰"}
          </div>

          <ul className={menuopen ? 'nav-links active' : 'nav-links'}>
            <li><NavLink to="/" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
            <li><NavLink to="/about" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>About Us</NavLink></li>
            <li><NavLink to="/services" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Services</NavLink></li>
            <li><NavLink to="/solution" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Solution</NavLink></li>
            <li><NavLink to="/industries" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Industries</NavLink></li>
            <li><NavLink to="/caseStudies" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Case Studies</NavLink></li>
            <li><NavLink to="/career" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Career</NavLink></li>
            <li><NavLink to="/contact" end onClick={closeMenu} className={({isActive})=>
            isActive ? "nav-link active" : "nav-link"}>Contact Us</NavLink></li>
            
          </ul>

        </nav>
      </header>
    </>
  );
}

export default Navbar;