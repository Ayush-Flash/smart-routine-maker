import React from 'react';
import styles from './todo.module.css';
const todo = (props) => {
    return ( 
        <div className={styles.TodoCardContainer}>
            <input type="checkbox" className={styles.TodoCheckBox}/>
            <p className={styles.TodoClassName}>{props.todo.todo}</p>
            <button className={styles.DeleteTodo}>Delete</button>
        </div>
    );
}
 
export default todo;