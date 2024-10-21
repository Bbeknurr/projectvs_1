// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="site-title">Autotrading</h1>
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">EntranceUserList</Link>
            </nav>
        </header>
    );
};

export default Header;
