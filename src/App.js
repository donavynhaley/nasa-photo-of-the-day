import React, {useState, useEffect} from "react";
import "./App.css";
import downloadLogo from "./assets/images/download.png"

// API Key gWUHFoXqRrldO8cHpW9aU55FjssJ0CPzTOhQp82a
// Example Use: https://api.nasa.gov/planetary/apod?api_key=4LTBH2pc9kXTBhZhWFUK7oGJoUklB1UuPhhD7aOF
const axios = require('axios');

function App() {
  const [astroPic, setAstroPic] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=gWUHFoXqRrldO8cHpW9aU55FjssJ0CPzTOhQp82a&date=2020-07-30")
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
        <section className="left-section">
          <div className="img-header">
            <h2>{astroPic.title}</h2>
            <h3>{astroPic.date}</h3>
          </div>
          <div className="img-container" style={{
            backgroundImage: `url(${astroPic.url})`,
            height: `${astroPic.url.natualHight}`
          }} >
            <div className="sd-hd">
              <button>SD</button>
              <button>HD</button>
              <img src={downloadLogo} alt="Download icon" id="download-icon" width="30px" height="30px"/>
              <p>Copyright: {astroPic.copyright}</p>
            </div>
          </div>
        </section>
        <section className="right-section">
          <h2>Description</h2>
          <p>{astroPic.explanation}</p>
        </section>
      </div>
    </div>
  );
}

export default App;
