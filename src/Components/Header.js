import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
        <img src='./img/logoOk.svg' alt="Logo" className="logo" />
        <p className='Sentite'>Sentite como en tu hogar</p>
        <Navbar/>
    </div>
  )
}

export default Header