import React, { useState } from 'react';
import logo from '../../assets/GOVTECH.svg';
import './navbar.css';
import '../../reset.css';
import cancel from './images/cancel-icon.svg';
import hambuger from './images/hamburger.svg';
import {Link} from "react-router-dom"



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
        <div className="nav-items-wrapper" id={!menuOpen ? 'closed' : 'open'}>
          <img src={cancel} alt="cancel icon" className={!menuOpen ? 'cancel-closed': 'cancel-open'} onClick={toggleMenu} className="cancel-icon" />
          <ul className='nav-items' >
            <li className='nav-item'><Link to={'/'} href="/">Home</Link></li>
            <li className='nav-item'><Link to={'/about'} href="/">About</Link></li>
            <li className='nav-item'><Link to={'/team'} href="/">Team</Link></li>
            <button className='get-in'><Link to={'/contact'}>Get In Touch</Link></button>    
          </ul>
        </div>
      </nav>
    </div>
  );
}
