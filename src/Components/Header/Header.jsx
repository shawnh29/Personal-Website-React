import React, { useEffect } from 'react';
import './Header.css'
import {Link, useNavigate} from 'react-router-dom'

function Header({name}) {

  let navigate = useNavigate()

  function scrollToAbout(e) {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector('#left-div').offsetTop,
      behavior: 'smooth'
    })
  }

  function scrollToContact(e) {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector('#right-div').offsetTop,
      behavior: 'smooth'
    })
  }
  
  return (
    <header className='header'>
      <h1 className='header-title'>{name}'s Homepage</h1>
      <nav className='header-nav'>
        <ul>
          <li><Link id='transparent-button' to={"/"}>Home</Link></li>
          <li><Link id='transparent-button' onClick={(e) => {scrollToAbout(e)}}>About</Link></li>
          <li><Link id='transparent-button' onClick={(e) => {scrollToContact(e)}}>Contact</Link></li>
          <li><Link id='transparent-button' to={"/login"}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
