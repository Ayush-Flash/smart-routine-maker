import React from 'react';
import styles from  './routinecard.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const routineCard = (props) => {
    return ( 
        <div className={styles.Container}>
            <div onClick={() => props.handelCardClick(props.routine._id)} className={styles.CardContainer}>
                <div className={styles.InnerTopContainer}>
                    <p className={styles.RoutineName}>{props.routine.name}</p>
                </div>
                <hr />
                <div className={styles.InnerBottomContainer}>
                    <ProgressBar todos={props.routine.todos}/>
                </div>
            </div>
            <button className={styles.DeleteRoutineCard} onClick={() => props.handelCardDeleteClick(props.routine._id)}>x</button>
        </div> 
    );
}
 
export default routineCard;