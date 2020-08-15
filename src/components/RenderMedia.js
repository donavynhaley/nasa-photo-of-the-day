import React from "react";
import ReactPlayer from 'react-player/youtube';
function RenderMedia(props){
    const {mediaType, astroUrl} = props;

    if(mediaType==="image"){
        return <img src={astroUrl} alt="Responsive image"></img>;
    }
    else if(mediaType==="video"){
        return <ReactPlayer playing={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width = "100%" height="85%" controls ={true}/>
    }
    else{
        return null;
    }
}

export default RenderMedia;