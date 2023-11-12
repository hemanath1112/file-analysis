import React from 'react'
import classes from './LoginHeader.module.css'
import { Link } from 'react-router-dom'
const LoginHeader = () => {
  return (
    <div className={classes.FirstHedar}>
        <div className={classes.HeaderName}>
            <h2>Data  <span>Privacy..</span></h2>
        </div>
        <ul>
            <li><Link to={'/'}>Project Abstart</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
    </div>
  )
}

export default LoginHeader