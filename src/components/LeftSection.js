import React, {useState, useEffect} from "react";
import ImageHeader from './ImageHeader.js';
import ImageFooter from './ImageFooter.js';

function LeftSection(props){
    const {SdUrl, HdUrl, title, date, copyright} = props;
    return (
        <section className="left-section">
        <div className="img-container">
            <ImageHeader title={title} date={date}></ImageHeader>
            <img src={SdUrl} class="img-fluid" alt="Responsive image"></img>
            <ImageFooter></ImageFooter>
        </div>
      </section>
    );
}

export default LeftSection;