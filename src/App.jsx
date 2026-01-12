import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
import Footer from './components/Footer'
import TechFaq from './components/TechFaq'
import PaymentFaq from './components/PaymentFaq'
import IosFaq from './components/Iosfaq'
import AndroidFaq from './components/AndriodFaq'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/techfaq' element={<TechFaq/>}/>
          <Route path='/paymentfaq' element={<PaymentFaq/>}/>
          <Route path='/iosfaq' element={<IosFaq/>}/>
          <Route path='/andriodfaq' element={<AndroidFaq/>}/>
          </Routes>
          <Footer />
      </Router>
      
    </>
  )
}

export default App
