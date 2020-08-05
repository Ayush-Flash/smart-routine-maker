import React, { Component } from 'react';
import styles from './addroutine.module.css';

class AddRoutine extends Component {
    state = {  }
    render() { 
        return (  
            <div className={styles.InputContainer}>
                <input type='text' placeholder='Add your task...' className={styles.RoutineInput}/>
                <button className={styles.AddRoutine}>+</button>
            </div>
        );
    }
}
 
export default AddRoutine;