import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


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
 <div>
   <div className='nav'>
   <Link to={'/new'} className='btn btn-danger'>Search For a Drink</Link> 
  <Link to={'/create'} className='btn btn-primary'>Create a Drink</Link> 
  <Link to={'/my-drinks'} className='btn btn-success'>My Drink List</Link>
   </div>

<table className='table table-danger'>
<thead>
  <tr>
    <th scope='col'>Drink</th>
    <th scope='col'>Picture</th>
    <th scope='col'>Alcoholic?</th>
    <th scope='col'>How to Drink</th>
  </tr>
</thead>
<tbody>
  {
    drinkName.map((drink, index) => 
       (
      <tr key={index}>
        <td>{`${drink.strDrink}`}</td>
        <td><img src={`${drink.strDrinkThumb}`} width='100px' height={'100px'} alt='drink'></img></td>
        <td>{`${drink.strAlcoholic}`} </td>
        <td>{`${drink.strCategory}`} </td>
      </tr>
    ))
  }
</tbody>
</table>
    </div>

  )
}

export default DrinkList