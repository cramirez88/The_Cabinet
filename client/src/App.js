import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DrinkList from './components/DrinkList'
import './App.css';
import SearchDrink from './components/SearchDrink';
import CreateDrink from './components/CreateDrink';
import MyDrinkList from './components/MyDrinkList';
import EditDrink from './components/EditDrink';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<DrinkList/>} path={'/'}></Route>
          <Route element={<SearchDrink/>} path={'/new'}></Route>
          <Route element={<CreateDrink/>} path={'/create'}></Route>
          <Route element={<MyDrinkList/>} path={'/my-drinks'}></Route>
          <Route element={<EditDrink/>} path={'/edit/:_id'}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
