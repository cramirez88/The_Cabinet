import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const MyDrinkList = props => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/drink')
    .then(res => setDrinks(res.data))
    .catch(err => console.log(err))
  }, [])

  const deleteDrink = _id => {

    axios.delete(`http://localhost:8000/api/drink/${_id}`)
    .then(deletedDrink => {
      setDrinks(drinks.filter(filterDrinks => filterDrinks._id !== _id))
  
    }, [])
    .catch(err => console.log(err))
  }


  return (
    <div>
      <h1 className='color'>My Cocktails</h1>
      <Link className='btn btn-primary drink' to={'/create'}>Create a Drink &#127865;</Link>
      <Link className='btn btn-success' to={'/new'}>Search for a Drink &#129488;</Link>
      <table className='table table-success'>
        <thead>
          <tr>
          <th col='scope'>Drink Name</th>
          <th col='scope'>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {
            drinks.map((drink, index) => (
              <tr key={index}>
                <td>{drink.name}</td>
                <td><Link to={`/edit/${drink._id}`}><button className='btn btn-primary'>Edit</button></Link><button onClick={() => deleteDrink(drink._id)}className='btn btn-danger del'>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyDrinkList