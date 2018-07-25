import React from 'react';
import style from './TodoFormButton.css';

const TodoFormButton = (props) => {

	return <div className={style.TodoFormButton}><i className="fas fa-plus-circle" onClick={props.displayForm}></i></div>
}

export default TodoFormButton;
