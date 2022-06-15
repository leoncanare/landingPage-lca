import React from "react";
import "./services.css";
import { BsPatchCheckFill, BsPatchMinusFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>Trabajo a ofrecer</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchMinusFill className="service__list-icon minus" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchMinusFill className="service__list-icon minus" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchMinusFill className="service__list-icon minus" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* WEB CONTENT */}
        <article className="service">
          <div className="service__head">
            <h3>Contenido WEB</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchMinusFill className="service__list-icon minus" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchMinusFill className="service__list-icon minus" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Creacion de Contenido</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
