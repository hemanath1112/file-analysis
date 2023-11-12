import React, { useState } from 'react'
import classes from './Abstart.module.css'
import ProjectDetails from './ProjectDetails'
import { useNavigate } from 'react-router-dom'

const Abstart = () => {
    const navigate = useNavigate();

    const showHandler=()=>{
        navigate('/Details')
    }

  return (
    <div >
        <div className={classes.AbstartHome}>
            <p className={classes.Welcome}>Welcome..</p>
            <h2>Secure and Smart Logistics Management
using Hybrid Enhanced Efficiency 
for Data Privacy
</h2>
            <button className={classes.EnterPage} onClick={showHandler}>Go To Project Details</button>
        </div>
    </div>
  )
}

export default Abstart