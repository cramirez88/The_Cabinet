import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DrinkList from './components/DrinkList'
import './App.css';
import SearchDrink from './components/SearchDrink';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route element={<DrinkList/>} path={'/'}></Route>
          <Route element={<SearchDrink/>} path={'/new'}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
