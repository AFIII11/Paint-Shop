import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './Contact.css';
import axios from 'axios';

export default function Contact() {
    const [input,setInput] = useState({})



const response = (val)=>{
    const id =val
    console.log(id);
    axios.get(`http://127.0.0.1:8000/api/getsinglecontact/${id}`).then((response)=>{
        console.log(response.data.data[0]);
        setInput(response.data.data[0])
})

}


    const [state, setState] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/GetContact').then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);
    return (
        <div>
            <Nav></Nav>
            <div class="container">
                <div class="card-deck">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input class="form-control form-control-lg space" type="text" placeholder="Name" value={input.fname}></input>
      <input class="form-control form-control-lg space" type="text" placeholder="Contact" value={input.contact}></input>
      <input class="form-control form-control-lg space" type="text" placeholder="Email" value={input.email}></input>
      <input class="form-control form-control-lg space" type="text" placeholder="Message" value={input.message}></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
                    {state?.map((data, key) => (
                        <div class=" size ">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <p class="card-text">{data.fname} {data.lname}</p>
                                <p class="card-text">{data.contact}</p>
                                <p class="card-text">{data.email}</p>
                                <p class="card-text">{data.message}</p>
                                <div className='btton'>
                                <button type="button" class="btn btn-primary" onClick={()=>{response(data.id)}} data-toggle="modal" data-target="#exampleModal">
  Response
</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}
