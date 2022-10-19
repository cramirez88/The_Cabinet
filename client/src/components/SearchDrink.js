import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../SearchDrink.css'
import '../App.js'


const SearchDrink = props => {
  const [drinks, setDrinks] = useState([])
  const [drinkName, setDrinkName] = useState('')
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`

  

  const handleButtonSubmit = (e) => {
    e.preventDefault()
    if(drinkName === '') return
      axios.get(URL)
      .then(res => {setDrinks(res.data.drinks)
                    console.log(res.data.drinks)
      })
      .catch(err => console.log(err))
   
      setDrinkName('')
    }
  return (
    <div className='contain'>
      <Link to={'/'} className='button'>Home</Link>
      <form onSubmit={handleButtonSubmit}>
      <h1 className='title'>&#127958; It's 5' O Clock Somewhere! &#127865;</h1>
        <div className='c-form'>
        <input className='search' type='text' onChange={e => setDrinkName(e.target.value)} value={drinkName}></input>
        <button className='button'>Search for a Drink!</button>
        </div>
      </form>
      <div>
      <div className='card-contain'>
      {
        drinks.map((drink, index) => (
          <div key={index} className='card'>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} ></img>
            <div>
            <h4 className='card-title'>{drink.strDrink}</h4>
            <p>Glass: {drink.strGlass}</p>
            <h4>Ingredients:</h4>
            <p className='card-text'>{drink.strIngredient1}</p>
            <p className='card-text'>{drink.strIngredient2}</p>
            <p className='card-text'>{drink.strIngredient3}</p>
            <p className='card-text'>{drink.strIngredient4}</p>
            <p className='card-text'>{drink.strIngredient5}</p>
            <h4>Instructions</h4>
            <p className='card-text'>{drink.strInstructions}</p>
            </div>
          </div>
        ))
      }
      </div>
      
  
      </div>

    </div>
  )
}

export default SearchDrink