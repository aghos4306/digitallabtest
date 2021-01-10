import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export function Button() {
    return (
        <Link to="/create-account">
            <button className="btn">CREATE ACCOUNT</button>
        </Link>
    )
}