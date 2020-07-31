import React from 'react';

const Img = (props) => {
    const {imgSdSrc, imgHdSrc, copyright} = props;

    return(
        <div className="image-container">
        <img src={imgSdSrc} alt="Nasa img of the day"/>
        <div className="img-footer">
          <a href={imgHdSrc} target="_blank">HD Version</a>
          <p>Copyright: {copyright}</p>
        </div>
      </div>
    )
    
};

export default Img;
