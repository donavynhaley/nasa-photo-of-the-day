import React, {useState, useEffect} from "react";

function ImageHeader(props){
    const {title, date} = props;
    return (
        <div className="img-header">
        <h2>{title}</h2>
        <h3>{date}</h3>
      </div>
    );
}

export default ImageHeader;