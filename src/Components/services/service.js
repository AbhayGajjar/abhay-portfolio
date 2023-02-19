import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const service = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p> User research and usability testing</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                Write Clearly:This means making UI copy intuitive and
                user-friendly.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Agile methodology </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Web/Application Developments</p>
            </li>
          </ul>
        </article>
        {/* End of UI/Ux  */}
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Aim for a responsive web/App design</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Hosting and Deploying</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Be versatile</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Always test and validate your projects</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Customize Your Apps</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Target each of your personas</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Include the essential content</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Write compelling web copy</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Develop a content schedule</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  );
};

export default service;
