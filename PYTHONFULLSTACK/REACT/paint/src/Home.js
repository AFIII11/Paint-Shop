import React, { useState } from 'react'
import Nav from './Nav';
import splash from './Img/splash.png'
import './Home.css';

export default function Home() {
  return (
    <div>
        <img src={splash} width="400px"></img>
      <Nav></Nav>
      <div class="container">
        <h3>A.F PAINTS</h3>
        <h5>COLOUR YOUR DREAM.</h5>
      </div>
      
    </div>
  )
}
