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
      <h1>My Cocktails</h1>
      <Link to={'/create'}>Create a Drink</Link>
      <Link to={'/new'}>Search for a Drink</Link>
      <table>
        <thead>
          <tr>
          <th>Drink Name</th>
          <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {
            drinks.map((drink, index) => (
              <tr key={index}>
                <td>{drink.name}</td>
                <td><Link to={`/edit/${drink._id}`}><button className='btn btn-primary'>Edit</button></Link><button onClick={() => deleteDrink(drink._id)}className='btn btn-danger'>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyDrinkList