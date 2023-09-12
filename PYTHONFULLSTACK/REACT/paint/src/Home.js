import React, { useState } from 'react'
import Nav from './Nav';
import splash from './Img/splash.png'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';

export default function Home() {
  const nav=useNavigate()
 const [state,setState] = useState()

const inputchange = (event)=>{
  const {name,value} = event.target
  setState({...state,[name]:value})
}
const submit = ()=>{
  axios.post('http://127.0.0.1:8000/api/AddContact',state).then((response)=>{
    console.log(response);
    // toast.success(response.data.message, {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    // });
    // setTimeout(ff,900)
    // function ff(){
    //   nav('/')
    // }
    

  }).catch((error)=>{
    console.log(error);
    //   toast.error(error.response.data.message, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });

    })
console.log(state);
  }
  return (
    <div>
        <img src={splash} width="400px"></img>
      <Nav></Nav>
      <div class="container">
        <ToastContainer></ToastContainer>
        <h3>A.F PAINTS</h3>
        <h5>COLOUR YOUR DREAM.</h5>
      </div>
      <section class="contact pt-5" id="contact">
      <h2 class="heading text-dark text-center ">Contact <span>Me!</span></h2>
  <div class="container">
  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="First Name" name='fname' onChange={inputchange}></input>
      <input type="text" placeholder="Last Name" name='lname' onChange={inputchange}></input>
    </div>
    <div class="input-box">
      <input type="email" placeholder="Email" name='email' onChange={inputchange}></input>
      <input type="number" placeholder="Phone Number" name='phonenumber' onChange={inputchange}></input>
      <textarea placeholder="Your Message" cols="30" name='message' rows="8" onChange={inputchange}></textarea>
      <input type="button" value="Send " class="btn" onClick={submit}></input>
    
    </div>
  </form>
</div>
</section>
      
      
    </div>
  )
}
