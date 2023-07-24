import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>My Portfolio</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
            </nav>
        </header>
    );
};

export default Header;
