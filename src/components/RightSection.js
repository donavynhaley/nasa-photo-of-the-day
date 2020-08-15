import React from "react";

function RightSection(props){
    const {explanation} = props
    return (
        <section className="right-section">
        <h2>Description</h2>
        <p>{explanation}</p>
      </section>
    )
}

export default RightSection;