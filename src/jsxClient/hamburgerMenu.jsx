// HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scripts_css/hamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {isOpen && (
        <ul className="menu-links">
          <li>
            <Link className='NavLinks' to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link className='NavLinks' to="/products" onClick={toggleMenu}>Products</Link>
          </li>
          <li>
            <Link className='NavLinks' to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
