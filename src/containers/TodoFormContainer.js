import React from 'react';
import TodoFormButton from '../components/TodoFormButton.js';
import TodoForm from '../components/TodoForm.js';

class TodoFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			newTask: ''};
	}
	displayForm() {
		this.setState({showForm: true});
	}
	handleSubmit(e) {
		this.props.addTodo(this.state.newTask);
		e.preventDefault();
		this.setState({
			showForm: false,
			newTask: ''})
	}
	handleChange(e) {
		this.setState({newTask: e.target.value});
	}
	render() {
		return (
				<div>
					<TodoFormButton displayForm={this.displayForm.bind(this)} />
					<div>{this.state.showForm ? <TodoForm
						handleSubmit={this.handleSubmit.bind(this)}
						handleChange={this.handleChange.bind(this)}
						newTask={this.state.newTask} />: null}
					</div>
				</div>
		);
	}
}

export default TodoFormContainer;