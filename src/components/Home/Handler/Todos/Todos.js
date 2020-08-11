import React from 'react';
import Todo from '../Todo/Todo';
import styles from './todos.module.css';

const todos = (props) => {
    return (
        <div className={styles.TodosContainer}>
            {props.todos.map(todo => <Todo key={todo._id} todoDeleteHandler={props.todoDeleteHandler} todo={todo} />)}
        </div>
    );
}
 
export default todos;