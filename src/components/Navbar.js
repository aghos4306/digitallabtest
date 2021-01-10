import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleHamburgerMenu = () => {
        setClick(!click);
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
            </nav>
        </>
    )
}

export default Navbar;