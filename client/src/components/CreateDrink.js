import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

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
    <div className="container">
    <Link to={'/'}>Home</Link>
    <Link to={'/my-drinks'}>My Drinks</Link>
    <h3>Add a New Drink</h3>
      <form onSubmit={submitHandler}>
      {errors.map((err, index) => (
              <p key={index}>{err}</p>
          ))}
        <p className='form-group'>
          <label>Name</label>
          <br />
          <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
        </p>
        <p className="form-group">
          <label>Description</label>
          <br />
          <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)}/>
        </p>
        <p className="form-group">
          <label>Instructions</label>
          <br />
          <input className="form-control" type="text" onChange={(e) => setInstructions(e.target.value)}/>
        </p>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}


export default CreateDrink