import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../DrinkList.css'
import '../App.css'


const DrinkList = props => {
  const [drinkName, setDrinkName] = useState([])

  

    useEffect(() => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
      .then(res => {setDrinkName(res.data.drinks)
                    console.log(res.data.drinks)
      })
      .catch(err => console.log(err))
    }, [])
  
  
  

  return (
 <div className='background-cover'>
   <div className='nav'>
    <div>
    <h1 className='menu'>Bar Menu</h1>
    </div>
    <div>
    <Link to={'/new'} className='buttons'>Search For a Drink</Link> 
  <Link to={'/create'} className='buttons'>Create a Drink</Link> 
  <Link to={'/my-drinks'} className='buttons'>My Drink List</Link>
    </div>
  
   </div>

<table className='table'>
<thead>
  <tr>
    <th className='text' scope='col'>Drink</th>
    <th className='text' scope='col'>Picture</th>
    <th className='text' scope='col'>Alcoholic?</th>
    <th className='text' scope='col'>How to Drink</th>
  </tr>
</thead>
<tbody>
  {
    drinkName.map((drink, index) => 
       (
      <tr key={index}>
        <td className='text'>{`${drink.strDrink}`}</td>
        <td><img className='images' src={`${drink.strDrinkThumb}`} alt='drink'></img></td>
        <td className='text'>{`${drink.strAlcoholic}`} </td>
        <td className='text'>{`${drink.strCategory}`} </td>
      </tr>
    ))
  }
</tbody>
</table>
    </div>

  )
}

export default DrinkList