import React from 'react';
import styles from './task.module.css'
const task = (props) => {
    return ( 
        <div className={styles.TaskContainer}>
            <p className={styles.TaskName}>{props.task.title}</p>
            <button className={styles.DeleteTask}>x</button>
        </div>
    );
}
 
export default task;