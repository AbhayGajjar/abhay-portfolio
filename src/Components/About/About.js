import React from "react";
import "./About.css";
import me from "../../assets/abhay1.jpeg";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={me} alt="my img" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Profession</h5>
              <small>a student</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+completed</small>
            </article>
          </div>
          <p id="para">
           Hey, I'm a Front-end Developer with experience in REACT.JS.i'm designer .Moreover,I’m eager to learn new development skills/technologies like NEXT JS
and WEB 3.0 ( Includes SANITY IO & SOLIDITY ) a part from this,I am quite good in Networking  &  ADA
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
