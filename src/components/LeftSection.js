import React from "react";
import ImageHeader from './ImageHeader.js';
import ImageFooter from './ImageFooter.js';
import RenderMedia from './RenderMedia.js';
function LeftSection(props){
    const {SdUrl, HdUrl, title, date, copyright, changeDate, switchUrl, astroUrl, mediaType} = props;
    return (
        <section className="left-section">

            <ImageHeader title={title} changeDate={changeDate} date={date}></ImageHeader>
            <RenderMedia mediaType={mediaType} astroUrl={astroUrl}></RenderMedia>
            <ImageFooter 
            SdUrl={SdUrl} 
            HdUrl={HdUrl} 
            copyright={copyright}
            switchUrl={switchUrl}
            astroUrl={astroUrl}
            >
            </ImageFooter>

      </section>
    );
}

export default LeftSection;