import React from "react";



function Carddeck(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" alt = "unavailable" href={props.images}/>\
        <span onClick={()=>props.click(props.id)} className="choose">x</span>
      </div>
    </div>
  );
}

export default Carddeck;
