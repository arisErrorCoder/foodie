import React from 'react'
import './App.css'
import Home from './Components/Pages/Home'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header/Header'
import { CartProvider } from 'react-use-cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart/Cart'

function App() {

  return (
        <>
    <BrowserRouter>
    <CartProvider>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cart' element={[<Cart/>,<Header/>]}/>
    </Routes>
</CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
