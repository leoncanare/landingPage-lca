import React from 'react'
import CV from '../../assets/cv.pdf'
import './headerbtns.css'

const headBtns = () => {
  return (
    <div className='header__buttons'>
        <a href={CV} download className='btn'> Descarga mi CV </a>
        <a href="#contact" className='btn btn-primary'> ¡Hablemos! </a>
        <button class="btn1"><span>Hover me!</span></button>

    </div>
  )
}

export default headBtns