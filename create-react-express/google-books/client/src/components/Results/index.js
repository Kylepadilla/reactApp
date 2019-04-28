import React from "react"

const Results = props => 
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.title}</h5>
      <small>{props.year}</small>
    </div>
    <p className="mb-1">{props.text}</p>
    <small>{props.author}.</small>
  </a>

</div>

export default Results