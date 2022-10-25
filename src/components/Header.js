import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import '../assets/scss/header.scss';

function Header () {
    
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    const [isOpen, setIsOpen] = useState( false)
    const w = window.innerWidth;

    return(
        <nav className="naail-header">
            <div className="container">
                <button className="hamburger" onClick={()=> setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div className={ isOpen && w < 768 ? 'site-navigation-wrap menu-open' : 'site-navigation-wrap'} onClick={()=> setIsOpen(!isOpen)}>
                    <button className="close-btn" onClick={()=> setIsOpen(!isOpen)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                    <ul className="site-menu">
                        <li><Link to="/" className={splitLocation[1] == ""? 'active' : ''} >Home</Link></li>
                        <li><Link to="/about" className={splitLocation[1] == "about"? 'active' : ''} >About</Link></li>
                        <li><Link to="/portfolio" className={splitLocation[1] == "portfolio"? 'active' : ''}>Portfolio</Link></li>
                        <li><Link to="/contact" className={splitLocation[1] == "contact"? 'active' : ''}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;