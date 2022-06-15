import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";
// import { MdGrade } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Que saber</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Estudios</h5>
              <small>Desarrollo de aplicaciones multiplataforma</small>
            </article>
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Centro</h5>
              <small>Universitat Oberta de Cataluña </small>
            </article>
            {/* <article className="about__card">
              <MdGrade className="about__icon" />
              <h5>Nivel</h5>
              <small>Junior</small>
            </article> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            alias accusamus aut suscipit quia quam voluptatibus repudiandae
            explicabo perferendis eius possimus fugit, numquam mollitia harum
            eos aperiam. Reprehenderit, et corporis?
          </p>
          <a href="#contact" className="btn btn-primary">
            ¡Hablemos!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
