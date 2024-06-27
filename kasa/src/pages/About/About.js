// src/pages/About.js
import React from 'react';
import AboutBanner from "../../components/about-banner/About-banner";
import Collapse from "../../components/collapse/Collapse";

const About = () => (
    <div>
        <AboutBanner />
        <div className="App">
            <Collapse title="Fiabilité">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>
        </div>
        <div className="App">
            <Collapse title="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
        </div>
        <div className="App">
            <Collapse title="Service">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
        </div>
        <div className="App">
            <Collapse title="Sécurité">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
        </div>
    </div>
);

export default About;
