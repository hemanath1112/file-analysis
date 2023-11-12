import React from 'react'
import { useState } from 'react';
import SearchFile1 from './SearchFile1';
import { useNavigate } from 'react-router-dom';
import classes from './File.module.css'
import SearchIcon from '@mui/icons-material/Search';

function VideoUploader() {
    const [videoFile, setVideoFile] = useState('');
    const [showMyComponent1, setShowMyComponent1] = useState(false);
    const [showMyComponent2, setShowMyComponent2] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const Navigate = useNavigate();
  
 
    const handleSearch = () => {

      if (searchTerm === '#user@1') {
        setShowMyComponent1(true);
        Navigate('/password')
      } else if (searchTerm === '#user@2') {
        setShowMyComponent1(true);
        Navigate('/password')
      }else if (searchTerm === '#user@3') {
        setShowMyComponent1(true);
        Navigate('/password')
      }else if (searchTerm === '#user@4') {
        setShowMyComponent1(true);
        Navigate('/password')
      }else if (searchTerm === '#user@5') {
        setShowMyComponent1(true);
        Navigate('/password')
      }
    };
  
    return (
      <div className={classes.VideoAnalysis}>
        <div className={classes.Videodetails}>
          <h1 className={classes.Title}>Secure and Smart Logistics Management
using Hybrid Enhanced Efficiency 
for Data Privacy
</h1>
          <h1 className={classes.personDetails}>Search Army Person's Details</h1>
          <div className={classes.FromSearch}>
          <input
            type="text"
            placeholder="Search File's  "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          <button onClick={handleSearch}><SearchIcon/></button>
          </div>
          
          {showMyComponent1 && <SearchFile1 setSearchTerm={searchTerm}/>}
        </div>
      </div>
    );
  }
  
  export default VideoUploader;
  