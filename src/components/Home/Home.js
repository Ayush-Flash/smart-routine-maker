import React, { Component } from 'react';
import styles from './home.module.css';
import RoutineCards from './RoutineCards/RoutineCards';
import Handler from './Handler/Handler';
import { Route, withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRoutine: null,
            routines : [
                // {
                //     _id : ,
                //     name : ,
                //     todos : [ {_id: , todo, isCompleted}...]
                // },...
            ]   
        }
    }

    componentDidMount() {
        fetch('https://radiant-mountain-06539.herokuapp.com/getRoutines', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : this.props.username  
            })
        }).then(data => data.json())
          .then(routines => {
              if(routines !== null) {
                  let newRoutines = [...routines];
                  this.setState({routines : newRoutines});
              }
          })
          .catch(err => console.log(err));
    }

    handelCardClick = (_id) => {
        const selectedRoutine = this.state.routines.filter(routine => routine._id === _id );
        this.setState({selectedRoutine: selectedRoutine})
        this.props.history.push(this.props.match.url + '/handler')
    }
    
    onAddRoutineHandler = (routineName) => {
        fetch('https://radiant-mountain-06539.herokuapp.com/addRoutine', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : this.props.username,
                name : routineName,
                todos : []                
            })
        })
        .then(data => data.json())
        .then((res) => {
            if(res.inserted === true) {
                const newRoutine = {
                    _id : res._id,
                    name : routineName,
                    todos : []
                }
                const routines = [...this.state.routines];
                routines.push(newRoutine);
                this.setState({routines : routines});
            }  
        })
    }
    
    handelCardDelete = (_id) => {
        fetch('https://radiant-mountain-06539.herokuapp.com/deleteRoutine', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : this.props.username,
                _id : _id
            })
        })
        .then(data => data.json())
        .then((res) => {
            const newRoutines = this.state.routines.filter(routine => routine._id !== _id );
            this.setState({routines : newRoutines});
        })
        .catch(err => console.log(err));
    }
    
    onTodoAddClick = (todoName, currentRoutineId) => {
        const newTodo = {
            username : this.props.username,
            _id : currentRoutineId,
            todo : todoName,
            isCompleted : false
        }
        fetch('https://radiant-mountain-06539.herokuapp.com/addTodo', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newTodo)
        }).then(data => data.json())
        .then((res) => {
            let foundIndex = this.state.routines.findIndex((routine) => routine._id === currentRoutineId)
            const routines = [...this.state.routines];
            const newTodo = {
                _id :  res._id,
                todo : todoName,
                isCompleted : false
            }
            routines[foundIndex].todos.push(newTodo);
            this.setState({routines : routines});
        })
        .catch(err => console.log(err));
    }

    onTodoCheckHandler = (value, todo_id) => {
        fetch('https://radiant-mountain-06539.herokuapp.com/updateTodo', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body :  JSON.stringify({
                "username" : this.props.username,
                "routine_id" : this.state.selectedRoutine[0]._id,
                "todo_id" : todo_id,
                "isCompleted" : value
            })
        }).then(data => data.json())
        .then(res => {
            if(res.updated) {
                let foundIndex = this.state.routines.findIndex((routine) => routine._id === this.state.selectedRoutine[0]._id);
                const updatedTodo = this.state.routines[foundIndex].todos.filter((todo) => todo._id === todo_id);
                updatedTodo[0].isCompleted = value;
                const newRoutine = this.state.routines[foundIndex];
                const midlleTodos = newRoutine.todos.filter(todo => todo._id !== todo_id);
                midlleTodos.push(updatedTodo);
                const finalRoutines = this.state.routines.filter(routine => routine._id !== this.state.selectedRoutine[0]._id)
                finalRoutines.push(newRoutine);
                this.setState({routines : finalRoutines});
            }   
        }).catch(err => console.log(err));
    }

    todoDeleteHandler = (_id) => {
        fetch('https://radiant-mountain-06539.herokuapp.com/deleteTodo', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : this.props.username,
                _id : this.state.selectedRoutine[0]._id,
                todo_id : _id
            })
        })
        .then(data => data.json())
        .then((res) => {
            let foundIndex = this.state.routines.findIndex((routine) => routine._id === this.state.selectedRoutine[0]._id);
            const newTodos = this.state.routines[foundIndex].todos.filter((todo) => todo._id !== _id);
            const modifiedRoutine = this.state.routines[foundIndex];
            modifiedRoutine.todos = newTodos;
            const newRoutines = this.state.routines.filter(routine => routine._id !== this.state.selectedRoutine[0]._id);
            newRoutines.push(modifiedRoutine);
            this.setState({routines : newRoutines});
        })
        .catch(err => console.log(err));

    }
    
    render() { 
        return ( 
            <div className={styles.HomeBody}>
                <Route path='/home' exact component={() => <RoutineCards handelCardDeleteClick={this.handelCardDelete} onAddRoutine={this.onAddRoutineHandler} handelCardClick={this.handelCardClick} routines={this.state.routines}/>} />
                {(this.state.selectedRoutine !== null) ? <Route path={ this.props.match.url + '/handler'} exact component={() => <Handler selectedRoutine={this.state.selectedRoutine} onAddRoutine={this.onTodoAddClick} todoDeleteHandler={this.todoDeleteHandler} onTodoCheckHandler={this.onTodoCheckHandler} />} /> : null}
            </div> 
        );
    }
}
 
export default withRouter(Home);
