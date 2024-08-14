import React from "react";
import "./services.css";
import BOS from "../../assets/bosonit-letters-logo.png";
import AEG from "../../assets/aegon-logo.png";
// import { BsPatchCheckFill, BsPatchMinusFill } from "react-icons/bs";
import { FaDotCircle, FaJira } from "react-icons/fa";
import {
  SiAngular,
  SiTypescript,
  SiSass,
  SiCss3,
  SiStorybook 
} from "react-icons/si";

const Services = () => {
  return (
    <section id="services">
      <h5>Work Timeline</h5>
      <h2>Experience</h2>
      <div className="container services__container">
        {/* BOSONIT 1 */}
        <article className="service">
        <div className="service__head">
            <div className="service__head-logo">
              <img className="bosonit-logo" src={BOS} alt="logo" />
            </div>
            <div className="service__head-text">
              <h3>[ Staff-IT ] Frontend Developer</h3>
              <h5><b>May. 2022 - Oct. 2022</b> · 6 Months</h5>
            </div>
          </div>
          <ul className="service__list">
          <div className="service__list-description">
            <h3>Staff-IT (Internal project) Web application/product for the management of the company's own employees and clients.</h3>
          </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of new functionalities and maintenance in ANGULAR.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Integration between web application modules.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Code maintenance focused on ANGULAR exagonal architecture.</p>
            </li>
          </ul>
          <h3 className="service__inside-title">Outstanding skills:</h3>
          <ul className="service__apatitude-list">
            <li className="service__apatitude">
              <SiAngular className="service__aptittude-icon" />
              Angular
            </li>
            <li className="service__apatitude">
              <SiTypescript className="service__aptittude-icon" />
              Typescript
            </li>
            <li className="service__apatitude">
              <SiCss3 className="service__aptittude-icon" />
              Css3
            </li>
          </ul>
        </article>
        {/* AEGON */}
        <article className="service">
          <div className="service__head">
            <div className="service__head-logo">
              <img src={AEG} alt="logo" />
            </div>
            <div className="service__head-text">
              <h3>[ AEGON - Private Area ] Frontend Developer</h3>
              <h5><b>Oct. 2022 - Jul. 2024</b> · 1 Year 10 Months</h5>
            </div>
          </div>
          <ul className="service__list">
          <div className="service__list-description">
            <h3>Web application for the customer area of Aegon Spain and management of a library of components customised for the brand.</h3>
          </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development and maintenance of the main web application in ANGULAR.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development, integration and maintenance of micro Front-ends.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of a component library in ANGULAR with STORYBOOK.</p>
            </li>
          </ul>
          <h3 className="service__inside-title">Outstanding skills:</h3>
          <ul className="service__apatitude-list">
            <li className="service__apatitude">
              <SiAngular className="service__aptittude-icon" />
              Angular
            </li>
            <li className="service__apatitude">
              <SiTypescript className="service__aptittude-icon" />
              Typescript
            </li>
            <li className="service__apatitude">
              <SiStorybook  className="service__aptittude-icon" />
              StoryBook
            </li>
            <li className="service__apatitude">
              <SiSass className="service__aptittude-icon" />
              Saas
            </li>
            <li className="service__apatitude">
              <FaJira className="service__aptittude-icon" />
              Jira
            </li>
          </ul>
        </article>
        {/* BOSONIT 2 */}
        <article className="service">
        <div className="service__head">
            <div className="service__head-logo">
              <img className="bosonit-logo" src={BOS} alt="logo" />
            </div>
            <div className="service__head-text">
              <h3>[ CAE ] Frontend Developer</h3>
              <h5><b>Jul. 2024 - Currently working</b></h5>
            </div>
          </div>
          <ul className="service__list">
          <div className="service__list-description">
            <h3>Development of the website of the CAE project, a platform for the management of environmental aid for the Spanish government.</h3>
          </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of a project from scratch in ANGULAR.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
