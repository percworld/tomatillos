import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <h4 className="site-title">TOMATILLOS</h4>
            </div>
            <div className="nav-btn-container">
                <button className="nav-btn">HOME</button>
                <button className="nav-btn">PROFILE</button>
            </div>
        </header>
    )
}

export default Header;