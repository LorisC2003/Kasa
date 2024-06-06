import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from '../../assets/images/LOGOKasa.jpg'

const Header = () => (
    <header className='header'>
        <img className='header-img' src={logo} alt="Logo Kasa"/>
        <nav>
            <ul>
                <li className='header-li'><Link className='header-link' to="/">Accueil</Link></li>
                <li className='header-li'><Link className='header-link' to="/about">A Propos</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
