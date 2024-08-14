import React from 'react'
import {FaGithubSquare, FaLinkedin, FaDribbbleSquare} from 'react-icons/fa'

const HeadSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/le%C3%B3n-cantalapiedra-arellano" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/leoncanare" target='_blank' rel="noopener noreferrer"><FaGithubSquare/></a>
        <a href="https://dribbble.com/lcanare" target='_blank' rel="noopener noreferrer"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeadSocials

// TODO enlace cambiar dribble.