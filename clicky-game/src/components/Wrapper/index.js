import React from 'react';
import "./styles.css"



const Wrapper = (props) =>
 <div className = {props.class === true ? 'shake' : 'still'}>
 {props.children}
 </div>

export default Wrapper;