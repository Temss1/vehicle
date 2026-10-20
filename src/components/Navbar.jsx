import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaUser, FaUserPlus } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">RoadPass</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="/">
          <FaHome className="icon" /> Home
        </a>
        <a href="/about">
          <FaInfoCircle className="icon" /> About
        </a>
        <a href="/login">
          <FaUser className="icon" /> Login
        </a>
        <a href="/register">
          <FaUserPlus className="icon" /> Register
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;