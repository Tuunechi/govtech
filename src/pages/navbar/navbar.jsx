import React, { useState } from 'react';
import logo from '../../assets/GOVTECH.svg';
import './navbar.css';
import '../../reset.css';
import cancel from './images/cancel-icon.svg';
import hambuger from './images/hamburger.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='logo-wrapper'>
          <img src={logo} className='logo' alt="govtech logo" />
        </div>
        <img src={hambuger} className='hamburger-menu' onClick={toggleMenu} alt="hamburger menu" />
        <div className="nav-items-wrapper">
          <img src={cancel} alt="cancel icon" onClick={toggleMenu} className="cancel-icon" />
          <ul className='nav-items' id={!menuOpen ? 'closed' : 'open'}>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/">About</a></li>
            <li className='nav-item'><a href="/">Team</a></li>
            <button className='get-in'>Get In Touch</button>    
          </ul>
        </div>
      </nav>
    </div>
  );
}
