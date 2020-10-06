import React from 'react';

class StateComponent extends React.Component{

	render(){
		return(
			//React.createElement('div',{style:{background:'yellow'}},React.createElement('h2',null,'bhavya'))
			<Bhavya/>
			);
	}
}

class Bhavya extends React.Component{
	
	constructor(){
		super();
		this.state={
			name:"bhavya",
			secondname:"bhav",
			num:1
		}
	}

	changeState=()=>{
		this.setState({
			num:this.state.num+1
			
		})
	}
	render(){
		return(
			<div>
			<h2>{this.state.name}</h2>
			<h1>{this.state.secondname}</h1>
			<h2>{this.state.num}</h2>
			<button onClick={this.changeState}>click me</button>


			</div>
			);
	}
}

export default StateComponent;