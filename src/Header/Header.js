import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <h4 className="site-title">TOMATILLOS</h4>
            </div>
            <div className="nav-btns">
                <button>HOME</button>
                <button>PROFILE</button>
            </div>
        </header>
    )
}

export default Header;