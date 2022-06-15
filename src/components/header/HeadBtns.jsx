import React from 'react'
import CV from '../../assets/cv.pdf'

const headBtns = () => {
  return (
    <div className='header__buttons'>
        <a href={CV} download className='btn'> Descarga mi CV </a>
        <a href="#contact" className='btn btn-primary'> ¡Hablemos! </a>
    </div>
  )
}

export default headBtns