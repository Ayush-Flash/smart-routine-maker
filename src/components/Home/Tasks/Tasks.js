import React from 'react';
import styles from './tasks.module.css';
import Task from '../Task/Task'

const tasks = (props) => {
    return ( 
        <div className={styles.TasksContainer}>
            {props.tasks.map((task) => <Task key={task.id} task={task}/>)}
        </div> 
    );
}
 
export default tasks;
