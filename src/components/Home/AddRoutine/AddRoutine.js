import React from 'react';
import styles from './addroutine.module.css';

const addRoutine = (props) => {
    let routineNameInput = '';

    const onInputChange = (event) => {
        routineNameInput = event.target.value;
    }

    const onRoutineAddClick = () => {
        if(routineNameInput.length > 0) {
            props.onAddRoutine(routineNameInput);
        }
    }
 
    return (  
        <div className={styles.InputContainer}>
            <input type='text' placeholder='Add your task...' onChange={onInputChange} className={styles.RoutineInput}/>
            <button className={styles.AddRoutine} onClick={onRoutineAddClick}>+</button>
        </div>
    );
}
 
export default addRoutine;