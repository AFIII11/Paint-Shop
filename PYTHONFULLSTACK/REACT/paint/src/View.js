import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import './View.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function View() {
  const nav=useNavigate()
  const [state, setState] = useState([])
  const deleete = (val) => {
    const id = (val)
    axios.delete(`http://127.0.0.1:8000/api/Deleteproduct/${id}`).then((response) => {
      console.log(response);
    })
    window.location.reload()
  }
  const edit = (val)=>{
const id =val
nav(`/edit/${id}`)
  }



  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Getproduct').then((response) => {
      console.log(response);
      setState(response.data.data)

    }).catch((error) => { console.log(error); })
  }, [])
  console.log(state);
  return (
    <>
      <Nav />
      <div className='mt-5'>

        <table class="table table-striped table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Catagory</th>
              <th scope="col">Color</th>
              <th scope="col">Brand</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {state[0] ?
              <>

                {state?.map((data, key) => (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.catagories}</td>
                    <td>{data.color}</td>
                    <td>{data.brands}</td>
                    <td>{data.contact}</td>
                    <i class="bi bi-trash" onClick={() => { deleete(data.id) }}></i>&nbsp;&nbsp;
                    <i class="bi bi-pencil-square" onClick={() => { edit(data.id) }}>Edit</i>
                  </tr>
                ))}


              </>
              :
              <td>No Data Found</td>
            }
          </tbody>
        </table>
      </div>
    </>

  )
}
