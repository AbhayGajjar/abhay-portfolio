import React from 'react';
import "./footer.css";
import {FaGithub} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo'>Abhay Gajjar</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
      
      <a href="https://github.com/abhay_7203" target="_blank" rel="noopener noreferrer"><FaGithub className='footer__social__icon' /></a>
        <a href="https://www.instagram.com/abhay_7203/" target="_blank" rel="noopener noreferrer"><FiInstagram className='footer__social__icon' /></a>
        <a href="https://twitter.com/abhi_dell?t=YMsFLmYMAzQ1Xh8cchKFbw&s=08" target="_blank" rel="noopener noreferrer"><IoLogoTwitter className='footer__social__icon'  /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abhay Gajjar , All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer