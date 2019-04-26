import React from "react";



function Carddeck(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" alt = "unavailable" href={props.image}/>
        <span className="choose" onClick={()=>props.clickHandler(props.id)} >x</span>
      </div>
    </div>
  );
}

export default Carddeck;
