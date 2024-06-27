import React from 'react';
import './Error.scss'
import ErrorImg from "../../assets/images/404Error.png"
import { Link } from 'react-router-dom';

const Error = () => (
    <section className='error-page'>
        <img src={ErrorImg} alt="Error 404"/>
        <p >Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
)

export default Error