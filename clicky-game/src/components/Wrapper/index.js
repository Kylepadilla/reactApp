import React from 'react';
import "./styles.css"



const Wrapper = (props, {children}) =>
 <div className = {props.shouldShake === 'true' ? 'shake' : 'still'}>{children}</div>

export default Wrapper;