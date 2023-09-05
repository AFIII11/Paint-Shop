import React, { useState } from 'react'
import Nav from './Nav'
import './Form.css';
import axios from 'axios';
export default function Form() {
  const [input,setInput] =useState([])
    
    
      const inputChange=(event)=>{
        const{name,value}=event.target
        setInput({...input,[name]:value})
       
        }
      const submit=()=>{
       axios.post('http://127.0.0.1:8000/api/AddProduct',input).then((response)=>{
        console.log(response);
       }).catch((error)=>{
        console.log(error);
       })
      }
  return (
    <div class="container">
        <div class="row justify-content-center boxm">
            <Nav></Nav>
                  <form method="post" action="{% url 'Adddata' %}">
                    
                    <div class="form-row mt-5">
                        <div class="form-group col-md-6">
                            <label> NAME</label>
                            <input type="text" class="form-control" id="fname" name="name"onChange={inputChange}/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>CATAGORIES</label>
                            <select class="custom-select" id="validationDefault04" onChange={inputChange}  name="catagories" >
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
                            <input type="text" class="form-control" id="hname" name="color"onChange={inputChange}/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>BRANDS</label>
                            <select class="custom-select" id="validationDefault04" onChange={inputChange} name="brands">
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
                        <input type="tel" class="form-control" id="phone" placeholder="Contact No" name="contact"onChange={inputChange}/>
                    </div>
                   
                    <button type="button" class="btn btn-primary" onClick={submit}>Submit</button> 
                </form>
            </div>
        </div>
        
  )
}
