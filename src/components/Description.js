import React from 'react';

const Description = (props) => {
    const {explanation} = props;

    return(
        <div className="description">
        <h2>Explanation</h2>
        <p>{explanation}</p>
      </div>
    )
};

export default Description;
