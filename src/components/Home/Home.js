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
                {
                    id : '1',
                    name: 'Career',
                    todos: [
                        {
                            id: 1,
                            todo: 'Learn DSA',
                            isCompleted: false
                        },
                        {
                            id: 2,
                            todo: 'Learn web development',
                            isCompleted: true
                        }
                    ]
                },
                {
                    id : '2',
                    name: 'Fittness',
                    todos: [
                        {
                            id: 1,
                            todo: 'Push up',
                            isCompleted: false
                        },
                        {
                            id: 2,
                            todo: 'Pull up',
                            isCompleted: true
                        }
                    ]
                },
                {
                    id : '3',
                    name: 'Trip Plan',
                    todos: [
                        {
                            id: 1,
                            todo: 'Search for hotels',
                            isCompleted: false
                        },
                        {
                            id: 2,
                            todo: 'Book hotel',
                            isCompleted: true
                        }
                    ]
                }
            ]
        }
    }
    
    handelCardClick = (id) => {
        console.log('Card got clicked', id);
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
    
    render() { 
        return ( 
            <div className={styles.HomeBody}>
                <Route path='/home' exact component={() => <RoutineCards onAddRoutine={this.onAddRoutineHandler} handelCardClick={this.handelCardClick} routines={this.state.routines}/>} />
                {(this.state.selectedRoutine != null) ? <Route path={ this.props.match.url + '/handler'} exact component={() => <Handler selectedRoutine={this.state.selectedRoutine} />}/> : null}
            </div> 
        );
    }
}
 
export default Home;
