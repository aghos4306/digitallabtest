import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleHamburgerMenu = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    DigitalLabLogo
                </Link>
                {/* hamburger menu toggle */}
                <div className="menu-icon" onClick={handleHamburgerMenu}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* dropdown starts */}
                    <li className="nav-item">
                        <Link to="/recipe" className="nav-links" onClick={closeMobileMenu}>
                            Recipe <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products <i className="fas fa-caret-down" />
                        </Link>
                    </li>
                    {/* dropdown starts */}
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
                    <li className="nav-item">
                        <Link to="/create-account" className="nav-links-mobile" onClick={closeMobileMenu}>
                            CREATE ACCOUNT
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;