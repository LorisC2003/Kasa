import React from 'react';
import './About-banner.scss'
import bannerImg from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2Banner.png";

const AboutBanner = () => (
    <section className='parent-banner'>
        <div className='banner'>
            <img src={bannerImg} className='banner-img' alt="Plage entourée de rochers"/>
        </div>
    </section>
);

export default AboutBanner;