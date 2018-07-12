import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.appTitle = 'my ToDo items';
	}
	render(){
		return (
			<div className='title'>
				<h1>{this.appTitle} : {this.props.data.length}</h1>
			</div>
			)
	}
}

export default Title;