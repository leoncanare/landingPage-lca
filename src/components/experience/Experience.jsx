import React from "react";
import "./experience.css";
import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiSass,
  SiCss3,
  SiHtml5,
  SiReact,
  SiBootstrap,
  SiMongodb,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>These are all</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        {/* FRONTEND XP */}
        <div className="experience__frontend">
          <h3>Frontend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSass className="experience__details-icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND XP */}
        <div className="experience__backend">
          <h3>Backend Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
