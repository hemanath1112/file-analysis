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
            {/* <p className={classes.Name}>Hii User..</p> */}
            <h2>Next-Gen Maritime Security: Leveraging Advanced AIS Analytics for Precision Detection and Monitoring of Boat Identification in Dynamic Ocean Environments</h2>
            <button className={classes.EnterPage} onClick={showHandler}>Go To Project Details</button>
        </div>
        {/* <div className={classes.SecondPage}>
        </div> */}
    </div>
  )
}

export default Abstart