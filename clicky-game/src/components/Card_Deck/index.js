import React from 'react';
import'./styles.css'

function Carddeck(props) {
	console.log(props.images);
	return (
		<div className="card">
			<div className="img-container">
				<img
					className="img-thumbnail img-responsive yeet"
					alt="unavailable"
					src={process.env.PUBLIC_URL + props.images}
				/>
				<span className="choose" onClick={() => props.clickHandler(props.id)}>
					x
				</span>
			</div>
		</div>
	);
}

export default Carddeck;
