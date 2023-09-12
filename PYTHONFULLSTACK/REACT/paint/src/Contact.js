import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './Contact.css';
import axios from 'axios';

export default function Contact() {
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
                    {state?.map((data, key) => (
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <p class="card-text">{data.name}</p>
                                <p class="card-text">{data.contact}</p>
                                <p class="card-text">{data.email}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}
