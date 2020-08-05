import React, { Component } from 'react';
import Todos from './Todos/Todos';
import styles from './handler.module.css';


class Handler extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.HandlerContainer}>
                <Todos todos={this.props.selectedRoutine[0].todos}/>
            </div> 
        );
    }
}
 
export default Handler;