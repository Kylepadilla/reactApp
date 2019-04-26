import React from "react";



function Carddeck(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" alt = "unavailable" href={props.images}  onClick={()=>props.click(props.id)}/>
      </div>
    </div>
  );
}

export default Carddeck;
