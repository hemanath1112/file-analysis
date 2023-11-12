import React from 'react'
import classes from './Document.module.css'
import File1 from '../File/Files/user3.pdf'
import { useState, useEffect } from 'react'



const Document1 = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => {

      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <div className={classes.Download}>
      {loading?(
        <p>Wait Few Seconds..</p>
      ):(

        <div>
        <h2>Download Your Files</h2>
        <a href={File1} download='userFiles3' target='_blank'> <button> download</button></a>
        </div>
        )}
    </div>
  )
}

export default Document1