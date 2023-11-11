import React from 'react'
import { useState } from 'react';
import SearchFile1 from './SearchFile1';
import { useNavigate } from 'react-router-dom';
import classes from './File.module.css'

function VideoUploader() {
    const [videoFile, setVideoFile] = useState(null);
    const [videoFileName, setVideoFileName] = useState('');
    const [showMyComponent1, setShowMyComponent1] = useState(false);
    const [showMyComponent2, setShowMyComponent2] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const Navigate = useNavigate();
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        setVideoFile(file);
        setVideoFileName(file.name);
      } else {
        setVideoFile(file);
        setVideoFileName(file.name);
      }
    };
  
    // const handleShowMyComponent = () => {
    //   // Your existing logic for showing components based on the filename
  
    //   // Set showMyComponent based on the filename
    //   if (videoFileName === '#abcd') {
    //     Navigate('/searchFile1')
    //   } else if (videoFileName === '2.mp4') {
    //     setShowMyComponent(<Sapan2 />);
    //   }
    //   // ... Add similar conditions for other filenames
    //   else {
    //     // Handle the case when the filename doesn't match any condition
    //     setShowMyComponent(null);
    //   }
    // };
  
    const handleSearch = () => {

      if (searchTerm === '#abc') {
        setShowMyComponent1(true);
      } else if (searchTerm === '#abcd') {
        setShowMyComponent2(true);
      }
    };
  
    return (
      <div className={classes.VideoAnalysis}>
        <div className={classes.Videodetails}>
          <input
            type="text"
            placeholder="Search video name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          {showMyComponent1 && <SearchFile1/>}
        </div>
      </div>
    );
  }
  
  export default VideoUploader;
  