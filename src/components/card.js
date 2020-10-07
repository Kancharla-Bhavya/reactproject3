import React from 'react';
import data from '../data.json';
import logo from '../bhavya.jpg';
import logo1 from '../bhavya.jpg';
import {Link} from 'react-router-dom';

let Cards=()=>{
	let cardsData=data.details;
	console.log(cardsData);

	let images=[logo,logo1];
	return(
		<div>
			<h1 className="text-primary">Cards</h1>
			<div className="row ml-5">
			{cardsData.map((values,index)=>(
			
			
			<div className="col-sm-10 col-md-4 col-lg-3 m-5 ml-10" key={index}>
			<div className="card">
				<img src={images[index]} height="300"/>
			<h1>
				{
					values.card.name
				}
		</h1>
		<a href={"mailto:"+values.card.email}>
			<h3>{values.card.email}</h3>
			</a>
			<h4>{values.card.mobile}</h4>
			<Link to={{pathname:"/resume",personcard:{id:index}}} className="btn btn-primary m-4">Click me</Link>
			</div>
			</div>
			))}
			
		</div>
			</div>
		
	);
}
export default Cards;
