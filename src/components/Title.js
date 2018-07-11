import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
		const appTitle = 'My ToDo items';
	}
	render(){
		return (
			<div className='title'>
				<h1>`${this.appTitle}:${this.state.data.length}`</h1>
			</div>
			)
	}
}

export default Title;