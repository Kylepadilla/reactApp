import React from 'react';
import "./styles.css"



const Wrapper = (props) =>
 <div className = {props.className === true ? 'shake' : 'still'}>
 {props.children}
 </div>

export default Wrapper;