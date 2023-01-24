import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import {ReactComponent as SkiIcon} from "../../Images/Ski Icon.svg"
import "../../styles/main.css"
import "../../styles/navbar.css"
//const directory = require('../../config/resorts.json');
//resorts = directory.keys();

function Navbar(props) {
    const navRef = useRef(null);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <span className='Icon'><SkiIcon /></span>
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