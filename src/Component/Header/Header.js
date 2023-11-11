import React from 'react'
import classes from './Header.module.css'
// import { Link } from 'react-router-dom'


const Header = () => {


  return (
    <div className={classes.FirstHedar}>
    <div className={classes.HeaderName}>
        <h2>Boat <span>Detection..</span></h2>
    </div>
    <ul>
        <li>Home</li>
        <li>Detection</li>
        <li>Image Processing</li>
        <li>Login</li>
    </ul>
</div>
  )
}

export default Header
