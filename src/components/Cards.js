import React from "react";



function Carddeck(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt = "unavailable" src={props.image}></img>
      </div>
      <span className="cardPick" onClick={()=>props.handleInputChange(props.id)}>𝘅</span>
    </div>
  );
}

export default Carddeck;
