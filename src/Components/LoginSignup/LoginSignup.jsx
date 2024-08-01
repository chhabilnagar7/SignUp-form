import React, { useState } from 'react'
import './LoginSingup.css'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>

        </div>
        <div className="inputs">
            {/* adding action to update the state that if we click login btn then name container becone invisible otherwise it is visible at signup  */}
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}

           
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>

            </div>
        </div>
        {/* same as Name container forgot password would become invisible when we click on signUP */}
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action=== "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign-Up</div>
            <div className={action=== "Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignup
