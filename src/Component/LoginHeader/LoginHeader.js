import React from 'react'
import classes from './LoginHeader.module.css'
// import { Link } from 'react-router-dom'
const LoginHeader = () => {
  return (
    <div className={classes.FirstHedar}>
        <div className={classes.HeaderName}>
            <h2>Boat <span>Detection..</span></h2>
        </div>
        <ul>
            {/* <li><Link to={'/'}>Project Details</Link></li>
            <li><Link to={'/Login'}>Login</Link></li> */}
            <li>Project Abstart</li>
            <li>Login</li>
        </ul>
    </div>
  )
}

export default LoginHeader