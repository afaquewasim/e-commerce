import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import menBanner from './Components/Assets/banner_mens.png'
import womenBanner from './Components/Assets/banner_women.png'
import kidsBanner from './Components/Assets/banner_kids.png'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={menBanner} category='men' />} />
          <Route path='/women' element={<ShopCategory banner={womenBanner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kidsBanner} category='kid'/>} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route  path='/cart' element={<Cart />} />
          <Route  path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
