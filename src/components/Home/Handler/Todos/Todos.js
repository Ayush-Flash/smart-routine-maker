import React from 'react';
import Todo from '../Todo/Todo';
import styles from './todos.module.css';

const todos = (props) => {
    return (  
        <div className={styles.TodosContainer}>
            {props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    );
}
 
export default todos;