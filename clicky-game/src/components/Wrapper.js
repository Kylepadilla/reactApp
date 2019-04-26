import React from 'react';
import "./Wrapper.css"

const Wrapper = props=>
 <div className = {props.shouldShake === 'true'? 'shake' : 'still'}>{props.cardsShown}</div>

export default Wrapper;