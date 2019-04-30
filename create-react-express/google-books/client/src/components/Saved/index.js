import React from "react"
import "./styles.css"

const Saved= props => 
<div>
  <a href={props.infoLink} className="list-group-item list-group-item-action">
    <h3 className="mb-1 title">{props.title}</h3>
  <img src={props.image} className="mr-3"  id="pic" alt="Ooops..."/>

  <h5 className="mb-1">{props.subtitle}</h5>
  <p className="mb-1">{props.description}</p>
    <div className="d-flex w-100 justify-content-between">

      <small className="text-muted">{props.rating}</small>
    </div>

    <ul className="list-group">
  <li className="list-group-item">Authors: {props.authors}</li>
  <li className="list-group-item">Publisher: {props.pub}</li>
  <li className="list-group-item">Language: {props.lang}</li>
  <li className="list-group-item">Language: {props.authors}</li>
  <li className="list-group-item">Print Type: {props.printType}</li>
  <li className="list-group-item">Page Count: {props.pageCount}</li>
  <li className="list-group-item">Link: {props.infoLink}</li>
  <li className="list-group-item">Saleability: {props.sale}</li>
  </ul>
  </a>
  <button  type="button" className="btn btn-primary buttonC" onClick = {()=>props.delete(props.id)}>Delete Book</button>
  </div>
   
   export default Saved;
  