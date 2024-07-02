import React from 'react';
import './About-banner.scss'
import bannerImg from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2Banner.png";

const AboutBanner = () => (
    <section className='parent-banner-about'>
        <div className='banner-about'>
            <img src={bannerImg} className='banner-about-img' alt="Plage entourée de rochers"/>
        </div>
    </section>
);

export default AboutBanner;