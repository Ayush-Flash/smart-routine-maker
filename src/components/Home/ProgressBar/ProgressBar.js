import React, { Component } from 'react';
import styles from './progressbar.module.css';

class ProgressBar extends Component {
    state = {  
        progress: null,
        progressStyle : {}
    }

    componentDidMount() {
        setTimeout(() =>{
            let total = this.props.todos.length
            let completed = (this.props.todos.filter(todo => todo.isCompleted === true)).length;
            let progress = (total > 0) ? Math.floor((completed / total) * 100) : 0;
            this.setState({
                progress : progress,
                progressStyle : {opacity: 1, width: `${progress}%`}
            })
        })
    }

    render() { 
        return (  
            <div className={styles.ProgressBarContainer}>
                <div className={styles.Percentage}>
                        {this.state.progress}%
                </div>
                <div className={styles.Progress}>
                    <div className={styles.ProgressDone} style={this.state.progressStyle}>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProgressBar;