import React, { useState } from 'react'
import './Login.css';
import Nav from './Nav';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export default function Login() {
const navigate=useNavigate()

  const [input,setInput]=useState({
    username:'',
    password:'',
  })
  const inputChange=(event)=>{
  const {name,value}=event.target
  setInput({...input,[name]:value})

}
const submit=()=>{
  axios.post('http://127.0.0.1:8000/api/LoginUserAPIView',input).then((response)=>{
    localStorage.setItem('login',JSON.stringify(response.data.data.login_id))
    localStorage.setItem('username',JSON.stringify(response.data.data.username))
    localStorage.setItem('userid',JSON.stringify(response.data.data.user_id))
    localStorage.setItem('role',response.data.data.role)
    localStorage.setItem('user_data',response.data.data.user_id)
    console.log(response);
    console.log(input);
    if(response.data.data.role=='admin'){
      navigate("/")
    }
    else if(response.data.data.role=='user'){
      navigate('/')
    }
   
  }).catch((error)=>{
    console.log(error.response.data.data);
    toast.success(error.response.data.data, {
      
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
      });
  })
}


  return (
    <>
    <Nav></Nav>
    <div className='box'>
      <ToastContainer toastStyle={{ backgroundColor: "crimson" }} ></ToastContainer>
      <h1>Login</h1>
      <input type="text" placeholder='Enter Your Username' name='username' onChange={inputChange}></input><br></br><br></br>
      <input  type="text" placeholder='Enter Your Password' name='password' onChange={inputChange}></input><br></br><br></br>
      <input className='but' type='submit' value='Login' onClick={submit}></input>
    
    </div>
</>
  )
}
