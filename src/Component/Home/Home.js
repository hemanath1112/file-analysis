import React from 'react'
import classes from './Home.module.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const Navigate = useNavigate()

  const Handle = ()=>{
    Navigate('/process')
  }

  return (
    <div className={classes.Home}>


      <h2>Next-Gen Maritime Security: Leveraging Advanced AIS Analytics for Precision Detection and Monitoring of Boat Identification in Dynamic Ocean Environments</h2>
        <button className={classes.EnterPage} onClick={Handle}>Boat Identification</button>
    </div>
  )
}

export default Home