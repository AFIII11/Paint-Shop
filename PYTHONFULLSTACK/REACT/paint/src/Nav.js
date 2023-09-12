import React from 'react'
import './Nav.css';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
  const nav = useNavigate()
    const role=localStorage.getItem('role')
    const logout = ()=>{
      localStorage.removeItem('role')
      
      nav('/')

    }
  return (
  <>



    {role ==="admin"?
    <div className='nv'>
      <nav class="navbar navbar-expand-lg navbar-dark" >
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link text-dark" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-dark"  onClick={logout}>logout<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-dark" href="/Contact">Contact View<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/Color">Paint And Colors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/Form">Add</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-dark" href="/Fec">Fecilities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-dark" href="/View">View</a>
      </li>
      
     
    </ul>
  </div>
</nav>
    </div>
    :
    role=="user"?
    <div className='nv'>
      <nav class="navbar navbar-expand-lg navbar-dark" >
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link text-dark" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-dark"  onClick={logout}>logout<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/Color">Paint And Colors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/Fec">Fecilities</a>  
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/profile">Profile</a>  
      </li>
    </ul>
  </div>
</nav>
    </div>
    :
    <div className='nv'>
      <nav class="navbar navbar-expand-lg navbar-dark" >
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link text-dark" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-dark" href="/Login">Login<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-dark" href="/Register">Register<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/Color">Paint And Colors</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link  text-dark" href="/Fec">Fecilities</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  }
  </>
  )
}
