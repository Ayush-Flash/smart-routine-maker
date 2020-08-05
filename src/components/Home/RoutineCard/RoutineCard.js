import React, { Component } from 'react';
import styles from  './routinecard.module.css';

class RoutineCard extends Component {
    state = {  }
    render() { 
        return (  
            <div onClick={() => this.props.handelCardClick(this.props.routine.id)} className={styles.CardContainer}>
                <p className={styles.RoutineName}>{this.props.routine.name}</p>
                <hr />
            </div>
        );
    }
}
 
export default RoutineCard;