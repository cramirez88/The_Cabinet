import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import '../CreateDrink.css'

const CreateDrink = props => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/drink", {
      name,
      description,
      instructions
    }
    ).then((res) => {
      console.log(res)
      navigate('/my-drinks')
    }) 
    .catch((err) => {
          const errorResponseObj = err.response.data.errors
          const errorArr = []
          for (const key of Object.keys(errorResponseObj)){
            errorArr.push(errorResponseObj[key].message)
          }
          setErrors(errorArr)
            });
  };


  return (
    <div className="contain">
    <Link className='form-buttons nav-button'to={'/'}>Home</Link>
    <Link className='form-buttons nav-button' to={'/my-drinks'}>My Drinks</Link>
   
      <form className='form-holder' onSubmit={submitHandler}>
      {errors.map((err, index) => (
              <p className='color' key={index}>{err}</p>
          ))}
       <h2 className='color'>Add a New Drink</h2>
        <p className='f-group'>
          <label className='color'>Name</label>
          <br />
          <input className="f-control" type="text" onChange={(e) => setName(e.target.value)} />
        </p>
        <p className="f-group">
          <label className='color'>Description</label>
          <br />
          <textarea className="f-control text-form" type="text" onChange={(e) => setDescription(e.target.value)}></textarea>
        </p>
        <p className="f-group">
          <label className='color'>Instructions</label>
          <br />
          <textarea className="f-control text-form" type="text" onChange={(e) => setInstructions(e.target.value)}></textarea>
        </p>
        <button className="form-buttons">Submit</button>
      </form>
    </div>
  );
}


export default CreateDrink