import React from 'react'
import Email_icon from '../Assets/Emailicon.png'
import User_Icon from '../Assets/UserIcon.png'
import padlock from '../Assets/padlock.png'
import './LoginSignup.css'
import { useState } from 'react'


function LoginSignup() {

    const [action,setAction] = useState("Sign Up")

  return (
    <div className='container'>
    <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
    {action ==="Login" ? <div></div> : <div className="input">
            <img src={User_Icon} alt="user" />
            <input type="text"  placeholder='Enter Your Name'/>
        </div> }

      

        <div className="input">
            <img src={ Email_icon } alt="Email" />
            <input type="email" placeholder='Enter your Email ' />
        </div>

        <div className="input">
            <img src={ padlock } alt="Password" />
            <input type="password" placeholder='Enter your Password'/>
        </div>
    </div>
    
     {action==="Sign Up"? <div> </div> : <div className="forgot-password"> Lost Password ?  <span> click here! </span></div>}
    
    <div className="submit-container">
        <div className={action==="Login"?"submit gray" : "submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray" : "submit" } onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    </div>
  )
}

export default LoginSignup
