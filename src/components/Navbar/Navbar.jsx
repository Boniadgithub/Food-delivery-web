import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo'/>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile app</li>
        <li>Contact Us </li>
      </ul>
      <div className='nav-right'>
         <img src={assets.search_icon} alt='' className=''/>
      </div>
    </div>
  )
}

export default Navbar
