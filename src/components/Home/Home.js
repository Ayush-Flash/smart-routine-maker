import React, { Component } from 'react';
import styles from './home.module.css';
import AddRoutine from './AddRoutine/AddRoutine';

class Home extends Component {
    state = {
        todos : [
            {
                id: 1,
                todoText: 'Clean the room',
                isCompleted: false
            },
            {
                id: 2,
                todoText: 'Get ready for Work',
                isCompleted: false
            }
        ]
    }
    render() { 
        return ( 
            <div className={styles.HomeBody}>
                <AddRoutine />
            </div> 
        );
    }
}
 
export default Home;
