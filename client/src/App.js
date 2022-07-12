import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DrinkList from './components/DrinkList'
import './App.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route element={<DrinkList/>} path='/'></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
