import React, { useState } from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const xmark = <FontAwesomeIcon icon={faXmark} />
const bars = <FontAwesomeIcon icon={faBars} />

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className="Navbar">
        <span className="nav-logo">DevLHB</span>
        <div className={`nav-items ${isOpen && "open"}`}>
            <Link className='link' onClick={() => setIsOpen(!isOpen)} to="/home">Home</Link>
            <Link className='link' onClick={() => setIsOpen(!isOpen)} to="/client">Client</Link>
            <Link className='link' onClick={() => setIsOpen(!isOpen)} to="/home">Home</Link>
            <Link className='link' onClick={() => setIsOpen(!isOpen)} to="/client">Client</Link>
          {/* <a href="/service">Service</a>
          <a href="/contact">Contact</a> */}
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar">{isOpen ? xmark : bars}</div>
        </div>
      </div>
        // <div className='header'>
        //     <ul>
        //         <li><Link className='link' to="/home">Home</Link></li>
        //         <li><Link className='link' to="/client">Client</Link></li>
        //         <li><Link className='link' to="/client">Client</Link></li>
        //         <li><Link className='link' to="/home">Dashbord</Link></li>
        //         <li><Link className='link' to="/home">Dashbord</Link></li>
        //     </ul>
        //     <button className='bars'>{bars}</button>
        //     {/* <h1>{xmark}</h1> */}
        // </div>
    );
};

export default Header;