import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src='portfolio_react/public/cat.png' alt="logo" />
        <div className="navbar-container">
            <div className="navbar-logo">
            </div>
            <div className="navbar-links">

            </div>
            <button className="desktopMenu">
                <img src="" alt="" className="desktopMenuImg"/>
                Contact Me
            </button>
        </div>
    </nav>
  );
}

export default Navbar;