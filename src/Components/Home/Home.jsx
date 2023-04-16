import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './Home.css'
import pfPic from './me_justin_cat.jpg'

function Home() {
    return (
    <div>
      <Header />
      <div className='container'>
        <div className='left-div'>
          <h2>About Me</h2>
          <p><strong>Name:</strong> Shawn Han</p>
          <p><strong>Age:</strong> 20</p>
          <p><strong>Education: </strong>Pursuing a Computer Science degree at <a href="https://www.sfu.ca/">Simon Fraser University</a></p>
          <p><strong>Year: </strong>Finishing up 3rd year</p>
          <p><strong>Interests:</strong> Consumer Electronics, Technology, Video Games, Soccer, Working out</p>
        </div>
        <div className='right-div'>
          <h2>Contact Information</h2>
          <p><strong>If you would like to get in touch, the best place to reach me is my email:</strong> s1@sfu.ca</p>
          <p><strong>Phone Number:</strong> 604-123-1111</p>
          <p><a href="https://github.com/shawnh29"><strong>GitHub Link</strong></a></p>
          <img src={pfPic} alt="Image" height="200px" width="200px"/>
        </div>
      </div>
    </div>
    )
}

export default Home