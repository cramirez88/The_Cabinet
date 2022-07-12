import React, {useEffect, useState} from 'react'
import axios from 'axios'


const DrinkList = props => {
  const [drinkName, setDrinkName] = useState([])
  const [drinks, setDrinks] = useState([])

  

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then(res => {setDrinkName(res.data.drinks)
                  console.log(res.data.drinks)
    })
    .catch(err => console.log(err))
  }, [])

 


  return (
    <div>
      <form >
      <input type='text' onChange={e => setDrinkName(e.target.value)}></input>
      <button>Search Cocktail</button>
    </form>
    

<table className='table table-dark'>
<thead>
  <tr>
    <th scope='col'>Drink</th>
    <th scope='col'>Actions Available</th>
  </tr>
</thead>
<tbody>
  {
    drinkName.map((drink, index) => 
       (
      <tr key={index}>
        <td>{`${drink.strDrink}`}</td>
        <td><img src={`${drink.strDrinkThumb}`} width='100px' height={'100px'} alt='drink'></img></td>
        
      </tr>
    ))
  }
</tbody>
</table>
    </div>

  )
}

export default DrinkList