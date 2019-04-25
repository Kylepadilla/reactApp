import React from 'react';
import "./Wrapper.css"

const Wrapper = props=>
 <div className = {props.errrr === 'true'? 'shake' : 'still'}>{props.images}</div>

export default Wrapper;