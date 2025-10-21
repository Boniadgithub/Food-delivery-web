import React from 'react'
import './Placeorder.css'
const Placeorder = () => {
  return (
    <form className='place-order'>  
      <div className='place-order-left'>
        <p className='title'>Deivery Information</p>
        <div className='multi-feilds'>
         <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email Address' /> 
        <input type="text" placeholder='Steet' />
      
        <div className='multi-feilds'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-feilds'>
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone Number' />
        
      </div>
      <div className='place-order-right'>

      </div>
    </form>
  )
}

export default Placeorder
