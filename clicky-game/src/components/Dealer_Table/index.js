import React from 'react';
import "./styles.css"

const DealerTable = (props)=>
 <div className = "dealerTable" > 
 <h4 className = "score"> score: {props.scoreTitle}</h4>
 <div>{props.children}</div>
 </div>

export default DealerTable;