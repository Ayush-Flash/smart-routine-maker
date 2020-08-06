import React, { Component } from 'react';
import styles from './home.module.css';
import RoutineCards from './RoutineCards/RoutineCards';
import Handler from './Handler/Handler';
import { Route } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRoutine: null,
            routines : [
                // {
                //     id : ,
                //     name : ,
                //     todos : [ {id: , todo, isCompleted}...]
                // },...
            ]   
        }
    }
    
    handelCardClick = (id) => {
        const selectedRoutine = this.state.routines.filter(routine => routine.id === id );
        this.setState({selectedRoutine: selectedRoutine})
        this.props.history.push(this.props.match.url + '/handler')
    }
    
    onAddRoutineHandler = (routineName) => {
        const routines = [...this.state.routines];
        const newRoutine = {
            id: routines.length + 1,
            name: routineName,
            todos: [],
        }
        routines.push(newRoutine);
        this.setState({routines : routines});
    }
    
    onTodoAddClick = (todoName, currentRoutineId) => {
        let foundIndex = this.state.routines.findIndex((routine) => routine.id === currentRoutineId)
        const routines = [...this.state.routines];
        const newRoutineId = routines[foundIndex].todos.length;
        const newTodo = {
            id :  newRoutineId + 1,
            todo : todoName,
            isCompleted : false
        }
        routines[foundIndex].todos.push(newTodo);
        this.setState({routines : routines});
    }

    handelCardDelete = (id) => {
        const newRoutines = this.state.routines.filter(routine => routine.id !== id );
        this.setState({routines : newRoutines});
    }

    todoDeleteHandler = (id) => {
        let foundIndex = this.state.routines.findIndex((routine) => routine.id === this.state.selectedRoutine[0].id);
        const newTodos = this.state.routines[foundIndex].todos.filter((todo) => todo.id !== id);
        const modifiedRoutine = this.state.routines[foundIndex];
        modifiedRoutine.todos = newTodos;
        const newRoutines = this.state.routines.filter(routine => routine.id !== this.state.selectedRoutine[0].id);
        newRoutines.push(modifiedRoutine);
        this.setState({routines : newRoutines});
    }
    
    render() { 
        return ( 
            <div className={styles.HomeBody}>
                <Route path='/home' exact component={() => <RoutineCards handelCardDeleteClick={this.handelCardDelete} onAddRoutine={this.onAddRoutineHandler} handelCardClick={this.handelCardClick} routines={this.state.routines}/>} />
                {(this.state.selectedRoutine != null) ? <Route path={ this.props.match.url + '/handler'} exact component={() => <Handler selectedRoutine={this.state.selectedRoutine} onAddRoutine={this.onTodoAddClick} todoDeleteHandler={this.todoDeleteHandler}/>}/> : null}
            </div> 
        );
    }
}
 
export default Home;
