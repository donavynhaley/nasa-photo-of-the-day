import React, {useState, useEffect} from "react";

function ImageFooter(props){
    const {SdUrl, HdUrl, copyright} = props;
    return (
        <div className="img-footer">
        <div className="buttons">
            <button>SD</button>
            <button>HD</button>
        </div>
        <p>Copyright: {copyright}</p>
    </div>
    );
}

export default ImageFooter;