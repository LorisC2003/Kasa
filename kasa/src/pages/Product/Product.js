import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../logements.json';
import ImageSlider from "../../components/slider/Slider";
import RatingStars from "../../components/ratingStars/RatingStars";
import Collapse from "../../components/collapse/Collapse";
import './Product.scss';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const logement = data.find((item) => item.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/*');
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <section className="product-page">
            <ImageSlider images={logement.pictures} />
            <div className='product-infos'>
                <div className='product-description'>
                    <div className='product-title'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <div className="product-tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='profile-rate'>
                    <div className='product-profile'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="Photo de profil" />
                    </div>
                    <RatingStars rating={logement.rating} />
                </div>
            </div>
            <div className='product-collapse'>
                <div className="collapse-item">
                    <Collapse title="Description">
                        <p className='collapse-p'>{logement.description}</p>
                    </Collapse>
                </div>
                <div className="collapse-item">
                    <Collapse title="Équipement">
                        <div>
                            {logement.equipments.map((tag, index) => (
                                <li key={index} className='collapse-li'>{tag}</li>
                            ))}
                        </div>
                    </Collapse>
                </div>
            </div>
        </section>
    );
};

export default Product;
