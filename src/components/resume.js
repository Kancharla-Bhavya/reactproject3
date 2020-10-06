import React from 'react';
import data from "../data.json";

function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);
	return(
		<div className ="row">
		<div className="col-sm-10 col-md-2">
		<div className="card">
			<h1>{profile.card.name}</h1>
		</div>
		</div>	
		</div>
		
		);
}

export default Resume;