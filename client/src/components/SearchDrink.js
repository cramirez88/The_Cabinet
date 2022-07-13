import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const SearchDrink = props => {
  const [drinks, setDrinks] = useState([])
  const [drinkName, setDrinkName] = useState('')
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`

 

  const handleButtonSubmit = (e) => {
    e.preventDefault()
      axios.get(URL)
      .then(res => {setDrinks(res.data.drinks)
                    console.log(res.data.drinks)
                    console.log(drinks)
      })
      .catch(err => console.log(err))
    }
    
  

  return (
    <div>
      <h1>It's 5' O Clock Somewhere!</h1>
      <Link to={'/'}>Home</Link>
      <form onSubmit={handleButtonSubmit}>
        <input type='text' onChange={e => setDrinks(e.target.value)}></input>
        <button>Search for a Drink</button>
      </form>
      {/* {
        drinks.map((drink, index) => (
          <div key={index}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
          </div>
          
        ) )
      } */}
     
    </div>
  )
}

export default SearchDrink