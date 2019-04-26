import React from 'react';
import "./styles.css"



const Wrapper = (props) =>
 <div className = {props.class === 'true' ? 'shake' : 'still'}>
 <div>{props.children}</div>
 </div>

export default Wrapper;