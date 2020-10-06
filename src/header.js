import React from 'react';
function Header(){
	return(
		<div>
		<h1>this is my header file</h1>
		<Welcome></Welcome>
		</div>
		);
}

let Welcome = () =>{
	return <p>this is Welcomepage</p>
}

export default Header;