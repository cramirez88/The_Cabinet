import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'
import '../MyDrinkList.css'

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
    <div className='cover'>
      <div className='header-top'>
      <h1 className='color'>My Cocktails</h1>
      <div className='link-btns'>
      <Link className='butto' to={'/create'}>Create a Drink &#127865;</Link>
      <Link className='butto' to={'/new'}>Search for a Drink &#129488;</Link>
      </div>
      
      </div>
      
      <table className='table'>
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
                <td><Link to={`/edit/${drink._id}`}><button className='button edit-btn'>Edit</button></Link><button onClick={() => deleteDrink(drink._id)}className='butto del-btn' >Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyDrinkList