import React from 'react'
import './nav.css'
import { useState } from 'react'
//import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {ImBooks} from 'react-icons/im'
import {MdDesignServices} from 'react-icons/md'
import {RiMessage2Fill,RiHome3Fill} from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" 
      onClick={()=> setActiveNav('#home')} 
      className={activeNav === '#home' ? 'active' : ''}>
        <RiHome3Fill/></a>
      <a href="#about"
      onClick={()=> setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}>
        <SiAboutdotme/></a>
      <a href="#experience"
      onClick={()=> setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}>
        <ImBooks/></a>
      <a href="#portfolio"
      onClick={()=> setActiveNav('#services')} 
      className={activeNav === '#services' ? 'active' : ''}>
        <MdDesignServices/></a>
      <a href="#contact"
      onClick={()=> setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}>
        <RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav