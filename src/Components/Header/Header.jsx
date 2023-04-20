import React from 'react';
import './Header.css'

function Header({name}) {

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

  function scrollToThird(e) {
    e.preventDefault()
    window.scrollTo({
      top: document.querySelector('#third-div').offsetTop,
      behavior: 'smooth'
    })
  }
  
  return (
    <header className='header'>
      <h1 className='header-title'>{name}'s Homepage</h1>
      <nav className='header-nav'>
        <ul>
          <li><button id='transparent-button' onClick={(e) => {scrollToThird(e)}}>Home</button></li>
          <li><button id='transparent-button' onClick={(e) => {scrollToAbout(e)}}>About</button></li>
          <li><button id='transparent-button' onClick={(e) => {scrollToContact(e)}}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
