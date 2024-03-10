import React from 'react'
import './Hero.css'
import hero from '../Assert/hero.png'
import herorightimg from "../Assert/herorightimg.png"

const Hero = () => {
  
  return (
    <>
    <div className="hero">
      <div className="hero-left ">
      <h1>Medium 2-topping Burger</h1>
        <h2>ARE YOU <br/>HUNGRY ?</h2>
        <p>As well known and we are very busy all days advice you advice you to call us before arriving</p>
        <div className="button">
        <button className="learnmorebtn">Learn More</button>
        <button className="menubtn">Explore Menu</button>
        </div>
        <div className="img">
        <img src={hero} alt="" />
        </div>
        <div className="hero-right">
<div className="image_conatiner">
  <h1>Welcome to Foodie</h1>
</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero