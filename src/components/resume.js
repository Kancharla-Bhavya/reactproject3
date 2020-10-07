import React from 'react';
import data from "../data.json";
import logo from "../bhavya.jpg";

function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);
	return(
		<div>
			<h1 className="text-primary">Resume</h1>
		<div className ="row">
		<div className="col-sm-10 col-md-3  ml-5">
		<div className="card ">
			<img src={logo} height="300"/>
			<h1>{profile.card.name}</h1>
			<a href={"mailto:"+profile.card.email}>
			<h3>{profile.card.email}</h3>
			</a>
			<h4>{profile.card.mobile}</h4>
			<button className="btn btn-primary m-4">Facebook</button>
			<button className="btn btn-primary m-4">Linkedin</button>
			<button className="btn btn-primary m-4">Github</button>	
				
		</div>
		</div>

		<div className="col-md-8 ">
		<div className="card">
		<h1 style={{ textAlign: "left" }}>Career Objective</h1>
		<p style={{ marginLeft: "50px"}}>{profile.career.info}</p>
		<h1 style={{ textAlign: "left" }}>Educational Qualification</h1>
		<p style={{ marginLeft: "50px"}}>{profile.educationalqualification.btech}</p>
		<p style={{ marginLeft: "50px"}}>{profile.educationalqualification.btech1}</p>
		<p style={{ marginLeft: "50px"}}>{profile.educationalqualification.intermediate}</p>
		<p style={{ marginLeft: "50px"}}>{profile.educationalqualification.ssc}</p>
		<h1 style={{ textAlign: "left" }}>Technical Skills</h1>
		<h5 style={{ textAlign: "left" }}>Programming Languages :</h5>
		<p className="ml-3">{profile.technicalskills.programminglanguages}</p>
		<h5 style={{ textAlign: "left" }}>Databases :</h5>
		<p className="ml-3">{profile.technicalskills.databases}</p>
		<h5 style={{ textAlign: "left" }}>Operating systems :</h5>
		<p>{profile.technicalskills.operatingsystems}</p>
		<h1 style={{ textAlign: "left" }}>Declaration</h1>
		<p style={{ marginLeft: "50px"}}>{profile.declaration.info}</p>

		</div>
		</div>

		</div>
		

		</div>
		
		);
}

export default Resume;
