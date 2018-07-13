import React from 'react';

const Title = props => {
	const appTitle = 'my ToDo items';
	return (
		<div className='title'>
			<h1>{appTitle} : {props.data.length}</h1>
		</div>
	)
}

export default Title;