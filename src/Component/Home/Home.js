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


      <h2>Secure and Smart Logistics Management
using Hybrid Enhanced Efficiency 
for Data Privacy
</h2>
        <button className={classes.EnterPage} onClick={Handle}>Datas </button>
    </div>
  )
}

export default Home