// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.svg';


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    // Handle scroll behavior
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Show navbar when the user starts scrolling
        if (scrollTop > 0) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false); // Hide navbar when back at the top
        }
    };

    // Detect scrollbar width
    const detectScrollbarWidth = () => {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.overflow = 'scroll';
        scrollDiv.style.width = '100px';
        scrollDiv.style.height = '100px';
        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        document.body.appendChild(scrollDiv);
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        setScrollbarWidth(scrollbarWidth);
        document.body.removeChild(scrollDiv);
    };

    useEffect(() => {
        detectScrollbarWidth();
        window.addEventListener('scroll', handleScroll);

        // Cleanup the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`} style={{ marginRight: scrollbarWidth }}>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
