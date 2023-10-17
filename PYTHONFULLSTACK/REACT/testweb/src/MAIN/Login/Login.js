import React from 'react'
import './Login.css'
import Nav from '../../Nav'

export default function Login() {
  return (
    <>
    <Nav></Nav>
    
    <div className='lgform'>
        
        <div className="card " style={{width:'500px'}}>
          
  <h2>LOGIN HERE</h2>
 
  <div class="card-body">
  <form>
  <div class="form-group">
    
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
    <h6>Forgot Password?</h6>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

    
    </form>
  </div>
</div>
      
      
    </div>
    </>
  )
}
