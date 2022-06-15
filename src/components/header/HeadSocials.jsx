import React from 'react'
import {FaGithubSquare, FaLinkedin, FaDribbbleSquare} from 'react-icons/fa'

const HeadSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedi.com" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com" target='_blank' rel="noopener noreferrer"><FaGithubSquare/></a>
        <a href="https://youtube.com" target='_blank' rel="noopener noreferrer"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeadSocials

// TODO 3 enlace cambiar.