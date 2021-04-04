import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-name'>
                <FaGithub />
                <a href="https://github.com/percworld">Chuck Morris</a>
            </div>
            <div className='footer-name'>
                <FaGithub />
                <a href="https://github.com/jgiwinski">Julia Iwinski</a>
            </div>
        </footer>
    )
}

export default Footer;