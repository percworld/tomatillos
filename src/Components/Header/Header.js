import React from 'react';
import './Header.css';
import tomato from './tomato.png'

const Header = ({ showHome }) => {
    return (
        <header>
            <div className='title-container'>
                <img className='tomato' src={tomato} alt="Rotten Tomato"></img>
                <h4 className="site-title">ROTTEN <br/>TOMATILLOS</h4>
            </div>
            <div className="nav-btn-container">
                <button className="nav-btn" onClick={showHome}>HOME</button>
                <button className="nav-btn">PROFILE</button>
            </div>
        </header >
    )
}

export default Header;