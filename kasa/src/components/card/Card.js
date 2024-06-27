import React, { useEffect, useState } from 'react';
import './Card.scss'
import data from '../../logements.json'
import { Link } from 'react-router-dom'

const Card = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(data);
  }, []);

  return (
        <div className="cards">
              {logements.map((logement) => (
                  <Link to={`/product/${logement.id}`} key={logement.id} className="card-link">
                      <div key={logement.id} className="card">
                        <img src={logement.cover} alt={logement.title} className="card-image" />
                        <h1 className="card-title">{logement.title}</h1>
                      </div>
                  </Link>
              ))}
        </div>
  );
}

export default Card