import React, {useState, useEffect} from "react";
import "./App.css";
import RightSection from './components/RightSection.js'
import LeftSection from './components/LeftSection.js';
// API Key gWUHFoXqRrldO8cHpW9aU55FjssJ0CPzTOhQp82a
// Example Use: https://api.nasa.gov/planetary/apod?api_key=4LTBH2pc9kXTBhZhWFUK7oGJoUklB1UuPhhD7aOF
const axios = require('axios');

function App() {
  const [astroPic, setAstroPic] = useState({});
  const [astroDate, setAstroDate] = useState("");
  const [astroUrl, setAstroUrl] = useState("");
  const changeDate = date => {
    setAstroDate(date);
  };
  const switchUrl = url =>{
    setAstroUrl(url);
  }
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=gWUHFoXqRrldO8cHpW9aU55FjssJ0CPzTOhQp82a&date=${astroDate}`)
      .then(response =>{
        console.log(response);
        setAstroPic(response.data);
        setAstroDate(response.data.date);
        setAstroUrl(response.data.url);
      })
      .catch(error =>{
        console.log("Error: ", error);
      })
  }, [astroDate]);
  
  return (
    <div className="App">
      <header>
        <h1>NASA Astronomy Picture of the Day</h1>
      </header>
      <div className="main">
        <LeftSection 
        title={astroPic.title} 
        date={astroPic.date} 
        SdUrl={astroPic.url}  
        HdUrl={astroPic.hdurl} 
        astroUrl={astroUrl}
        copyright={astroPic.copyright}
        changeDate={changeDate}
        switchUrl={switchUrl}
        mediaType = {astroPic.media_type}
        >
        </LeftSection>
        <RightSection explanation={astroPic.explanation}></RightSection>
      </div>
    </div>
  );
}

export default App;