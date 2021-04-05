import React from 'react';
import Logo from '../Logo/logo.png';

const About =() =>{
  return( 
    <>
    <h2 className="style">Our Team</h2>
    <div class="row">
    <div class="column">
    <div class="card">
    <img src={Logo} alt="PRATEEK"></img>
    <div class="container">
        <h2>Prateek Singh</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me.</p>
        <p>Prateek@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
    </div>

    <div class="column">
    <div class="card">
      <img src={Logo} alt="ANKIT" ></img>
      <div class="container">
        <h2>Ankit Singh</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me.</p>
        <p>Ankit@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
      <img src={Logo} alt="John" ></img>
      <div class="container">
        <h2>Shri Krishn</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me.</p>
        <p>Krishn@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  </div>

    </>
  );
}

export default About;
