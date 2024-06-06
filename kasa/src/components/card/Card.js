import React, { useEffect, useState } from 'react';
import './Card.scss'
import data from '../../logements.json'

const Card = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(data);
  }, []);

  return (
      <div className="cards">
        {logements.map((logement) => (
            <div key={logement.id} className="card">
              <img src={logement.cover} alt={logement.title} className="card-image" />
              <h1 className="card-title">{logement.title}</h1>
            </div>
        ))}
      </div>
  );
}

export default Card