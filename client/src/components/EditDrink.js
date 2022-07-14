import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const EditDrink = props => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  const {_id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/drink/${_id}`)
    .then(res => {
      setName(res.data.name)
      setDescription(res.data.description)
      setInstructions(res.data.instructions)
    })
    .catch(err => console.log(err))
  }, [])


  return(
    <div>
      <Link to={'/'}>Home</Link>
      <form>
        <p className='form-group'>
          <label>Name</label>
          <br />
          <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        </p>
        <p className="form-group">
          <label>Description</label>
          <br />
          <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
        </p>
        <p className="form-group">
          <label>Instructions</label>
          <br />
          <input className="form-control" type="text" onChange={(e) => setInstructions(e.target.value)} value={instructions}/>
        </p>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  )
}

export default EditDrink