import React from 'react'
import classes from './Login.module.css'

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Navigate = useNavigate()

  const NavigaterHandling =()=>{
    Navigate('/home')
  }
  return (
    <div className={classes.Login}>
 
        <div className={classes.LoginForm}>
          <h3 className={classes.LoginTitle}>Secure and Smart Logistics Management
using Hybrid Enhanced Efficiency 
for Data Privacy
</h3>
          <h4 className={classes.Title}>User's Login</h4>
          <form action="" onSubmit={(e)=>e.preventDefault(e)} className={classes.Forms} >
              <label htmlFor="email">Enter your Email</label>
              <input type="email" name="email" id="email" required/>

              <label htmlFor="Password">Enter Your Password</label>
              <input type="password" required />
              <button type='submit'onClick={NavigaterHandling}>Login</button>
          </form>

        </div>
    
        
    </div>
  )
}

export default Login