import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'

const EditDrink = props => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  const [errors, setErrors] = useState([])
  const {_id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/drink/${_id}`)
    .then(res => {
      setName(res.data.name)
      setDescription(res.data.description)
      setInstructions(res.data.instructions)
    })
    .catch(err => console.log(err))
  }, [])


  const handleSubmit = e => {
    e.preventDefault()
    
    axios.put(`http://localhost:8000/api/drink/${_id}`, {
      name,
      description,
      instructions
    })
    .then(response => {
      
      setName(response.data.name)
      setDescription(response.data.description)
      setInstructions(response.data.instructions)
      navigate('/my-drinks')
    }) 
    .catch((err) => {
      const errorResponseObj = err.response.data.errors
      console.log(err.response.data)
          const errorArr = []
          for (const key of Object.keys(errorResponseObj)){
            errorArr.push(errorResponseObj[key].message)
          }
          setErrors(errorArr)
    })
  }

  return(
    <div className='contain'>
      <Link className='nav-button form-buttons' to={'/'}>Home</Link>
      <form className='form-holder' onSubmit={handleSubmit}>
      {errors.map((err, index) => (<p className='color' key={index}>{err}</p>))}
        <p className='f-group'>
          <label className='color'>Name</label>
          <br />
          <input className="f-control" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        </p>
        <p className="f-group">
          <label className='color'>Description</label>
          <br />
          <textarea className="f-control text-form" type="text" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        </p>
        <p className="f-group">
          <label className='color'>Instructions</label>
          <br />
          <textarea className="f-control text-form" type="text" onChange={(e) => setInstructions(e.target.value)} value={instructions}></textarea>
        </p>
        <button className="form-buttons nav-button">Submit</button>
      </form>
    </div>
  )
}

export default EditDrink