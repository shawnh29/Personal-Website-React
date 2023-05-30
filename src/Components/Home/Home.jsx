import React, { useEffect, useState } from 'react'
import './Home.css'
import pfPic from './me_justin_cat.jpg'


function Home() {
  const initialVal = () => Number(localStorage.getItem("current_val")) || 0
  const [buttonVal, setButtonVal] = useState(initialVal)

  const [fact, setFact] = useState("")
  const [moreInfoOpen, setMoreInfoOpen] = useState(false)

  function buttonClick() {
    setButtonVal(buttonVal+1)
  }

  function resetVal() {
    setButtonVal(0)
  }

  useEffect(() => {
    localStorage.setItem("current_val", JSON.stringify(buttonVal))
  }, [buttonVal])

  useEffect(() => {
    getFact()
  }, [])

  function getFact() {
    console.log("getting fact..")
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => {
        setFact(data.value)
      })
  }

  function showInfo() {
    console.log("showing API info")
    setMoreInfoOpen(!moreInfoOpen)
  }

    return (
      <div className='main-container'>
        <div className='left-div' id='left-div'>
          <h2>About Me</h2>
          <p><strong>Name:</strong> Shawn Han</p>
          <p><strong>Age:</strong> 20</p>
          <p><strong>Education: </strong>Pursuing a Computer Science degree at <a href="https://www.sfu.ca/">Simon Fraser University</a></p>
          <p><strong>Year: </strong>Finishing up 3rd year</p>
          <p><strong>Interests:</strong> Consumer Electronics, Technology, Video Games, Soccer, Working out</p>
        </div>
        <div className='right-div' id='right-div'>
          <h2>Contact Information</h2>
          <p><strong>If you would like to get in touch, the best place to reach me is my email:</strong> s1@sfu.ca</p>
          <p><strong>Phone Number:</strong> 604-123-1111</p>
          <p><a href="https://github.com/shawnh29"><strong>GitHub Link</strong></a></p>
          <img src={pfPic} alt="pic" height="200px" width="200px"/>
        </div>
        <div className='third-div' id='third-div'>
          <h3>Cookie Clicker Game :)</h3>
            <p>{buttonVal}</p>
            <button onClick={buttonClick}>Increment</button>
            <button onClick={resetVal}>Reset</button>
        </div>
        <div className='random-fact-div' id='random-fact-div'>
          <div className='fact-header-div'>
            <h3 className='fact-header'>Random Fact Generator!</h3>
            <button className='more-info-button' onClick={showInfo}>More Info +</button>
          </div>
          <button onClick={getFact}>Generate Fact</button>
          <p className='fact'>{fact}</p>
          {(moreInfoOpen) ? (<div>This section makes use of the <a href="http://chucknorris.io">chucknorris.io</a> random fact generator API!</div>) : (null)}
        </div>
      </div>
    )
}

export default Home