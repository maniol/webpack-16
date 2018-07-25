import React from 'react';
import style from './TodoForm.css';

const TodoForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<label>
				Task:
				<input type="text" value={props.newTask} onChange={props.handleChange} />
			</label>
			<input type="submit" value="Submit" />
		</form>
		)
}

export default TodoForm;
