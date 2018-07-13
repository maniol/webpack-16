import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
	const remove = (id) => {
		props.removeTodo(id)
	};
	const generateJSX = () => {
		let jsx = [];
		for (let i=0; i < props.data.length; i++) {
			jsx.push(<a href="#" key={i} id={props.data[i].id} onClick={() => remove(props.data[i].id)}>{props.data[i].text}</a>);
		}
		return jsx
	};
	const jsx = generateJSX();
	return (
		<div className={style.TodoList}>{jsx}</div>
		)
}

export default TodoList;