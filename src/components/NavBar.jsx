import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/main.css"

function Navbar() {
    const navRef = useRef(null);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href='/about'>About</a>
                <a href='/resorts'>Resorts</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
};

export default Navbar;