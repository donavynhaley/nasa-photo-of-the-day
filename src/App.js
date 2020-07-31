import React, {useState, useEffect} from "react";
import "./App.css";
import GetImage from './components/GetImage.js';
import RightSection from './components/RightSection.js'
import LeftSection from './components/LeftSection.js';

// API Key gWUHFoXqRrldO8cHpW9aU55FjssJ0CPzTOhQp82a
// Example Use: https://api.nasa.gov/planetary/apod?api_key=4LTBH2pc9kXTBhZhWFUK7oGJoUklB1UuPhhD7aOF
const axios = require('axios');

function App() {
  const [astroPic, setAstroPic] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=gWUHFoXqRrldO8cHpW9aU55FjssJ0CPzTOhQp82a")
      .then(response =>{
        console.log(response);
        setAstroPic(response.data)
      })
      .catch(error =>{
        console.log("Error: ", error);
      })
  }, []);

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
        copyright={astroPic.copyright}
        >
        </LeftSection>
        <RightSection explanation={astroPic.explanation}></RightSection>
      </div>
    </div>
  );
}

export default App;
