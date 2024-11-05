import React from 'react' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from  './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import PlaceOrder from './pages/PlaceOrder'
import Orders from  './pages/Orders'
import Product from './pages/Product'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/login' element={<Login/>} /> */}
        <Route path='/register' element={<Register/>} />
        <Route path='place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App