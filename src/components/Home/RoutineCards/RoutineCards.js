import React from 'react';
import RoutineCard from '../RoutineCard/RoutineCard';
import styles from './routinecards.module.css';
import AddRoutine from '../AddRoutine/AddRoutine'

const routineCards = (props) => {
    return (  
        <div className={styles.CardsContainer}>
            <AddRoutine />            
            {props.routines.map(routine => <RoutineCard handelCardClick={props.handelCardClick} key={routine.id} routine={routine} />)}
        </div>
    );
}
 
export default routineCards;