import React from 'react';
import './Footer.scss'
import logo from '../../assets/images/LOGOKasaW.png'


const Footer = () => (
    <footer className='footer'>
        <img src={logo} className='footer-logo' alt="Logo Kasa"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;
