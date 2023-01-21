import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/main.css"
import ResortList from './resorts_dropdown';
const directory = require('../../config/resorts.json');

resorts = directory.keys();

function Navbar(props) {
    const navRef = useRef(null);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <ul className='navbar-nav'>{props.children} </ul>


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