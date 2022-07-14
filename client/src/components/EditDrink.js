import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

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
}

export default EditDrink