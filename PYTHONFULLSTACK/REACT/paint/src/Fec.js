import React from 'react'
import './Fec.css';
import house from './Img/house.png';
import painting from './Img/painting.png';
import carpainting from './Img/carpainting.png'
import Nav from './Nav';

export default function Fec() {
  return (
    <div class="container">
        <Nav></Nav>
        <div class="card-deck hv">
          <div class="card">
            <center><img src={house}  class="card-img-top" alt="..."></img></center>
            <div class="card-body">
             <center> <h4 class="card-title">Home paintings</h4></center>
             <p class="card-text text-black">With supporting text below as a natural lead-in to additional content.</p>
              
            </div>
          </div>
          <div class="card">
              <center><img src={painting}  class="card-img-top" alt="..." className="img-fluid"></img></center>
            <div class="card-body">
             <center><h4 class="card-title">Cars Paintings</h4></center>
             <p class="card-text text-black">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div class="card">
              <center><img src={carpainting} class="card-img-top" alt="..."></img></center>
            <div class="card-body">
             <center> <h4 class="card-title">Spray Paintings</h4></center>
             <p class="card-text text-black">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
      </div>
        </div>
        



  )
}
