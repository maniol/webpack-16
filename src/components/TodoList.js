import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js'

const TodoList = (props) => {
	const listItems = props.data.map((item) =>
		<li key={item.id} href="#" onClick={() => props.removeTodo(item.id)}><Todo value={item.text}/></li>
	);
	return <div className={style.TodoList}><ul>{listItems}</ul></div>
}

export default TodoList;