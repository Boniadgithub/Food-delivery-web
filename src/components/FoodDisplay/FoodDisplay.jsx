import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes {category !== 'All' ? `- ${category}` : 'Near You'} </h2>
      <div className="food-display-list">
        {food_list .filter(item => category === 'All' || item.category === category) .map ((item,index)=>{


            return< FoodItem key ={item.id||index} id={item.id||index} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
