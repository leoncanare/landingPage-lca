import React from 'react'
import './footer.css'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>lcanare</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; lcanare. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer