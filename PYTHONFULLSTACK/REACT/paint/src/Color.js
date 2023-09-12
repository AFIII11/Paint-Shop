import React from 'react'
import './Color.css';
import brushes from './Img/brushes.png';
import Nav from './Nav';

export default function Color() {
  return (
    <div className='container'>
        <img src={brushes} className='clr'></img>
        <center><p class="a">RED</p></center>
paint/src/Home.css    <center><p class="b">ORANGE</p></center>
    <center><p class="c">YELLOW</p></center>
    <center><p class="d">GREEN</p></center>
    <center><p class="e">BLUE</p></center>
    <center><p class="f">VIOLET</p></center>
    <center><p class="g">PURPLE</p></center>
    <Nav></Nav>
    </div>
  )
}
