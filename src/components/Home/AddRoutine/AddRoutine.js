import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './addroutine.module.css';

const addRoutine = (props) => {
    let routineNameInput = '';

    const onInputChange = (event) => {
        routineNameInput = event.target.value;
    }

    const onRoutineAddClick = () => {
        if(routineNameInput.length > 0) {
            if(props.match.url === '/home/handler') {
                props.onAddRoutine(routineNameInput, props.selectedRoutine.id) 
            } else {
                props.onAddRoutine(routineNameInput);
            }
        }
    }
 
    return (  
        <div className={styles.InputContainer}>
            <input type='text' placeholder={props.placeholderText} onChange={onInputChange} className={styles.RoutineInput}/>
            <button className={styles.AddRoutine} onClick={onRoutineAddClick}>+</button>
        </div>
    );
}
 
export default withRouter(addRoutine);