import React from 'react';
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"

const headerSocial = () => {
  return (
    <div className='header__social'>

        <a href="https://github.com/Abhay Gajjar" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/abhay_7203/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headerSocial