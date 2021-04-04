import React from 'react';
import './Header.css';
import tomato from './tomato.png'
import { Link } from 'react-router-dom';

const Header = ({ getMovies }) => {
    return (
        <header>
            <div className='title-container'>
                <img className='tomato' src={tomato} alt="Rotten Tomato"></img>
                <h4 className="site-title">RANCID <br />TOMATILLOS</h4>
            </div>
            <div className="nav-btn-container">
                <Link to='/'><button className="nav-btn home" onClick={() => getMovies}>HOME</button></Link>
                <button className="nav-btn">PROFILE</button>
            </div>
        </header >
    )
}

export default Header;