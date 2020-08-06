import React, { Component } from 'react';
import Todos from './Todos/Todos';
import styles from './handler.module.css';
import AddRoutine from '../AddRoutine/AddRoutine';


class Handler extends Component {
    state = {  }

    render() { 
        return ( 
            <div className={styles.HandlerContainer}>
                <AddRoutine placeholderText={'Add your task...'} selectedRoutine={this.props.selectedRoutine[0]} onAddRoutine={this.props.onAddRoutine}/>
                <Todos todoDeleteHandler={this.props.todoDeleteHandler} todos={this.props.selectedRoutine[0].todos}/>
            </div> 
        );
    }
}
 
export default Handler;