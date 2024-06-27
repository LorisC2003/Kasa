import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../logements.json'
import ImageSlider from "../../components/slider/Slider";
import RatingStars from "../../components/ratingStars/RatingStars";
import Collapse from "../../components/collapse/Collapse";
import './Product.scss'

const Product = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

    return (
        <section className="product-page">
            <ImageSlider />
            <div className='description-profile'>
                <div className='product-title'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className='product-profile'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="Photo de profile"/>
                </div>
            </div>
            <div className='tags-rate'>
                <div className="product-tags">
                    {logement.tags.map((tag, index) => (
                        <span key={index} >{tag}</span>
                    ))}
                </div>
                <RatingStars rating={logement.rating} />
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
