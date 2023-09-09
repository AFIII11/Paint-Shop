import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Form.css'
import axios from 'axios'
import Nav from './Nav'

export default function Editpaint() {
    const {id} = useParams()
    console.log(id);

    const [state,setState] = useState({})

    const inputChange = (event)=>{
        const {name,value} = event.target
        setState({...state,[name]:value})
    }
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Editproduct/${id}`).then((response)=>{
            console.log(response.data.data[0]);
            setState(response.data.data[0])
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    const submit = ()=>{
        console.log(state);
        axios.put(`http://127.0.0.1:8000/api/Update_product/${id}`,state).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    console.log(state)
  return (
    <div>
        
      <div class="container">
      <Nav></Nav>
        <div class="row justify-content-center boxm">
                  <form method="post">
                    
                    <div class="form-row mt-5">
                        <div class="form-group col-md-6">
                            <label> NAME</label>
                            <input type="text" class="form-control" id="fname" name="name" defaultValue={state.name} onChange={inputChange}/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>CATAGORIES</label>
                            <select class="custom-select" id="validationDefault04" onChange={inputChange}  name="catagories" defaultValue={state.catagories} >
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
                            <input type="text" class="form-control" id="hname" name="color" defaultValue={state.color} onChange={inputChange}/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>BRANDS</label>
                            <select class="custom-select" id="validationDefault04" onChange={inputChange} name="brands" defaultValue={state.brands}>
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
                        <input type="tel" class="form-control" id="phone" placeholder="Contact No" name="contact" defaultValue={state.contact} onChange={inputChange}/>
                    </div>
                   
                    <button type="button" class="btn btn-primary" onClick={submit}>Submit</button> 
                </form>
            </div>
        </div>

    </div>
  )
}
