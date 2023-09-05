import React, { useState } from 'react'
import './Register.css';
import Nav from './Nav'
import axios from 'axios'
export default function Registration() {
  const [input,setInput] =useState({
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    password:''
  })


  const inputChange=(event)=>{
  const{name,value}=event.target
  setInput({...input,[name]:value})
  }
  const submit=()=>{
   axios.post('http://127.0.0.1:8000/api/UserRegisterSerializerAPIView',input).then((response)=>{
    console.log(response);
   }).catch((error)=>{
    console.log(error);
   })
  }
  return (
    <>
    <Nav/>
    <div class="bigs">
    <div class="small">
        <h2>Register </h2>
      <div class="row">
        <div class="col1">
          <h4>Firstname: </h4>
          <h4>Lastname: </h4>
          <h4>Email: </h4>
          <h4>Username: </h4>
          <h4>Password: </h4>
          <h4>Contact: </h4>
        </div>
        <div class="col2">
          <input type="text" class="one" placeholder='Enter Your Firstname' name='Name' onChange={inputChange}/>
          <input type="text" class="one" placeholder='Enter Your Lastname' name='lastname' onChange={inputChange}/>
          <input type="email" class="one" placeholder='Enter Your Email Address' name='Email' onChange={inputChange}/>
          <input type="username" class="one" placeholder='Enter Your Username' name='username' onChange={inputChange}/>
          <input type="password" class="one" placeholder='Enter Your Password' name='password' onChange={inputChange}/>
          <input type="tel" class="one" placeholder='Enter Your Phone Number' name='Phone_Number' onChange={inputChange}/>
        </div>
      </div>
      <div class="col3">
        <input className='bt' type="submit" value="Login" onClick={submit}></input>

      </div>
    </div>
  </div>
  </>
  )
}
