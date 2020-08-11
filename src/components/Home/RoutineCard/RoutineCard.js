import React, { Component } from 'react';
import styles from  './routinecard.module.css';

class RoutineCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.Container}>
                <div onClick={() => this.props.handelCardClick(this.props.routine._id)} className={styles.CardContainer}>
                    <div className={styles.InnerTopContainer}>
                        <p className={styles.RoutineName}>{this.props.routine.name}</p>
                    </div>
                    <hr />
                </div>
                <button className={styles.DeleteRoutineCard} onClick={() => this.props.handelCardDeleteClick(this.props.routine._id)}>x</button>
            </div> 
        );
    }
}
 
export default RoutineCard;