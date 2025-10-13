import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { assets } from './assets/assets'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {

  const [showLogin, setShowLogin] = React.useState(false);
  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
    <div className='app'>
         <Navbar setShowLogin={setShowLogin}/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
         </Routes>
         
    </div>
    <Footer/>
    
    </>
  )
}

export default App
