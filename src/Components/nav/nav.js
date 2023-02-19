import React, { useState } from 'react';
import "./nav.css";
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";


const Nav = () => {
  const [active, setactive] = useState("#")
  return (
    <div className="nav">
      <a href="#"  onClick={()=>setactive("#")} className={active === "#" ? "active" :""} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactive("#about")} className={active === "#about" ? "active" :""} ><AiOutlineUser/></a>
      <a href="#experience"  onClick={()=>setactive("#experience")} className={active === "#experience" ? "active" :""} ><BiBook/></a>
      <a href="#services"  onClick={()=>setactive("#services")} className={active === "#services" ? "active" :""}><RiServiceLine/></a>
      <a href="#contact"  onClick={()=>setactive("#contact")} className={active === "#contact" ? "active" :""}><BiMessageSquareDetail/></a>
    </div>
  )
}

export default Nav