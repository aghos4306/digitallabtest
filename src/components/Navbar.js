import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    DigitalLab
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className="move-nav">
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/recipe" className="nav-links" onClick={closeMobileMenu}>
                            Recipe <i className="fas fa-caret-down" />
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>

                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-item">
                        <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/visit-us" className="nav-links" onClick={closeMobileMenu}>
                            Visit Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li> */}
                </ul>
                </div>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;