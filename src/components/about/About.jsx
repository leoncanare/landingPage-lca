import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";
// import { MdGrade } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
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
              <h5>Studies</h5>
              <small>Cross-platform application development</small>
            </article>
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>University</h5>
              <small>Universitat Oberta de Cataluña </small>
            </article>
            {/* <article className="about__card">
              <MdGrade className="about__icon" />
              <h5>Nivel</h5>
              <small>Junior</small>
            </article> */}
          </div>
          <div className="text">
            <p>
            Hello, my name is León, I currently live in Pamplona, Spain. As a
            mere description I have always been someone passionate about
            artistic touch in things, to be meticulous and creative. 
            <br/><br/>
            As a professional goal I would love to work individually or at a business level, looking to make the client happy, fulfilling 100% with the expectations and their goal. 
            <br/><br/>
            I think this is one of the traits that
            make the difference between creating a mere product and a well done
            job with identity.
          </p>
          </div>
          
          {/* <a href="#contact" className="btn btn-primary">
            ¡Hablemos!
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
