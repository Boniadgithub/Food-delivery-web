import React from 'react'
import './LoginPopup.css'
import  {assets} from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = React.useState("Login");
  return (
    <div className='login-popup'>
       <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="close"/>
        </div>
        <div className="login-popup-input">
          {currState==="Login"?<></> :  <input type='text 'placeholder='Your name' required />}
        
          <input type='email' placeholder='Email address' required />
          <input type='password' placeholder='Password' required />
          
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login "}</button>
       </form>
    </div>
  )
}

export default LoginPopup
