import React, { Component } from 'react';

class Handler extends Component {
    state = {  }
    render() { 
        return ( <div>
            {console.log(this.props.selectedRoutine)}
        </div> );
    }
}
 
export default Handler;