import React from 'react';
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/abhi.jpeg";
import HeaderSocial from "./headerSocial";

const header = () => {
  return (
    <div className='header'>
      <div className="container header__container">
        <h5>Hey I'm</h5>
        <h1>Abhay Gajjar</h1>
        <h5 className="text-light">Frontend/React Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={me} alt="abhay Profile Photo" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </div>
  )
}

export default header