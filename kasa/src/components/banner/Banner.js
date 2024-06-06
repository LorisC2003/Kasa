import React from 'react';
import './Banner.scss'
import bannerImg from "../../assets/images/Image source 1Banner.png";

const Banner = () => (
    <section className='parent-banner'>
        <div className='banner'>
            <img src={bannerImg} className='banner-img' alt="Plage entourée de rochers"/>
            <p className='banner-text'>Chez vous, partout et ailleurs</p>
        </div>
    </section>
);

export default Banner;