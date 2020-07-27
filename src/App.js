import React, {useState, useEffect} from "react";
import "./App.css";
import Head from './components/Head.js'
import Img from './components/Img.js'
import Description from './components/Description.js'
import Footer from './components/Footer.js'

// API Key 4LTBH2pc9kXTBhZhWFUK7oGJoUklB1UuPhhD7aOF
// Example Use: https://api.nasa.gov/planetary/apod?api_key=4LTBH2pc9kXTBhZhWFUK7oGJoUklB1UuPhhD7aOF
const axios = require('axios');

function App() {
  const [astroPic, setAstroPic] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=4LTBH2pc9kXTBhZhWFUK7oGJoUklB1UuPhhD7aOF")
      .then(response =>{
        setAstroPic(response.data)
        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Head date={astroPic.date} title={astroPic.title} />
      <Img imgSdSrc={astroPic.url} imgHdSrc={astroPic.hdurl} copyright={astroPic.copyright}/>
      <Description explanation={astroPic.explanation}/>
      <Footer />
    </div>
  );
}

export default App;
