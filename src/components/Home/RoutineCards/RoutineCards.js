import React from 'react';
import RoutineCard from '../RoutineCard/RoutineCard';
import styles from './routinecards.module.css';
import AddRoutine from '../AddRoutine/AddRoutine';

const routineCards = (props) => {
    return (  
        <div className={styles.Container}>
            <div className={styles.AddRoutineContainer}>
                    <AddRoutine placeholderText={'Add your plan title...'} onAddRoutine={props.onAddRoutine}/>
            </div>
            <div className={styles.CardsContainer}>
                {props.routines.map(routine => <RoutineCard handelCardClick={props.handelCardClick} handelCardDeleteClick={props.handelCardDeleteClick} key={routine._id} routine={routine} />)}
            </div>
        </div>
    );
}
 
export default routineCards;