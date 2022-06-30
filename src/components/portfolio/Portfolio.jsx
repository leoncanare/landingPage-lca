import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/proyect1.png";
import IMG2 from "../../assets/dotsGif.gif";

import {FaEye} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'

const dataProyects = [
  {
    id: 1,
    image: IMG1,
    title: "Bases en Angular",
    github: "https://github.com/leoncanare/FormacionFRONT/tree/main/BOSNITFormacion-NuevoItinerario/AngularF%26ReactiveP",
    demo: "https://6299febc6e9da56c5c7d85eb--angularejercicies-leoncanare.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Futuro proyecto",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels",
  },
  // {
  //   id: 3,
  //   image: IMG2,
  //   title: "Titulo proyecto",
  //   github: "https://github.com",
  //   demo: "https://dribble.com/Alien_pixels",
  // },
  // {
  //   id: 4,
  //   image: IMG2,
  //   title: "Titulo proyecto",
  //   github: "https://github.com",
  //   demo: "https://dribble.com/Alien_pixels",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {dataProyects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-btns">
                <a href={github} target="_blank" rel="noopener noreferrer">
                <FiGithub/></a>
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <FaEye/>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
