import React, { useState } from 'react'
import classes from './File.module.css'
import Document1 from '../Document/Document1';
import Document2 from '../Document/Document2'
import Document3 from '../Document/Document3'
import Document4 from '../Document/Document4'
import Document5 from '../Document/Document5'
import { useNavigate } from 'react-router-dom';

const SearchFile1 = ({setSearchTerm}) => {
  const [search, setsearch]=useState();
  const [componnet, setComponent]=useState(false)
  const Navigate=useNavigate()

  const setPassword = ()=>{
    if(search==='#user@1'){
      setComponent(true)
      Navigate('/file')
    }else if(search==='#user@2'){
      setComponent(true)
      Navigate('/file2')
    }else if(search==='#user@3'){
      setComponent(true)
      Navigate('/file3')
    }else if(search==='#user@4'){
      setComponent(true)
      Navigate('/file4')
    }else if(search==='#user@5'){
      setComponent(true)
      Navigate('/file5')
    }
  }

  return (
    <div className={classes.SearchFile}>
      <h2> The efficient and secure management of data is paramount<span>{setSearchTerm}</span> </h2>
      <div className={classes.InputFile}>
        <input type="password" 
          required
          value={search}
          onChange={(e)=>setsearch(e.target.value)}
          placeholder='Enter Your Password'
        />
          <button onClick={setPassword}>Submit</button>
      </div>
      {componnet && <Document1/>}
    </div>
  )
}

export default SearchFile1