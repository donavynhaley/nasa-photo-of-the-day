import React from 'react';
const Head = (props) => {
    const {date, title} = props;
    return(
        <div className="head">
        <h1>Astronomy Picture of the Day</h1>
        <h3>{date}</h3>
        <h2>{title}</h2>
      </div>
    )
};

export default Head;
