import React from 'react';
import './Header.css'; // Ensure you have styles defined here

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" alt="Airbnb Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#stays">Stays</a></li>
                    <li><a href="#experiences">Experiences</a></li>
                </ul>
            </nav>
            <div className="profile-icon">
                <img src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" alt="Profile" />
            </div>
        </header>
    );
};

export default Header;