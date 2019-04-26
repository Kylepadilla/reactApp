import React from 'react';
import "./styles.css"

const DealerTable = (props, {children})=>
 <div className = "dealerTable" > 
 <h4 className = "score"> score: {props.score}</h4>
 {children}
 </div>

export default DealerTable;