import React from 'react'
import './App.css'
import Header from './Componenets/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Componenets/Home'
import Cart from './Componenets/Cart'


const App = () => {
  return (
    <>
    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
      
     
    </>
  )
}

export default App