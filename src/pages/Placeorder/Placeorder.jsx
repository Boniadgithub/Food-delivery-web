import React from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext';
import  { useContext } from 'react';




const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  
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
      <div className='cart-total'>
        <h2>Cart Total</h2>
        <div>
          <div className='cart-total-detail'>
            <p>subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-detail'>
            <p>Delivery free</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className='cart-total-detail'>
             <b>Total</b>
             <b>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button className='cart-checkout'>PROCEED TO PAYMENT</button>
      </div>
      </div>
    </form>
  )
}

export default Placeorder
