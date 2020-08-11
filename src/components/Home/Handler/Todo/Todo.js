import React from 'react';
import styles from './todo.module.css';
const todo = (props) => {

    const handelDelete = () => {
        props.todoDeleteHandler(props.todo._id);
    }

    return ( 
        <div className={styles.TodoCardContainer}>
            <input type="checkbox" className={styles.TodoCheckBox}/>
            <p className={styles.TodoClassName}>{props.todo.todo}</p>
            <button onClick={handelDelete} className={styles.DeleteTodo}>Delete</button>
        </div>
    );
}
 
export default todo;