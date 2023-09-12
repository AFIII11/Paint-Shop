import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './Profile.css'
import byoy from './Img/byoy.jpg';

export default function Profile() {
    const[state,setState]=useState((localStorage.getItem('user_data')) || {})
    const[input,setInput]=useState("")
    console.log(state);
    const id=state
    useEffect
  return (
    <div>
      <Nav></Nav>
      <div className="profbox">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className='ovr'>
      <form method="post">
                    <div class="form-row mt-5">
                        <div class="form-group col-md-6">
                            <label>NAME</label>
                            <input type="text" class="form-control" id="fname" name="name"/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>CATAGORIES</label>
                            <select class="custom-select" id="validationDefault04"   name="catagories" >
                                <option selected disabled value="" name="groundspace">Choose...</option>
                                <option>STANDARD</option>
                                <option>MATTE</option>
                                <option>GLOSSY</option>
                                <option>METALIC</option>
                                <option>PEARSENT</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>COLOUR</label>
                            <input type="text" class="form-control" id="hname" name="color"/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>BRANDS</label>
                            <select class="custom-select" id="validationDefault04"  name="brands">
                                <option selected disabled value="">Choose...</option>
                                <option >INDIGO</option>
                                <option >APEX</option>
                                <option >DUREX</option>
                                <option >ASIAN</option>
                                <option >BERGER</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>CONTACT</label>
                        <input type="tel" class="form-control" id="phone" placeholder="Contact No" name="contact"/>
                    </div>
                   </form>
                   </div>
              
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <div className="profirstbox">
            <h4> <i class="bi bi-pencil mr-2 ml-3"></i>Edit Profile</h4>
        </div>
        <div className="secprofibox">
            <h2 className='ml-4 mt-2'></h2>
            <img className='imge' src={byoy} alt="" />
            
              <div className="formbox">
              <h5>User_id d:10 {state.user_id}</h5>  
              <h5>Name:Muthu {state.name}</h5>
              <h5>Contact:9988776655 {state.contact}</h5>
              <h5>Email:Muthu@gmail.com {state.email}</h5>  
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Edit Profile
</button>



            </div>
            </div>            
    </div>
    </div>
    
  )
}
