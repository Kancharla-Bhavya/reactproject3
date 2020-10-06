import React from 'react';
import data from "../data.json";

function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);
	return(
		<div className ="row">
		<div className="col-sm-10 col-md-2">
		<div className="card">
			<img src={logo}/>
			<h1>{profile.card.name}</h1>
			<a href={"mailto:"+profile.card.email}>
			<h3>{profile.card.email}</h3>
			</a>
			<h4>{profile.card.mobile}</h4>
			<h4>{profile.career.info}</h4>
		</div>
		</div>	
		</div>
		
		);
}

export default Resume;
