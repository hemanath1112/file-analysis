import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {


  return (
    <div className={classes.FirstHedar}>
    <div className={classes.HeaderName}>
        <h2>Data  <span>Privacy..</span></h2>
    </div>
    <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/process'}>User Files</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
    </ul>
</div>
  )
}

export default Header
